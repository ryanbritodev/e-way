export const NewsTitle = ({ title }) => {
  return (
    <h1 className="text-white text-md leading-5">
      {title.length >= 50 ? title.substring(0, 50) + "..." : title}
    </h1>
  );
};
