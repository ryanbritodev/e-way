import styles from "../../styles/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles['main__footer']}>
      <img
        src="/assets/images/landing/E-way-Logomarca-icon.svg"
        alt="E-way logo"
        className={styles['footer__logo']}
      />
      <div className={styles['footer__info']}>
        <p className={styles['info__title']}>E-Way</p>
        <p className={styles['info__subtitle']}>Copyright&copy;2024</p>
      </div>
      <div className={styles['footer__social-media']}>
        <a
          href="https://facebook.com/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles['social-media__link']}
        >
          <img
            src="/assets/images/landing/Facebook-icon.svg"
            alt="Facebook"
            className={styles['link__image']}
          />
        </a>
        <a
          href="https://linkedin.com/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles['social-media__link']}
        >
          <img
            src="/assets/images/landing/Linkedin-icon.svg"
            alt="Linkedin"
            className={styles['link__image']}
          />
        </a>
        <a
          href="https://youtube.com"
          rel="noopener noreferrer"
          target="_blank"
          className={styles['social-media__link']}
        >
          <img
            src="/assets/images/landing/Youtube-icon.svg"
            alt="Youtube"
            className={styles['link__image']}
          />
        </a>
        <a
          href="https://instagram.com"
          rel="noopener noreferrer"
          target="_blank"
          className={styles['social-media__link']}
        >
          <img
            src="/assets/images/landing/Instagram-icon.svg"
            alt="Instagram"
            className={styles['link__image']}
          />
        </a>
      </div>
    </footer>
  );
};
