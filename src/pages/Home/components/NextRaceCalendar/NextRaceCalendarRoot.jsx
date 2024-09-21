export const NextRaceCalendarRoot = ({ children }) => {
  return (
    <div className="bg-white w-full h-full max-h-[16.65em] max-w-[15em] py-[.5em] px-[.5em] rounded-[1em] text-center flex flex-col gap-[1.5em] shadow-[0_0_30px_-10px_rgba(0,0,0,0.3)]">
      <img
        src="/assets/images/home/calendarBackgroundImage.png"
        alt="Background Image of calendar"
      />
      {children}
    </div>
  );
};
