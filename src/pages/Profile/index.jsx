import { NameLabel } from "./components/NameLabel";

export const Profile = () => {
  return (
    <>
      <h1 className="text-black text-6xl font-bold">Seu perfil</h1>
      <div className="container divide-y lg:divide-x lg:divide-y-0 flex flex-col lg:flex-row items-center lg:justify-center pt-12 gap-8">
        <div className="flex flex-col gap-5 md:pr-28">
          <NameLabel label={"Nome"} content={"Diogo Leles"}/>
          <NameLabel label={"Time favorito"} content={"Mahindra Racing"}/>
          <NameLabel label={"Email"} content={"diogo@fiap.com.br"}/>
          <NameLabel label={"Pontuação da carreira"} content={"50.500"}/>
          <NameLabel label={"Localização"} content={"São Paulo, SP"}/>
        </div>
        <div className="relative md:pl-28">
          <div className="flex justify-center items-end rounded-full border-4 border-black mt-8 size-[370px]">
            <img
              src="/assets/images/profilePage/Avatar.svg" 
              alt="Avatar" 
              className="max-h-[300px]"/>
          </div>
          <div className="flex items-center justify-center bg-eblue rounded-full absolute size-24 bottom-0 right-0">
            <img 
              src="/assets/images/profilePage/changeProfilePicture.svg" 
              alt="Change Profile Picture" 
              className="max-w-10"/>
          </div>
        </div>
      </div>
    </>
  );
};
