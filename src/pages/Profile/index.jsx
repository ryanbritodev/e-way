import { useEffect, useState } from "react";
import { checkAuthToken } from "../../auth";
import { NameLabel } from "./components/NameLabel";

export const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuthToken().then((res) => {
      setUser(res.data.user);
    });
  }, []);

  return (
    <>
      <h1 className="text-black text-5xl font-bold">Seu perfil</h1>
      <div className="container divide-y xl:divide-x xl:divide-y-0 flex flex-col flex-wrap lg:flex-row items-center lg:justify-center pt-12 gap-8">
        <div className="flex flex-col gap-5 md:pr-28">
          <NameLabel label={"Nome"} content={user?.userName} />
          <NameLabel
            label={"Time favorito"}
            content={user?.userTeam || "Tech Mahindra"}
          />
          <NameLabel label={"Email"} content={user?.userEmail} />
          <NameLabel
            label={"Pontuação da carreira"}
            content={user?.userScore || 0}
          />
          <NameLabel
            label={"Localização"}
            content={user?.userLocation || "São Paulo, SP"}
          />
        </div>
        <div className="relative md:pl-28 p-8">
          <img
            src="/assets/images/profilePage/profileIcon.svg"
            alt="Profile Icon"
            className="max-md:w-[14em] max-xl:w-[18em]"
          />
        </div>
      </div>
    </>
  );
};
