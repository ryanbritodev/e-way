import { SideBar } from "../SideBar";
import { ProfileButton } from "../ProfileButton";
import { BurgerMenu } from "../BurgerMenu";

export const AppLayout = ({ children }) => {
  const links = [
    {
      path: "/",
      imageUrl: "/assets/images/sideBar/homeIcon.svg",
    },
    {
      path: "/news",
      imageUrl: "/assets/images/sideBar/newsIcon.svg",
    },
    {
      path: "/racers",
      imageUrl: "/assets/images/sideBar/racersIcon.svg",
    },
    {
      path: "/volt",
      imageUrl: "/assets/images/sideBar/voltIcon.svg",
    },
    {
      path: "/avatars",
      imageUrl: "/assets/images/sideBar/avatarsIcon.svg",
    },
    {
      path: "/settings",
      imageUrl: "/assets/images/sideBar/settingsIcon.svg",
    },
  ];

  return (
    <div className="appLayout px-[2em] sm:px-[0em] sm:pr-[2em] w-full h-full flex flex-col xl:flex-row justify-top items-center xl:justify-center xl:items-start relative xl:static bg-[#fff]">
      <div className="sm:pr-[5em] sm:pl-[8em] md:pl-[12em] xl:pl-[0em] xl:gap-[3em] w-full max-w-[1280px] flex flex-col justify-top xl:flex-row xl:relative">
        <BurgerMenu>
          <SideBar links={links} />
          <ProfileButton />
        </BurgerMenu>
        <div className="w-full h-full max-h-screen pt-[4em] pb-[2em] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
