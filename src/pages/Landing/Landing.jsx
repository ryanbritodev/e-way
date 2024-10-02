import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const Landing = () => {
  if (location.pathname !== "/") {
    location.pathname = "/";
  }

  return (
    <>
      <main className="w-full min-h-screen flex flex-col bg-white">
        {/* Header */}
        <Header />

        {/* Landing*/}
        <section className="flex flex-col mt-28 items-center justify-center pt-12 w-full bg-white" id="home">
          <h1 className="text-black font-bold text-5xl text-center px-8">
            Notícias. Stats. Histórias.
          </h1>
          <h2 className="text-gray-800 font-semibold text-lg mt-2 text-center">
            Tudo em um só lugar
          </h2>
          <button
            className="mt-8 mb-12 py-3 px-6 bg-eblue text-white rounded-md font-semibold transition duration-300 hover:bg-eblue-light"
            onClick={() => window.location.assign('/userIn')}
          >
            Saiba mais
          </button>
          <div className="flex justify-center px-4">
          <img
            src="/assets/images/landing/Home-Image.png"
            alt="Formula E car image"
            className="w-[100%] md:w-[40em] rounded-md shadow-md"
          />
          </div>
        </section>

        {/* Sobre */}
        <section className="pt-20 md:pt-32 flex flex-wrap justify-center items-center gap-0 md:gap-16" id="about">
          <div className="flex flex-col text-left px-8 md:px-0 xl:px-8 w-[40em] xl:w-auto">
            <h2 className="text-gray-800 font-semibold uppercase text-md sm:text-lg mb-2">Sobre a plataforma</h2>
            <h1 className="text-black font-bold text-4xl sm:text-5xl mb-2">Tudo ao seu alcance.</h1>
            <div className="flex flex-col md:items-start gap-3 w-full xl:w-[26em]">
              <p className="text-gray-800 text-lg">
                Ficou interessado em Fórmula E, começou a assistir, mas ainda sente falta de outros conteúdos além das corridas? Está no lugar certo!
              </p>
              <p className="text-gray-800 text-lg">
                Quer acompanhar tudo ainda mais de perto? <b>Faça seu cadastro!</b>
              </p>
              <p className="text-gray-800 text-lg">
                Notícias, enquetes, histórias, estatísticas, <b>tudo em apenas um lugar.</b>
              </p>
            </div>
            <button
              className="w-40 mt-8 mb-20 py-3 bg-eblue text-white rounded-md font-semibold text-lg transition duration-300 hover:bg-eblue-light"
              onClick={() => window.location.assign('/userIn')}
            >
              Fazer Cadastro
            </button>
          </div>
          <div className="flex justify-center px-4">
            <img
              src="/assets/images/landing/About-image.png"
              alt="Formula E car image"
              className="w-[100%] md:w-[40em] rounded-md shadow-md"
            />
          </div>
        </section>

        {/* Colecionáveis */}
        <section className="pt-24 pb-20 flex flex-wrap-reverse items-center justify-center gap-20" id="collectibles">
          <div className="flex justify-center px-6">
            <img
              src="/assets/images/landing/Collectibles-image.png"
              alt="Formula E car image"
              className="w-[100%] md:w-[25em] h-auto rounded-md shadow-md"
            />
          </div>
          <div className="px-8 w-[40em]">
            <h2 className="text-gray-800 uppercase font-semibold text-lg mb-2">Colecionáveis</h2>
            <h1 className="text-black font-bold text-4xl md:text-5xl mb-2">A Fórmula E que é a sua cara.</h1>
            <p className="text-gray-800 text-lg mb-4">
              Crie e personalize seu avatar, vista roupas e acessórios para a cabeça, troque de estilo! <br />
              A cada artigo/notícia lido em nossa plataforma, você responde a um quiz, e caso acerte, você ganha um colecionável!
            </p>
            <ul className="list-disc text-black font-semibold">
              <li className="ml-5 mb-1">Acessórios para seu Avatar</li>
              <li className="ml-5">Badges</li>
            </ul>
          </div>
        </section>

        {/* VoltAI */}
        <section className="w-full flex flex-col justify-center items-center pt-16" id="assistent">
          <div className="px-8">
            <h2 className="text-gray-800 font-semibold text-lg">VoltAI</h2>
            <h1 className="text-black font-bold text-4xl md:text-5xl">Conheça a sua assistente.</h1>
          </div>

          <div className="flex flex-col justify-center items-center shadow-md w-[15em] h-[15em] rounded-md mt-20 mb-20 cursor-pointer">
            <img
              src="/assets/images/landing/VoltAI-icon.svg"
              alt="VoltAi Icon"
              className="w-[10em]"
            />
            <h2 className="text-3xl">VoltAI</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 w-full px-8">
            <div className="w-[20em]">
              <h3 className="font-bold text-xl mb-2 text-eblue">Acompanhe as próximas corridas</h3>
              <p className="text-gray-800 text-lg">Fique por dentro das datas e localidades das próximas corridas.</p>
            </div>
            <div className="w-[20em]">
              <h3 className="font-bold text-xl mb-2 text-eblue">Faça perguntas</h3>
              <p className="text-gray-800 text-lg">Se sente perdido? Pergunte à Volt, ela pode te ajudar.</p>
            </div>
            <div className="w-[20em]">
              <h3 className="font-bold text-xl mb-2 text-eblue">Peça curiosidades</h3>
              <p className="text-gray-800 text-lg">Mergulhe no universo da Fórmula E!</p>
            </div>
          </div>
        </section>

        {/* E-WAY */}
        <section className="pt-40 pb-20 bg-white" id="eway">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-start px-8">
              <h2 className="text-gray-800 font-semibold text-lg">E-WAY</h2>
              <h1 className="text-black font-bold text-4xl md:text-5xl">O porquê fazemos o que fazemos</h1>
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly py-8 gap-12 px-8">
            <div className="w-[20em]">
              <h2 className="text-eblue font-bold text-xl my-4">O Problema</h2>
              <ul className="text-gray-800 text-lg">
                <li className="mb-2"><b>Falta de acesso</b> à informação sobre a Fórmula E.</li>
                <li className="mb-2"><b>Escassez de engajamento</b> da comunidade.</li>
                <li><b>Conteúdos em inglês</b> no site oficial traduzido para português.</li>
              </ul>
            </div>
            <div className="w-[20em]">
              <h2 className="text-eblue font-bold text-xl my-4">A Solução</h2>
              <ul className="text-gray-800 text-lg">
                <li className="mb-2">Uma central de informações <b>intuitiva</b> e <b>inclusiva.</b></li>
                <li className="mb-2"><b>Inteligência Artificial</b> para suporte ao usuário.</li>
                <li>Plataforma 100% em <b>português-brasileiro.</b></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};
