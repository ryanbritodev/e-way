import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="w-full h-full bg-blue-400 flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white w-[15em] text-center">
        Opa, se perdeu? Parece que não temos essa página...{" "}
        <Link to="/" className="text-white underline">
          O que acha de voltar?
        </Link>
      </h1>
    </div>
  );
};
