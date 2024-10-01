import { ArrowLeftRight } from "lucide-react";
import { InputLabel } from "../components/InputLabel";
import { Header } from "./components/Header";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export const UserIn = () => {
  const { register, handleSubmit, formState, control, reset } = useForm();
  const [isRegister, setIsRegister] = useState(true);

  const onSubmit = (data) => {
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

    // fazer requisição de login
  };

  useEffect(() => {
    // control._reset;
    reset();
  }, [isRegister]);

  return (
    <>
      {/* <Header/> */}
      <form
        className="flex flex-col gap-4 max-w-[50rem] m-auto mt-20 items-center border-2 border-[#CDCDCD] p-5 rounded-md relative"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="container flex divide-x items-start justify-center">
          <div className="flex flex-col gap-2 px-8 basis-1/2 h-full">
            <h1 className="font-bold text-eblue text-2xl">
              Faça seu cadastro!
            </h1>
            <div>
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
          </div>
          <div className="flex flex-col gap-2 px-8 basis-1/2 h-full">
            <h1 className="font-bold text-eblue text-2xl">
              Já tem uma conta? Faça seu login!
            </h1>
            <div>
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
        </div>
        <button
          className="px-5 py-2 bg-eblue text-black font-bold text-xl rounded-md max-w-32"
          type="submit"
        >
          Entrar
        </button>
        <button
          className="absolute top-1/2"
          type="button"
          onClick={() => {
            setIsRegister(!isRegister);
          }}
        >
          <ArrowLeftRight />
        </button>
      </form>
    </>
  );
};
