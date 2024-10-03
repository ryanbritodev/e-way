import Typewriter from "typewriter-effect";

export const Interaction = ({ interactor, text }) => {
  return (
    <div
      className={`relative w-full ${
        interactor !== "VoltAI" && "text-end pr-6"
      }`}
    >
      <h3 className="text-sm text-eblue font-bold">{interactor}:</h3>
      <div className="text-base text-black">
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
};
