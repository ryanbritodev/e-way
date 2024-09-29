import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const NewsMoreInfos = ({ link, text, time }) => {
  return (
    <div className="w-full flex flex-row items-center justify-between text-sm">
      <Link to={link} className="flex flex-row w-[8em] text-eblue font-bold">
        {text} <ArrowRight width="2em" />
      </Link>
      <p className="w-full max-w-[5em] text-right text-gray-300 ">{time}</p>
    </div>
  );
};
