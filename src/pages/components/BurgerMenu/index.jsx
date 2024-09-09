import { useState } from "react";

export const BurgerMenu = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log(open);
    setOpen(!open);
  };

  return (
    <>
      <div
        className="flex justify-center items-center sm:hidden absolute right-4 top-9 cursor-pointer bg-white p-3 px-2 rounded-full transition-all hover:shadow-[0_0_30px_-10px_rgba(39,193,184,.9)] shadow-[0_0_30px_-10px_rgba(0,0,0,0.8)]"
        onClick={handleClick}
      >
        <img
          src="/assets/images/burgerMenu/burgerMenuIcon.svg"
          alt="Burger Menu Icon"
          className="w-[1.5em] h-[1em] "
        />
      </div>
      <div
        className={`sm:flex ${
          open
            ? "flex flex-col max-sm:bg-white w-full h-full absolute top-0 left-0"
            : "hidden"
        }`}
      >
        {children}
      </div>
    </>
  );
};
