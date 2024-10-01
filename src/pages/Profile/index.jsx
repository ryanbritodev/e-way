import { NameLabel } from "./components/NameLabel";

export const Profile = () => {
  return (
    <>
      <h1 className="text-black text-5xl font-bold">Seu perfil</h1>
      <div className="container divide-y xl:divide-x xl:divide-y-0 flex flex-col flex-wrap lg:flex-row items-center lg:justify-center pt-12 gap-8">
        <div className="flex flex-col gap-5 md:pr-28">
          <NameLabel label={"Nome"} content={localStorage.getItem("name")} />
          <NameLabel label={"Time favorito"} content={"Mahindra Racing"} />
          <NameLabel label={"Email"} content={localStorage.getItem("email")} />
          <NameLabel label={"Pontuação da carreira"} content={0} />
          <NameLabel label={"Localização"} content={"São Paulo, SP"} />
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
