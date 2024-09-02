export const Header = () => {
  return (
    <header className="main__header">
      <img
        src="/assets/images/landing/E-way-Logomarca-icon.svg"
        alt="Eway"
        className="header__icon"
        id="#home"
      />
      <div className="header__clickables">
        <a href="#about" className="clickables__link">
          Sobre
        </a>
        <a href="#collectibles" className="clickables__link">
          Colecionáveis
        </a>
        <a href="#assistent" className="clickables__link">
          VoltAI
        </a>
        <a href="#eway" className="clickables__link">
          E-Way
        </a>
        <a
          href="../Account/index.html"
          className="clickables__link button-link"
        >
          <button className="clickables__button button">Entrar</button>
        </a>
      </div>
    </header>
  );
};
