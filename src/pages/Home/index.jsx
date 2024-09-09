import { AppLayout } from "../components/AppLayout";

export const Home = () => {
  return (
    <main className="w-full h-full">
      <h1>Início</h1>
      <section>
        <div>
          <h2>Próxima corrida</h2>
          <div>
            <img src="" alt="" />
            <h2>São Paulo</h2>
            <h3>Brasil</h3>
            <p>em 15 dias</p>
            <button>Adicionar ao Calendário</button>
          </div>
        </div>
        <div>
          <div>
            <h2>Sua pontuação</h2>
            <h3>25.005 pontos</h3>
          </div>
          <div>
            <h2>Notícia rápida</h2>
            {/* News component */}
          </div>
        </div>
      </section>
      <section>
        <h2>Suas insígnias recentes</h2>
        <div>{/* Badge Component */}</div>
      </section>
    </main>
  );
};
