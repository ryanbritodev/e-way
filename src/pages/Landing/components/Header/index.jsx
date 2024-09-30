import styles from "../../styles/Header.module.css";

export const Header = () => {
  return (
    <header className={styles['main__header']}>
      <img
        src="/assets/images/landing/E-way-Logomarca-icon.svg"
        alt="Eway"
        className={styles['header__icon']}
        id="#home"
      />
      <div className={styles['header__clickables']}>
        <a href="#about" className={styles['clickables__link']}>
          Sobre
        </a>
        <a href="#collectibles" className={styles['clickables__link']}>
          Colecionáveis
        </a>
        <a href="#assistent" className={styles['clickables__link']}>
          VoltAI
        </a>
        <a href="#eway" className={styles['clickables__link']}>
          E-Way
        </a>
        <button className={`${styles['clickables__button']} ${styles['button']}`} onClick={() => {window.location.assign('/userIn')}}>
          Entrar
        </button>
      </div>
    </header>
  );
};
