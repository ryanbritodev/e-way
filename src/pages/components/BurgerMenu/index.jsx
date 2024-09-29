import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const BurgerMenu = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleClick = () => {
    setOpen(!open);
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (width > 640) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`flex justify-center items-center sm:hidden z-50 right-4 top-9 cursor-pointer p-3 px-2 rounded-full transition-all hover:shadow-[0_0_20px_-10px_rgba(39,193,184,.9)] shadow-[0_0_30px_-10px_rgba(0,0,0,0.8)] ${
          open ? "bg-eblue fixed" : "bg-white absolute"
        }`}
        onClick={handleClick}
      >
        <img
          src="/assets/images/burgerMenu/burgerMenuIcon.svg"
          alt="Burger Menu Icon"
          className={`w-[1.5em] h-[1em]`}
        />
      </div>
      <div
        className={`sm:flex ${
          open
            ? "flex flex-col max-sm:bg-white w-full h-full max-md:fixed max-md:z-40 max-md:top-0 left-0 max-md:overflow-hidden"
            : "hidden"
        }`}
      >
        {children}
      </div>
    </>
  );
};
