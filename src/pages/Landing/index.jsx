import "./styles/index.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Landing = () => {
  return (
    <>
      <main className="container-main">
        <Header />
        <section className="main__home" id="home">
          <h1 className="home__title title">Notícias. Stats. Histórias.</h1>
          <h2 className="home__subtitle subtitle">Tudo em um só lugar</h2>
          <button className="home__button button">Saiba mais</button>
          <img
            src="/assets/images/landing/Home-Image.png"
            alt="Formula E car image"
            className="home__image image slider"
          />
        </section>
        <section className="main__about" id="about">
          <div className="about__left-block">
            <h2 className="about__subtitle subtitle">Sobre a plataforma</h2>
            <h1 className="about__title title">Tudo ao seu alcance.</h1>
            <div className="about__content content">
              <p className="content__block">
                Ficou interessado em Fórmula E, começou a assistir, mas ainda
                sente falta de outros conteúdos além das corridas, e não acha de
                jeito nenhum na internet? Está no lugar certo!
              </p>
              <p className="content__block">
                Quer acompanhar tudo ainda mais de perto e desfrutar de uma
                experiência completamente personalizada?{" "}
                <b className="bold">Faça seu cadastro!</b>
              </p>
              <p className="content__block">
                Notícias, enquetes, histórias, curiosidades, estatísticas,{" "}
                <b className="bold">tudo em apenas um lugar.</b>
              </p>
            </div>
            <button className="about__button button">Fazer Cadastro</button>
          </div>
          <div className="about__right-block">
            <img
              src="/assets/images/landing/About-image.png"
              alt="Formula E car image"
              className="about__image image slider"
            />
          </div>
        </section>
        <section className="main__collectibles" id="collectibles">
          <div className="collectibles__left-block">
            <img
              src="/assets/images/landing/Collectibles-image.png"
              alt="Formula E car image"
              className="collectibles__image image"
            />
          </div>
          <div className="collectibles__right-block">
            <h2 className="collectibles__subtitle subtitle">Colecionáveis</h2>
            <h1 className="collectibles__title title">
              A Fórmula E que É a sua cara.
            </h1>
            <p className="collectibles__content content">
              Crie e personalize seu avatar, vista roupas e acessórios para a
              cabeça, troque de estilo! <br />
              <br />A cada artigo/notícia lidos em nossa plataforma, você
              responde a um quiz, caso se saia bem (sabemos que vai!) você ganha
              um colecionável!
            </p>
            <ul className="collectibles__list">
              <li className="list__item">Acessórios para seu Avatar</li>
              <li className="list__item">Medalhas</li>
            </ul>
          </div>
        </section>
        <section className="main__assistent" id="assistent">
          <div className="assistent__title-content">
            <h2 className="assistent__subtitle subtitle">VoltAi</h2>
            <h1 className="assistent__title title">
              Conheça a sua assistente.
            </h1>
          </div>

          <div className="assistent__ai">
            <img
              src="/assets/images/landing/VoltAI-icon.svg"
              alt="VoltAi Icon"
              className="ai__image"
            />
            <h2 className="ai__title">VoltAI</h2>
          </div>
          <div className="assistent__ai-about">
            <div className="ai-about__content">
              <h3 className="content__title">Acompanhe as próximas corridas</h3>
              <p className="content__info">
                Fique por dentro das datas e localidades das próximas corridas
              </p>
            </div>
            <div className="ai-about__content">
              <h3 className="content__title">Faça perguntas</h3>
              <p className="content__info">
                Se sente perdido? Pergunte à Volt, ela pode te ajudar
              </p>
            </div>
            <div className="ai-about__content">
              <h3 className="content__title">Peça curiosidades</h3>
              <p className="content__info">Mergulhe no universo da Fórmula E</p>
            </div>
          </div>
        </section>
        <section className="main__solution" id="eway">
          <h2 className="solution__subtitle subtitle">E-Way</h2>
          <h1 className="solution__title title">
            O porquê fazemos o que fazemos
          </h1>
          <div className="solution__content">
            <div className="content__left-block">
              <h2 className="block__title">O problema</h2>
              <ul className="block__list">
                <li className="list__item">
                  A <b>falta de acesso</b> à informação que diz respeito à
                  Fórmula E
                </li>
                <li className="list__item">
                  A escassez de <b>engajamento</b> da comunidade
                </li>
                <li className="list__item">
                  Mesmo no site oficial da Modalidade traduzido para o
                  <b>português</b>, ainda existem matérias de notícias em
                  <b>inglês</b>
                </li>
              </ul>
            </div>
            <div className="content__right-block">
              <h2 className="block__title">A solução</h2>
              <ul className="block__list">
                <li className="list__item">
                  Criar uma central de informações sobre a modalidade, uma
                  plataforma <b>intuitiva</b> e <b>inclusiva</b>
                </li>
                <li className="list__item">
                  Implantar uma <b>Inteligência Artificial</b> para prestar
                  suporte ao usuário
                </li>
                <li className="list__item">
                  Uma plataforma 100% em <b>português-brasileiro</b>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};
