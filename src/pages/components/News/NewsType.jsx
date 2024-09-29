export const NewsType = ({ newsType }) => {
  return (
    <h3 className="text-gray-300 text-sm">
      {newsType.length >= 12 ? newsType.substring(0, 8) + "..." : newsType}
    </h3>
  );
};
