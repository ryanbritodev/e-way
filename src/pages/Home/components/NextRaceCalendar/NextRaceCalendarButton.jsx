export const NextRaceCalendarButton = ({ text, onClick, ...rest }) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`bg-eblue p-[.8em] rounded-[.8em] font-bold text-white transition-all hover:bg-eblue-dark ${rest.className}`}
    >
      {text}
    </button>
  );
};
