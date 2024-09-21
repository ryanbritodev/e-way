export const NextRaceCalendarInfos = ({ city, country, time }) => {
  return (
    <div>
      <h2 className="text-[1.8em] font-bold">{city}</h2>
      <p className="text-[1.2em] font-bold -mt-[.2em]">{country}</p>
      <h3 className="text-[1.4em] font-bold">{time}</h3>
    </div>
  );
};
