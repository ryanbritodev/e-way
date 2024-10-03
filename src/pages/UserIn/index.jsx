import { ArrowLeftRight } from "lucide-react";
import { InputLabel } from "../components/InputLabel";
import { useForm } from "react-hook-form";
import { Header } from "../Landing/components/Header/Header"
import { useEffect, useState } from "react";
import axios from "axios";

export const UserIn = () => {
  const { register, handleSubmit, formState, control, reset } = useForm();
  const [isRegister, setIsRegister] = useState(true);

  const onSubmit = async (data) => {
    console.log(data.emailLogin);
    if (
      (data.emailLogin === undefined && data.emailRegister === "") ||
      data.passwordRegister === "" ||
      data.confirmPasswordRegister === ""
    ) {
      alert("Preencha todos os campos antes de fazer o envio");
      return;
    }
    if (
      data.emailLogin === undefined &&
      data.confirmPasswordRegister !== data.passwordRegister
    ) {
      alert("As senhas diferem.");
      return;
    }
    if (
      (data.emailLogin !== undefined && data.emailLogin === "") ||
      data.passwordLogin === ""
    ) {
      alert("Preencha todos os campos antes de fazer o envio");
      return;
    }

    if (data.emailLogin !== undefined) {
      try {
        const req = await axios.post(
          "https://eway-api.onrender.com/users/login",
          {
            email: data.emailLogin,
            password: data.passwordLogin,
          }
        );

        if (req.status === 200) {
          localStorage.setItem("name", req.data.name);
          localStorage.setItem("email", req.data.email);
          alert("Autenticação concluída, seja bem-vindo!");
          window.location.href = "/";
        }
      } catch (err) {
        if (err.status === 502) {
          alert("Erro no servidor, tente novamente mais tarde!");
          return;
        }
        if (err.status === 404) {
          alert(
            "Usuário ou senha incorretos, crie uma conta caso ainda não tenha uma!"
          );
          return;
        }
      }
    } else {
      try {
        const req = await axios.post(
          "https://eway-api.onrender.com/users/register",
          {
            name: data.nameRegister,
            email: data.emailRegister,
            password: data.passwordRegister,
          }
        );

        if (req.status === 201) {
          localStorage.setItem("name", req.data.name);
          localStorage.setItem("email", req.data.email);
          alert("Conta criada, seja bem-vindo!");
          window.location.href = "/";
        }
      } catch (err) {
        if (err.status === 502) {
          alert("Erro no servidor, tente novamente mais tarde!");
          return;
        }
        if (err.status === 400) {
          alert("Todos os dados são necessários para criação do usuário!");
          return;
        }
      }
    }
  };

  useEffect(() => {
    // control._reset;
    reset();
  }, [isRegister]);

  return (
    <>
      <Header/>
      <form
        className="flex flex-col gap-4 max-w-[50rem] mx-10 mt-28 md:mx-auto items-center border-2 border-[#CDCDCD] bg-white p-5 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="container flex flex-col md:flex-row h-auto">
          <div className={`flex flex-col gap-2 px-8 basis-1/2 h-full transition-all p-7  ${isRegister  ? 'bg-inherit' : 'bg-[#CDCDCD]'} flex-grow rounded-md`}>
            <h1 className="font-bold text-eblue text-2xl">
              Faça seu cadastro!
            </h1>
            <div className={`flex flex-col gap-2`}>
            <InputLabel
                id={"nameRegister"}
                inputValue={""}
                isPassword={false}
                isEmail={false}
                isDisabled={!isRegister}
                label={"Nome do Usuário (Ex. Arthur Sousa)"}
                register={register}
            />
            <InputLabel
                id={"emailRegister"}
                inputValue={""}
                isPassword={false}
                isEmail={true}
                isDisabled={!isRegister}
                label={"Email"}
                register={register}
            />
            <InputLabel
                id={"passwordRegister"}
                inputValue={""}
                isPassword={true}
                isDisabled={!isRegister}
                label={"Senha"}
                register={register}
            />
            <InputLabel
                id={"confirmPasswordRegister"}
                inputValue={""}
                isPassword={true}
                isDisabled={!isRegister}
                label={"Confirmar Senha"}
                register={register}
            />
            </div>
          </div>
          <button
          className="rotate-90 md:rotate-0 self-center"
          type="button"
          onClick={() => {
            setIsRegister(!isRegister);
          }}
          >
            <ArrowLeftRight />
          </button>
          <div className={`flex flex-col gap-2 px-8 basis-1/2 flex-auto transition-all p-7 ${!isRegister  ? 'bg-inherit' : 'bg-[#CDCDCD]'} rounded-md`}>
            <h1 className="font-bold text-eblue text-2xl">
              Já tem uma conta? Faça seu login!
            </h1>
            <div className="flex flex-col gap-2">
            <InputLabel
                id={"emailLogin"}
                isPassword={false}
                isEmail={true}
                isDisabled={isRegister}
                label={"Email"}
                register={register}
            />
            <InputLabel
                id={"passwordLogin"}
                isPassword={true}
                isDisabled={isRegister}
                label={"Senha"}
                register={register}
            />
            </div>
          </div>
        </div>
        <button
          className="px-5 py-2 bg-eblue text-black font-bold text-xl rounded-md max-w-32"
          type="submit"
        >
          Entrar
        </button>
      </form>
    </>
  );
};
