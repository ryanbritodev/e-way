import { News } from "../components/News";
import data from "./data/news.json";

export const NewsPage = () => {
  const firstData = data.copyWithin(0);

  return (
    <main className="w-full h-full flex flex-col gap-[2em]">
      <h1 className="text-6xl md:text-5xl font-bold">Notícias</h1>
      <section className="flex flex-col gap-[1em] justify-baseline">
        <h2 className="text-2xl font-bold -mb-[.5em]">Notícias para Você</h2>
        <div className="flex flex-row gap-[1em] w-full h-auto py-2 overflow-x-auto scrollbar">
          {data.sort((a, b) => b.title.localeCompare(a.title)).map((news) => {
            return (
              <News.Root key={news.id} backgroundImageUrl={news.backgroundImageUrl}>
                <News.Partner partner={news.partner} />
                <News.Type newsType={news.newsType} />
                <News.Title title={news.title} />
                <News.MoreInfos
                  link={news.moreInfos.link}
                  text="Ver Mais"
                  time={news.moreInfos.time}
                />
              </News.Root>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-[1em] justify-baseline py-4">
        <h2 className="text-2xl font-bold -mb-[.5em]">Novidades da Semana</h2>
        <div className="flex flex-row gap-[1em] w-full h-auto py-2 overflow-x-auto scrollbar">
          {firstData
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((news) => {
              return (
                <News.Root key={news.id} backgroundImageUrl={news.backgroundImageUrl}>
                  <News.Partner partner={news.partner} />
                  <News.Type newsType={news.newsType} />
                  <News.Title title={news.title} />
                  <News.MoreInfos
                    link={news.moreInfos.link}
                    text="Ver Mais"
                    time={news.moreInfos.time}
                  />
                </News.Root>
              );
            })}
        </div>
      </section>
    </main>
  );
};
