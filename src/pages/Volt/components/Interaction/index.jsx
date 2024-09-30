export const Interaction = ({ interactor, text }) => {
  return (
    <div className={`relative w-full ${interactor !== "VoltAi" && "text-end pr-6"}`}>
      <h3 className="text-sm text-eblue font-bold">{interactor}:</h3>
      <p className="text-md">{text}</p>
    </div>
  );
};
