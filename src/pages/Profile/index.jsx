import { NameLabel } from "./components/NameLabel";

export const Profile = () => {
  return (
    <>
      <h1 className="text-black text-5xl font-bold">Seu perfil</h1>
      <div className="container divide-y lg:divide-x lg:divide-y-0 flex flex-col flex-wrap lg:flex-row items-center lg:justify-center pt-12 gap-8">
        <div className="flex flex-col gap-5 md:pr-28">
          <NameLabel label={"Nome"} content={"Diogo Leles"} />
          <NameLabel label={"Time favorito"} content={"Mahindra Racing"} />
          <NameLabel label={"Email"} content={"diogo@fiap.com.br"} />
          <NameLabel label={"Pontuação da carreira"} content={"50.500"} />
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
