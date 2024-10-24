import { useForm } from "react-hook-form";
import { InputLabel } from "../../components/InputLabel";
import { useState } from "react";

export const FormPersonalInfo = ({ user }) => {
  const [editDisabled, setEditDisabled] = useState(true);
  const { register } = useForm({
    defaultValues: {
      name: user?.userName,
      email: user?.userEmail,
      location: user?.userLocation,
    },
  });

  let bgColor = "#CDCDCD";
  if (!editDisabled) {
    bgColor = "#FFF";
  }

  return (
    <>
      <div
        className={`flex flex-col gap-4 p-5 rounded-lg transition-all border-[2px] border-[#CDCDCD] basis-10/12 min-w-72 max-sm:min-w-[15em] relative`}
        style={{ backgroundColor: bgColor }}
      >
        <button
          onClick={() => {
            setEditDisabled(!editDisabled);
          }}
          className="absolute -right-3 -top-3 bg-white rounded-md"
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
          id={"name"}
          label={"Nome"}
          inputValue={user?.userName}
          isPassword={false}
          isDisabled={editDisabled}
          register={register}
        />
        <InputLabel
          id={"email"}
          label={"E-mail"}
          inputValue={user?.userEmail}
          isPassword={false}
          isDisabled={editDisabled}
          register={register}
        />
        <InputLabel
          id={"location"}
          label={"Localização"}
          inputValue={user?.userLocation || "São Paulo, SP"}
          isPassword={false}
          isDisabled={editDisabled}
          register={register}
        />
        <InputLabel
          id={"password"}
          label={"Sua senha atual"}
          inputValue={""}
          isPassword={true}
          isDisabled={editDisabled}
          register={register}
        />
      </div>
    </>
  );
};
