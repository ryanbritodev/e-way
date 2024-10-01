import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col sm:gap-4 md:flex-row justify-between items-center border-t border-gray-200 py-8 px-8 sm:px-16">
      <img
        src="/assets/images/landing/ewayLogo.svg"
        alt="E-way logo"
        className="w-12 mb-4 sm:mb-0"
      />
      <div className="text-center mb-4 sm:mb-0">
        <p className="text-black font-bold">E-WAY</p>
        <p className="text-gray-700 font-semibold">Copyright &copy; 2024</p>
      </div>
      <div className="flex justify-center w-12 items-center gap-4">
        <a
          href="https://facebook.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-eblue hover:text-eblue-dark transition ease-in-out text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://linkedin.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-eblue hover:text-eblue-dark transition ease-in-out text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://youtube.com"
          rel="noopener noreferrer"
          target="_blank"
          className="text-eblue hover:text-eblue-dark transition ease-in-out text-2xl"
        >
          <FaYoutube />
        </a>
        <a
          href="https://instagram.com"
          rel="noopener noreferrer"
          target="_blank"
          className="text-eblue hover:text-eblue-dark transition ease-in-out text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};
