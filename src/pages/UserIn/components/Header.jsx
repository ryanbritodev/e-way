import { AnchorLink } from "./AnchorLink";
import React, { useState, useEffect } from "react";
import { BsList, BsXLg } from "react-icons/bs";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-8 sm:px-16 bg-white border-b border-gray-200 transition-all duration-300 z-50 ${
        scrollY > 10 ? "shadow-md" : ""
      }`}
    >
      {/* Logo e Menu */}
      <div className="flex justify-between px-8 items-center w-full md:w-auto">
        {/* Logo */}
        <a
          href="/"
          className="text-black font-semibold hover:text-eblue transition-colors duration-300"
          onClick={closeMenu}
        >
          <img
            src="/assets/images/landing/ewayLogo.svg"
            alt="E-WAY Logo"
            className="w-14 h-14 rounded-full"
            id="home"
          />    
        </a>

        {/* Botão do Menu Hamburguer */}
        <div className="md:hidden z-50 mt-3">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <BsXLg size={32} /> : <BsList size={32} />}
          </button>
        </div>
      </div>

      {/* Links de Navegação */}
      <nav
        className={`${
          isMenuOpen ? "top-[4.5rem] opacity-100" : "top-[-490px] opacity-0"
        } md:flex md:items-center absolute md:static left-0 w-full md:w-auto bg-white md:bg-transparent top-[5.5rem] transition-all duration-500 ease-in-out z-[1000] md:opacity-100`}
        style={{ transition: "max-height 0.5s ease, opacity 0.5s ease" }}
      >
        <ul className="md:flex md:flex-row flex flex-col gap-5 md:gap-10 pt-1 pb-4 md:py-0 items-center justify-center md:justify-between">
          <li>
            <a
              href="/"
              className="text-black font-semibold hover:text-eblue transition-colors duration-300"
              onClick={closeMenu}
            >
              Voltar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
