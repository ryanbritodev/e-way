import { useState } from "react";
import { NextRaceCalendar } from "./components/NextRaceCalendar";
import { News } from "../components/News";

export const Home = () => {
  const [buttonText, setButtonText] = useState("Adicionar ao calendário");

  return (
    <main className="w-full h-full flex flex-col gap-[2em]">
      <h1 className="text-6xl md:text-5xl font-bold">Início</h1>
      <section className="flex flex-wrap gap-x-[6em] gap-y-[2em] justify-start pb-[2em]">
        <div>
          <h2 className="text-2xl font-bold mb-[.5em]">Próxima corrida</h2>
          <NextRaceCalendar.Root>
            <NextRaceCalendar.Infos
              time="em 15 dias"
              city="São Paulo"
              country="Brasil"
            />
            <NextRaceCalendar.Button
              text={buttonText}
              className={`${
                buttonText === "Adicionada ao calendário" &&
                "bg-eblue-dark cursor-default"
              }`}
              onClick={() => {
                if (buttonText === "Adicionado ao calendário") return;
                alert("A corrida foi adicionada ao seu calendário!");
                setButtonText("Adicionada ao calendário");
              }}
            />
          </NextRaceCalendar.Root>
        </div>
        <div className="flex flex-col gap-[2em]  w-[16em]">
          <div>
            <h2 className="text-2xl font-bold mb-[.5em]">Sua pontuação</h2>
            <h3 className="text-3xl border border-[#ededed] flex justify-center items-center rounded-[.2em] text-[#303030] cursor-default py-[.2em] px-[.8em]">
              0 pontos
            </h3>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-[.5em]">Notícia rápida</h2>
            <News.Root backgroundImageUrl="/assets/images/home/principalNews.png">
              <News.Partner partner="CNN" />
              <News.Type newsType="Notícia" />
              <News.Title title="Mahindra acaba de vencer mais uma, sem dificuldades" />
              <News.MoreInfos
                link="/news"
                text="Ver mais"
                time="Hoje"
                target="self"
              />
            </News.Root>
          </div>
        </div>
      </section>
      {/* <section>
         <h2 className="text-2xl font-bold mb-[.5em]">
          Suas insígnias recentes
        </h2>
        <div></div> 
      </section> */}
    </main>
  );
};
