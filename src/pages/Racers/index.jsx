import { useState } from "react";
import { TeamButton } from "./components/TeamButton";
import teams from "./data/teams.json";
import { TeamPage } from "./components/TeamPage";
export const Racers = () => {
  const [activePage, setActivePage] = useState(null);

  return (
    <>
      <h1 className="text-black text-6xl md:text-5xl font-bold">Equipes</h1>
      <div className="container grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 mt-10 items-center">
        {teams.map((time) => (
          <TeamButton
            key={time.id}
            {...time}
            onClick={() => {
              setActivePage(time.id);
            }}
          />
        ))}
      </div>
      <TeamPage id={activePage} setActivePage={setActivePage} />
    </>
  );
};
