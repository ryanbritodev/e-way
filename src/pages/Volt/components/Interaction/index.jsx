export const Interaction = ({ interactor, text, isTyping }) => {
  return (
    <div
      className={`relative w-full ${
        interactor !== "VoltAI" ? "text-end pr-4 lg:pr-6" : "text-left pr-4 lg:pl-6"
      } py-2 md:py-3`}
    >
      <h3 className="text-xs sm:text-sm lg:text-base text-eblue font-bold">
        {interactor}:
      </h3>
      <div 
        className={"text-sm sm:text-base lg:text-lg text-black break-words max-w-full md:max-w-4xl lg:max-w-6xl"}
      >
        <p>
          {text}
          {isTyping && <span className="cursor">⠀</span>}
        </p>
      </div>
    </div>
  );
};
