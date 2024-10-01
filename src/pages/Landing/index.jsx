import styles from "./styles/Landing.module.css"; // to style just this component
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Landing = () => {
  if (location.pathname != "/") {
    location.pathname = "/";
  }
  
  return (
    <>
      <main className={styles["container-main"]}>
        <div className={styles["container-main__limit-container"]}>
          <Header />
          <section className={styles["main__home"]} id="home">
            <h1 className={`${styles["home__title"]} ${styles["title"]}`}>
              Notícias. Stats. Histórias.
            </h1>
            <h2 className={`${styles["home__subtitle"]} ${styles["subtitle"]}`}>
              Tudo em um só lugar
            </h2>
            <button className={`${styles["home__button"]} ${styles["button"]}`}>
              Saiba mais
            </button>
            <img
              src="/assets/images/landing/Home-Image.png"
              alt="Formula E car image"
              className={`${styles["home__image"]} ${styles["image"]} ${styles["slider"]}`}
            />
          </section>
          <section className={styles["main__about"]} id="about">
            <div className={styles["about__left-block"]}>
              <h2
                className={`${styles["about__subtitle"]} ${styles["subtitle"]}`}
              >
                Sobre a plataforma
              </h2>
              <h1 className={`${styles["about__title"]} ${styles["title"]}`}>
                Tudo ao seu alcance.
              </h1>
              <div
                className={`${styles["about__content"]} ${styles["content"]}`}
              >
                <p className={styles["content__block"]}>
                  Ficou interessado em Fórmula E, começou a assistir, mas ainda
                  sente falta de outros conteúdos além das corridas, e não acha
                  de jeito nenhum na internet? Está no lugar certo!
                </p>
                <p className={styles["content__block"]}>
                  Quer acompanhar tudo ainda mais de perto e desfrutar de uma
                  experiência completamente personalizada?{" "}
                  <b className={styles["bold"]}>Faça seu cadastro!</b>
                </p>
                <p className={styles["content__block"]}>
                  Notícias, enquetes, histórias, curiosidades, estatísticas,{" "}
                  <b className={styles["bold"]}>tudo em apenas um lugar.</b>
                </p>
              </div>
              <button
                className={`${styles["about__button"]} ${styles["button"]}`}
              >
                Fazer Cadastro
              </button>
            </div>
            <div className={styles["about__right-block"]}>
              <img
                src="/assets/images/landing/About-image.png"
                alt="Formula E car image"
                className={`${styles["about__image"]} ${styles["image"]} ${styles["slider"]}`}
              />
            </div>
          </section>
          <section className={styles["main__collectibles"]} id="collectibles">
            <div className={styles["collectibles__left-block"]}>
              <img
                src="/assets/images/landing/Collectibles-image.png"
                alt="Formula E car image"
                className={`${styles["collectibles__image"]} ${styles["image"]}`}
              />
            </div>
            <div className={styles["collectibles__right-block"]}>
              <h2
                className={`${styles["collectibles__subtitle"]} ${styles["subtitle"]}`}
              >
                Colecionáveis
              </h2>
              <h1
                className={`${styles["collectibles__title"]} ${styles["title"]}`}
              >
                A Fórmula E que É a sua cara.
              </h1>
              <p
                className={`${styles["collectibles__content"]} ${styles["content"]}`}
              >
                Crie e personalize seu avatar, vista roupas e acessórios para a
                cabeça, troque de estilo! <br />
                <br />A cada artigo/notícia lidos em nossa plataforma, você
                responde a um quiz, caso se saia bem (sabemos que vai!) você
                ganha um colecionável!
              </p>
              <ul className={styles["collectibles__list"]}>
                <li className={styles["list__item"]}>
                  Acessórios para seu Avatar
                </li>
                <li className={styles["list__item"]}>Medalhas</li>
              </ul>
            </div>
          </section>
          <section className={styles["main__assistent"]} id="assistent">
            <div className={styles["assistent__title-content"]}>
              <h2
                className={`${styles["assistent__subtitle"]} ${styles["subtitle"]}`}
              >
                VoltAI
              </h2>
              <h1
                className={`${styles["assistent__title"]} ${styles["title"]}`}
              >
                Conheça a sua assistente.
              </h1>
            </div>

            <div className={styles["assistent__ai"]}>
              <img
                src="/assets/images/landing/VoltAI-icon.svg"
                alt="VoltAi Icon"
                className={styles["ai__image"]}
              />
              <h2 className={styles["ai__title"]}>VoltAI</h2>
            </div>
            <div className={styles["assistent__ai-about"]}>
              <div className={styles["ai-about__content"]}>
                <h3 className={styles["content__title"]}>
                  Acompanhe as próximas corridas
                </h3>
                <p className={styles["content__info"]}>
                  Fique por dentro das datas e localidades das próximas corridas
                </p>
              </div>
              <div className={styles["ai-about__content"]}>
                <h3 className={styles["content__title"]}>Faça perguntas</h3>
                <p className={styles["content__info"]}>
                  Se sente perdido? Pergunte à Volt, ela pode te ajudar
                </p>
              </div>
              <div className={styles["ai-about__content"]}>
                <h3 className={styles["content__title"]}>Peça curiosidades</h3>
                <p className={styles["content__info"]}>
                  Mergulhe no universo da Fórmula E
                </p>
              </div>
            </div>
          </section>
          <section className={styles["main__solution"]} id="eway">
            <h2
              className={`${styles["solution__subtitle"]} ${styles["subtitle"]}`}
            >
              E-Way
            </h2>
            <h1 className={`${styles["solution__title"]} ${styles["title"]}`}>
              O porquê fazemos o que fazemos
            </h1>
            <div className={styles["solution__content"]}>
              <div className={styles["content__left-block"]}>
                <h2 className={styles["block__title"]}>O problema</h2>
                <ul className={styles["block__list"]}>
                  <li className={styles["list__item"]}>
                    A <b>falta de acesso</b> à informação que diz respeito à
                    Fórmula E
                  </li>
                  <li className={styles["list__item"]}>
                    A escassez de <b>engajamento</b> da comunidade
                  </li>
                  <li className={styles["list__item"]}>
                    Mesmo no site oficial da Modalidade traduzido para o
                    <b>português</b>, ainda existem matérias de notícias em
                    <b>inglês</b>
                  </li>
                </ul>
              </div>
              <div className={styles["content__right-block"]}>
                <h2 className={styles["block__title"]}>A solução</h2>
                <ul className={styles["block__list"]}>
                  <li className={styles["list__item"]}>
                    Criar uma central de informações sobre a modalidade, uma
                    plataforma <b>intuitiva</b> e <b>inclusiva</b>
                  </li>
                  <li className={styles["list__item"]}>
                    Implantar uma <b>Inteligência Artificial</b> para prestar
                    suporte ao usuário
                  </li>
                  <li className={styles["list__item"]}>
                    Uma plataforma 100% em <b>português-brasileiro</b>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
};
