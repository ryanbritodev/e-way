export const NewsRoot = ({ backgroundImageUrl, children }) => {
  return (
    <div className="w-full h-[18em] flex flex-col relative">
      <img
        src={backgroundImageUrl}
        alt="News Image"
        className="absolute z-0 w-full h-full cover"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
