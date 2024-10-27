import { useState, useEffect } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { FormPersonalInfo } from "./components/FormPersonalInfo";
import { checkAuthToken } from "../../auth";
import axios from "axios";

export const Settings = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    checkAuthToken().then((res) => {
      setUser(res.data.user);
    });
  }, []);

  const [calendarLinked, setCalendarLinked] = useState(false); // Estado para verificar se o calendário está vinculado
  const session = useSession(); // Sessão atual
  const supabaseClient = useSupabaseClient(); // Comunicação com o Supabase
  const userCode = user?.userCode || "XG11LMN242";

  useEffect(() => {
    // Verificando se o token do Google está disponível na sessão
    if (session && session.provider_token) {
      setCalendarLinked(true); // Se tiver o token na sessão atual, o calendário vai estar vinculado
    } else {
      setCalendarLinked(false);
    }
  }, [session]);

  const copyCode = () => {
    navigator.clipboard
      .writeText(userCode)
      .then(() => {
        alert("Código copiado para a área de transferência!");
      })
      .catch((err) => {
        console.error("Erro ao copiar código: ", err);
      });
  };

  // Função para vincular o calendário (login com Google)
  async function linkCalendar() {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar", // Escopo da API Google Calendar
      },
    });
    if (error) {
      alert("Erro ao vincular o calendário");
      console.error(error);
    }
  }

  // Função para desvincular o calendário (logout do Google)
  async function unlinkCalendar() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      alert("Erro ao desvincular o calendário");
      console.error(error);
    } else {
      setCalendarLinked(false); // Atualizando o estado
      alert("Calendário desvinculado com sucesso!");
    }
  }

  return (
    <>
      <h1 className="w-full text-black text-3xl sm:text-5xl font-bold">
        Configurações
      </h1>
      <div className="flex flex-col divide-y lg:flex-row lg:divide-x lg:divide-y-0 pt-10 justify-center">
        <div className="flex flex-col gap-10 p-4 sm:p-10 w-full max-w-xl">
          <div className="flex flex-row gap-2 justify-center flex-wrap items-center">
            <p className="text-black text-2xl md:text-lg max-sm:text-xl font-bold max-sm:text-center">
              O seu Código de Usuário é:
            </p>
            <div className="flex gap-5 lg:gap-1 w-full justify-between max-sm:justify-center">
              <p className="text-white text-lg sm:text-3xl bg-eblue rounded-md p-2 shadow-lg basis-11/12 text-center flex flex-col justify-center items-center">
                {userCode}
              </p>
              <button
                className="flex flex-col items-center justify-center"
                onClick={copyCode}
              >
                <img
                  src="assets/images/settingsIcons/copyIcon.svg"
                  alt="Copy Icon"
                  className="size-4"
                />
                <p className="text-black text-2xl md:text-sm font-bold">
                  Copiar
                </p>
              </button>
            </div>
          </div>

          {/* Verificação pra ver se o calendário está vinculado na sessão atual */}
          <button
            className="shadow-[0_0_10px_2px_rgba(39,193,184,0.3)] w-full flex justify-center items-center rounded-md font-bold"
            onClick={calendarLinked ? unlinkCalendar : linkCalendar}
          >
            <img
              src="assets/images/settingsIcons/googleCalendarIcon.svg"
              alt="Google Calendar Icon"
            />
            {calendarLinked ? "Desvincular Calendário" : "Vincular Calendário"}
          </button>
        </div>
        {/* <div className="flex flex-col md:flex-row lg:flex-col gap-2 max-sm:text-center">
            <div className="flex flex-col gap-2">
              <p className="text-black text-2xl md:text-lg font-bold">Tema da plataforma</p>
              <p className="text-[#DD052B] text-2xl md:text-lg font-bold uppercase">Mahindra Racing</p>
            </div>
            <div className="flex flex-col md:flex-row md:basis-52 lg:basis-0 w-full items-center gap-2">
              <div className="rounded-md bg-[#DD052B] w-full h-full">&nbsp;</div>
              <div className="rounded-md bg-[#333333] w-full h-full">&nbsp;</div>
            </div>
          </div> */}{" "}
        {/* APLICAR TEMA NA PLATAFORMA PARA SPRINT 4 */}
        <div className="flex flex-col gap-5 p-10 max-sm:justify-center max-sm:items-center">
          <FormPersonalInfo user={user} />
          <button
            className="flex gap-3 items-center justify-center text-red-500 font-bold border-[1px] border-red-500 hover:bg-red-500 hover:text-white transition-all p-2 rounded-md w-32"
            onClick={() => {
              axios
                .post("/api/users/logout", {}, { withCredentials: true })
                .then((response) => {
                  return response;
                })
                .catch((error) => {
                  console.error("Error logging out:", error);
                });
              window.location.assign("/");
            }}
          >
            <svg
              width="29"
              height="31"
              viewBox="0 0 29 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9168 10.0455V6.125C16.9168 5.77982 16.6463 5.5 16.3127 5.5H5.43766C5.10399 5.5 4.8335 5.77982 4.8335 6.125V24.875C4.8335 25.2201 5.10399 25.5 5.43766 25.5H16.3127C16.6463 25.5 16.9168 25.2201 16.9168 24.875V20.9545"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0835 15.5H25.3752M25.3752 15.5L21.7506 11.125M25.3752 15.5L21.7502 19.875"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Sair
          </button>
        </div>
      </div>
    </>
  );
};
