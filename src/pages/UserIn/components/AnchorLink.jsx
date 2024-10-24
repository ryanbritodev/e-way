import { Link } from "react-router-dom";

export const AnchorLink = ({ href, text }) => {
  return (
    <Link className="hover:font-bold transition-all" to={href}>
      {text}
    </Link>
  );
};  
