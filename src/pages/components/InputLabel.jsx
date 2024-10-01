import { useState } from "react";

export const InputLabel = ({
  id,
  label,
  isPassword,
  isEmail,
  isDisabled,
  register,
}) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="flex flex-col items-start justify-center gap-2">
        <label
          for={id}
          className={`text-black text-2xl md:text-lg font-bold ${
            isDisabled && "text-gray-500"
          }`}
        >
          {label}
        </label>
        <div
          className={`flex gap-0 items-center justify-between border-[1px] border-black rounded-md p-2 focus-within:ring transition-all bg-inherit w-full relative ${
            isDisabled && "bg-gray-200"
          } ${!isDisabled && "cursor-pointer"}`}
        >
          <input
            id={id}
            type={visible ? (isEmail ? "email" : "text") : "password"}
            disabled={isDisabled}
            className={`text-black focus:outline-none bg-inherit max-w-30 h-full w-full pr-[2em] pl-[.5em] ${
              !isDisabled && "cursor-pointer"
            }`}
            {...register(id, { isRequired: !isDisabled })}
          />
          {isPassword && (
            <button
              onClick={() => {
                setVisible(!visible);
              }}
              disabled={isDisabled}
              className="flex items-center justify-center absolute right-3"
              type="button"
            >
              <img
                src={
                  visible === true
                    ? "assets/images/settingsIcons/visibleIcon.svg"
                    : "assets/images/settingsIcons/hideIcon.svg"
                }
                alt="See password icon"
                className="w-6 h-5"
              />
            </button>
          )}
        </div>
      </div>
    </>
  );
};
