export const NewsRoot = ({ backgroundImageUrl, children, className }) => {
  return (
    <div
      className={
        "w-full h-[16em] max-w-[12em] flex flex-col relative rounded-xl" + className
      }
    >
      <img
        src={backgroundImageUrl}
        alt="News Image"
        className="absolute brightness-[.35] z-0 w-full h-full object-cover rounded-xl"
        onError={(event) => {
          event.target.src = "/assets/images/news/ewayNewsErrorImage.png";
        }}
      />
      <div className="relative z-10 w-[12em] h-full flex flex-col justify-end px-[1em] py-[.5em] gap-y-2">
        {children}
      </div>
    </div>
  );
};
