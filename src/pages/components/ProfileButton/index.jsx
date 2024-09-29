import { Link, useLocation } from "react-router-dom";

export const ProfileButton = () => {
  const { pathname } = useLocation();

  return (
    <Link
      to="/profile"
      className={`sm:flex absolute right-[1em] top-[2em] w-[5em] h-[2em] p-[1.5em] flex justify-center items-center gap-[.5em] rounded-full transition-all hover:shadow-[0_0_30px_-10px_rgba(39,193,184,.9)] shadow-[0_0_20px_-10px_rgba(0,0,0,0.5)] max-sm:top-[2.5em] max-sm:left-[2.5em] z-50  ${
        pathname === "/profile" ? "bg-eblue" : "bg-white"
      }`}
    >
      <img
        src="/assets/images/profileButton/profileUserIcon.svg"
        alt="ProfileButton button icon"
        className="w-[1.5em]"
      />
      <img
        src="/assets/images/profileButton/profileMenuIcon.svg"
        alt="ProfileButton button menu icon"
        className="w-[1em]"
      />
    </Link>
  );
};
