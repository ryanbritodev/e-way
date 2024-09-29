import { InputLabel } from "./InputLabel";
import { useState } from "react";

export const FormPersonalInfo = () => {
  const [editDisabled, setEditDisabled] = useState(true);

  let bgColor = "#CDCDCD";
  if (!editDisabled) {
    bgColor = "#FFFFFF";
  }

  return (
    <>
      <div
        className={`flex flex-col gap-4 p-5 bg-[${bgColor}] rounded-lg transition-all border-[2px] border-[#CDCDCD] basis-10/12 min-w-72 max-sm:min-w-[15em] relative`}
      >
        <button
          onClick={() => {
            setEditDisabled(!editDisabled);
          }}
          className="absolute -right-3 -top-3 bg-white"
        >
          <img
            src={
              editDisabled == true
                ? "assets/images/settingsIcons/editIcon.svg"
                : "assets/images/settingsIcons/saveIcon.svg"
            }
            alt="Edit Informations Icon"
          />
        </button>
        <InputLabel
          id={"nome"}
          label={"Nome"}
          inputValue={"Diogo Leles"}
          isPassword={false}
          isDisabled={editDisabled}
        />
        <InputLabel
          id={"email"}
          label={"E-mail"}
          inputValue={"diogo@itau.com.br"}
          isPassword={false}
          isDisabled={editDisabled}
        />
        <InputLabel
          id={"local"}
          label={"Localização"}
          inputValue={"São Paulo, SP"}
          isPassword={false}
          isDisabled={editDisabled}
        />
        <InputLabel
          id={"senha"}
          label={"Senha"}
          inputValue={"fiap@2024"}
          isPassword={true}
          isDisabled={editDisabled}
        />
      </div>
    </>
  );
};
