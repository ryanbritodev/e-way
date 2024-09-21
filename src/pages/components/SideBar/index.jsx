import { Link, useLocation } from "react-router-dom";

export const SideBar = ({ links }) => {
  const { pathname } = useLocation();

  return (
    <aside className="absolute sm:flex xl:relative align-self-left z-50 top-0 left-0 w-full max-w-[5em] md:max-w-[6em] h-full max-h-[50em] bg-white rounded-br-[2em] rounded-tr-[2em] xl:rounded-[2em] flex flex-col justify-center items-center pt-[2em] pb-[2em] gap-[.5em] shadow-[0_0_30px_-10px_rgba(0,0,0,0.9)] max-sm:w-full max-sm:static transition-all max-sm:max-w-full max-sm:rounded-none max-sm:justify-center lg:w-[5em]">
      <img
        src="/assets/images/sideBar/ewayLogo.png"
        alt="Eway Logo"
        className="w-full max-w-[3em] md:max-w-[4em] mb-[3.5em] max-sm:max-w-[5em]"
      />

      <div className="flex flex-col justify-between items-between h-full max-h-full max-sm:flex-row max-sm:gap-[2em] max-sm:flex-wrap max-sm:justify-center max-sm:items-center max-sm:max-w-[60%] max-sm:max-h-[40%] max-sm:gap-y-0">
        {links.map((link) => {
          return (
            <Link
              to={link.path}
              className={`w-[4em] h-[4em] py-[1em] flex justify-center items-center rounded-full transition-all hover:shadow-[0_0_30px_-10px_rgba(39,193,184,.9)] transition-all ${
                pathname === link.path ? "bg-eblue" : ""
              } `}
            >
              <img
                src={link.imageUrl}
                alt={`${link.path.substring(1)} Icon`}
                className={`w-[1.8em]`}
              />
            </Link>
          );
        })}
      </div>
    </aside>
  );
};