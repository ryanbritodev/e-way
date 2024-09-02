export const Footer = () => {
  return (
    <footer className="main__footer">
      <img
        src="/assets/images/landing/E-way-Logomarca-icon.svg"
        alt="E-way logo"
        className="footer__logo"
      />
      <div className="footer__info">
        <p className="info__title">E-Way</p>
        <p className="info__subtitle">Copyright&copy;2024</p>
      </div>
      <div className="footer__social-media">
        <a
          href="https://facebook.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="social-media__link"
        >
          <img
            src="/assets/images/landing/Facebook-icon.svg"
            alt="Facebook"
            className="link__image"
          />
        </a>
        <a
          href="https://linkedin.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="social-media__link"
        >
          <img
            src="/assets/images/landing/Linkedin-icon.svg"
            alt="Linkedin"
            className="link__image"
          />
        </a>
        <a
          href="https://youtube.com"
          rel="noopener noreferrer"
          target="_blank"
          className="social-media__link"
        >
          <img
            src="/assets/images/landing/Youtube-icon.svg"
            alt="Youtube"
            className="link__image"
          />
        </a>
        <a
          href="https://youtube.com"
          rel="noopener noreferrer"
          target="_blank"
          className="social-media__link"
        >
          <img
            src="/assets/images/landing/Instagram-icon.svg"
            alt="Instagram"
            className="link__image"
          />
        </a>
      </div>
    </footer>
  );
};
