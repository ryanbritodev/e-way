import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

export const Landing = () => {
  if (location.pathname != "/") {
    location.pathname = "/";
  }

  return (
    <>
      <main className="w-full min-h-screen bg-white py-8 flex mt-16 justify-center">
        <div className="max-w-screen-xl flex flex-col justify-center items-center">
          <Header />
          <section className="flex flex-col items-center pt-12 bg-white w-full" id="home">
            <h1 className="text-black font-bold text-5xl">
              Notícias. Stats. Histórias.
            </h1>
            <h2 className="text-gray-800 font-semibold text-lg mt-2">
              Tudo em um só lugar
            </h2>
            <button
              className="mt-8 mb-12 py-3 px-6 bg-eblue text-white rounded-md font-semibold transition duration-300 hover:bg-eblue-light"
              onClick={() => window.location.assign('/userIn')}
            >
              Saiba mais
            </button>
            <img
              src="/assets/images/landing/Home-Image.png"
              alt="Formula E car image"
              className="w-[50em] rounded-md shadow-md"
            />
          </section>

          <section className="pt-32 flex flex-wrap justify-center items-center gap-16" id="about">
            <div className="flex flex-col">
              <h2 className="text-gray-800 font-semibold text-lg mb-2">Sobre a plataforma</h2>
              <h1 className="text-black font-bold text-5xl mb-2">Tudo ao seu alcance.</h1>
              <div className="flex flex-col items-start gap-3 w-[25em]">
                <p className="text-gray-800 text-lg">
                  Ficou interessado em Fórmula E, começou a assistir, mas ainda sente falta de outros conteúdos além das corridas, e não acha de jeito nenhum na internet? Está no lugar certo!
                </p>
                <p className="text-gray-800 text-lg">
                  Quer acompanhar tudo ainda mais de perto e desfrutar de uma experiência completamente personalizada?{" "}
                  <b>Faça seu cadastro!</b>
                </p>
                <p className="text-gray-800 text-lg">
                  Notícias, enquetes, histórias, curiosidades, estatísticas,{" "}
                  <b>tudo em apenas um lugar.</b>
                </p>
              </div>
              <button
                className="w-40 mt-8 mb-20 py-3 bg-eblue text-white rounded-md font-semibold text-lg transition duration-300 hover:bg-eblue-light"
                onClick={() => window.location.assign('/userIn')}
              >
                Fazer Cadastro
              </button>
            </div>
            <div>
              <img
                src="/assets/images/landing/About-image.png"
                alt="Formula E car image"
                className="w-[40em] rounded-md shadow-md"
              />
            </div>
          </section>

          <section className="pt-32 pb-20 flex flex-wrap-reverse justify-center items-start gap-20" id="collectibles">
            <div>
              <img
                src="/assets/images/landing/Collectibles-image.png"
                alt="Formula E car image"
                className="w-[25em] h-[25em] rounded-md shadow-md"
              />
            </div>
            <div className="w-[35em]">
              <h2 className="text-gray-800 font-semibold text-lg mb-2">Colecionáveis</h2>
              <h1 className="text-black font-bold text-5xl mb-2">A Fórmula E que É a sua cara.</h1>
              <p className="text-gray-800 text-lg w-[30em] mb-4">
                Crie e personalize seu avatar, vista roupas e acessórios para a cabeça, troque de estilo! <br />
                <br />A cada artigo/notícia lidos em nossa plataforma, você responde a um quiz, caso se saia bem (sabemos que vai!) você ganha um colecionável!
              </p>
              <ul className="text-black font-semibold">
                <li className="ml-5 mb-1">Acessórios para seu Avatar</li>
                <li className="ml-5">Medalhas</li>
              </ul>
            </div>
          </section>

          <section className="w-full flex flex-col justify-center items-center pt-16" id="assistent">
            <div>
              <h2 className="text-gray-800 font-semibold text-lg">VoltAI</h2>
              <h1 className="text-black font-bold text-5xl">Conheça a sua assistente.</h1>
            </div>

            <div className="flex flex-col justify-center items-center shadow-md w-[15em] h-[15em] rounded-md mt-12 mb-20 cursor-pointer">
              <img
                src="/assets/images/landing/VoltAI-icon.svg"
                alt="VoltAi Icon"
                className="w-[10em]"
              />
              <h2 className="text-3xl">VoltAI</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8 w-full">
              <div className="w-[20em]">
                <h3 className="font-bold text-lg mb-2 text-eblue">Acompanhe as próximas corridas</h3>
                <p className="text-gray-800">Fique por dentro das datas e localidades das próximas corridas</p>
              </div>
              <div className="w-[20em]">
                <h3 className="font-bold text-lg mb-2 text-eblue">Faça perguntas</h3>
                <p className="text-gray-800">Se sente perdido? Pergunte à Volt, ela pode te ajudar</p>
              </div>
              <div className="w-[20em]">
                <h3 className="font-bold text-lg mb-2 text-eblue">Peça curiosidades</h3>
                <p className="text-gray-800">Mergulhe no universo da Fórmula E</p>
              </div>
            </div>
          </section>

          <section className="pt-40 pb-20 w-full">
            <h2 className="text-gray-800 font-semibold text-lg">E-WAY</h2>
            <h1 className="text-black font-bold text-5xl">O porquê fazemos o que fazemos</h1>

            <div className="flex flex-wrap justify-evenly py-8 gap-12">
              <div className="w-[20em]">
                <h2 className="text-black font-bold text-lg my-4">O problema</h2>
                <ul className="text-gray-800">
                  <li className="mb-2"><b>Falta de acesso</b> à informação sobre a Fórmula E</li>
                  <li className="mb-2"><b>Escassez de engajamento</b> da comunidade</li>
                  <li><b>Conteúdos em inglês</b> no site oficial traduzido para português</li>
                </ul>
              </div>
              <div className="w-[20em]">
                <h2 className="text-black font-bold text-lg my-4">A solução</h2>
                <ul className="text-gray-800">
                  <li className="mb-2">Uma central de informações intuitiva e inclusiva</li>
                  <li className="mb-2"><b>Inteligência Artificial</b> para suporte ao usuário</li>
                  <li>Plataforma 100% em <b>português-brasileiro</b></li>
                </ul>
              </div>
            </div>
          </section>

          
        </div>
        
      </main>
      <Footer />
    </>
  );
};
