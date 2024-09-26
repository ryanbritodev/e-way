import { Link } from "react-router-dom";

export const NewsSeeMore = ({ link, text }) => {
  return <Link to={link}>{text}</Link>;
};
