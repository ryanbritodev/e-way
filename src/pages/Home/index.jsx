import { useState } from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { NextRaceCalendar } from "./components/NextRaceCalendar";
import { News } from "../components/News";

export const Home = () => {
    const [buttonText, setButtonText] = useState("Adicionar ao calendário");
    const session = useSession();

    // Adicionar evento ao Google Calendário
    async function createRaceCalendarEvent() {
      if (!session) {
        alert("Você precisa estar logado para adicionar eventos ao calendário!");
        return;
      }

    const raceEvent = {
      summary: "E-Prix de São Paulo",
      description: "Corrida da Fórmula E em Interlagos, São Paulo, Brasil",
      start: {
        dateTime: new Date("2024-10-22T10:00:00-03:00").toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      end: {
        dateTime: new Date("2024-10-22T12:00:00-03:00").toISOString(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      location: "Av. Sen. Teotônio Vilela, 261 - Interlagos, São Paulo - SP, Brasil",
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },  // Lembrar por email um dia antes
          { method: "popup", minutes: 30 },       // Lembrete com um pop-up 30 minutos antes
        ],
      },
      status: "confirmed",

    };

    await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + session.provider_token,
      },
      body: JSON.stringify(raceEvent),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        alert("Corrida adicionada ao seu calendário!");

        setButtonText("Adicionada ao calendário");
      })
      .catch((error) => {
        console.error("Erro ao adicionar a corrida ao calendário", error);
        alert("Houve um erro ao adicionar o evento ao calendário.");
      });
  }

  return (
    <main className="w-full h-full flex flex-col gap-8">
      <h1 className="text-6xl md:text-5xl font-bold">Início</h1>

      {/* Próxima Corrida */}
      <section className="flex flex-wrap gap-x-[6em] gap-y-[2em] justify-center md:justify-start pb-[2em]">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold mb-[.5em]">Próxima corrida</h2>
          <NextRaceCalendar.Root>
            <NextRaceCalendar.Infos time="em 15 dias" city="São Paulo" country="Brasil" />
            <NextRaceCalendar.Button 
              text={buttonText}
              className={`${
                buttonText === "Adicionada ao calendário" && "bg-eblue-dark cursor-default"
              }`}
              onClick={createRaceCalendarEvent}
            />
          </NextRaceCalendar.Root>
        </div>

        {/* Pontuação */}
        <div className="flex flex-col gap-5 w-[16em]">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-2xl font-bold mb-[.5em]">Sua pontuação</h2>
            <h3 className="text-3xl border border-[#ededed] flex justify-center items-center rounded-[.2em] text-[#303030] cursor-default py-[.2em] px-[.8em]">
              0 pontos
            </h3>
          </div>

          {/* Notícias */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-[.5em]">Notícia rápida</h2>
            <News.Root backgroundImageUrl="/assets/images/home/principalNews.png">
              <News.Partner partner="CNN" />
              <News.Type newsType="Notícia" />
              <News.Title title="Mahindra acaba de vencer mais uma, sem dificuldades" />
              <News.MoreInfos link="/news" text="Ver mais" time="Hoje" target="self" />
            </News.Root>
          </div>
        </div>
      </section>
    </main>
  );
};
