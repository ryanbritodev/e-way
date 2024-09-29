import { useState } from "react";

export const InputLabel = ({
  id,
  label,
  inputValue,
  isPassword,
  isDisabled,
}) => {
  const [value, setValue] = useState(inputValue);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className="flex flex-col items-start justify-center gap-2">
        <label for={id} className="text-black text-2xl md:text-lg font-bold">
          {label}
        </label>
        <div className="flex gap-0 items-center justify-between border-[1px] border-black rounded-md p-2 focus-within:ring transition-all bg-inherit w-full relative">
          <input
            id={id}
            type={visible ? "text" : "password"}
            disabled={isDisabled}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            className="text-black focus:outline-none bg-inherit max-w-30"
          />
          {isPassword && (
            <button
              onClick={() => {
                setVisible(!visible);
              }}
              disabled={isDisabled}
              className="flex items-center justify-center absolute right-3"
            >
              <img
                src={
                  visible === "password"
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
