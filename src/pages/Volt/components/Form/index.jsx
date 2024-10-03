import { useState } from "react";
import { callGeminiApi } from "../../api";

export const Form = ({ setMessages }) => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userMessage = {
      interactor: localStorage.getItem("name"),
      text: value,
    };

    
    const aiMessage = {
      interactor: null,
      text: await callGeminiApi(value),
    };
    
    setMessages((prevValue) => {
      return [...prevValue, userMessage];
    });
    setValue("");
    setMessages((prevValue) => {
      return [...prevValue, aiMessage];
    });
  };

  return (
    <form
      className="absolute w-[98%] h-[4em] left-1 bottom-0 flex justify-center items-center "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className={
          "w-full h-full transition-all outline-none border-1 indent-2 pl-2 pr-24 rounded-full shadow-[0px_0px_5px_2px_rgba(39,193,184,.9)] "
        }
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        id=""
      />
      <button className="w-[3em] absolute right-3 bg-eblue flex justify-center items-center p-2 px-3 rounded-full">
        <img src="/assets/images/voltAi/voltAiArrow.svg" alt="Volt Ai Arrow" />
      </button>
    </form>
  );
};
