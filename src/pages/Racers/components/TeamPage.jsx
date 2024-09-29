import teamDetails from "../data/teams.json"
import { PilotCard } from "./PilotCard"
import { TopicInfo } from "./TopicInfo"

export const TeamPage = ({ id, setActivePage }) => {

    const teamInfo = teamDetails.filter(team => team.id == id)[0]
    return (
        id != null &&
        <div className="bg-white w-full h-full flex-wrap max-sm:text-[.8em]">
            <svg width="100%" height="95" viewBox="0 0 678 95" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-md:hidden relative max-lg:w-[30em] w-[45em] -top-16 -mb-[4em]">
                <path d="M678 -244C678 -56.7758 526.225 95 339 95C151.775 95 0 -56.7758 0 -244C0 -396.282 124.705 -153.327 252.237 -24.5C281.5 5.06027 310.912 28.6115 339 40C632.5 159 678 -431.225 678 -244Z" fill={teamInfo.detailsPage.pageColor}/>
            </svg>
            <div className="container relative px-10 py-12 flex flex-col flex-wrap gap-[1.5rem]">
                <div className="flex flex-col w-full md:flex-row items-center flex-wrap justify-center gap-12">
                <button className="hover:-translate-x-1 transition-all absolute left-0 max-md:top-20 max-sm:top-0 max-sm:left-[48%]" onClick={() => {setActivePage(null)}}>
                        <svg width="46" height="38" viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.72971 21.5338C2.05771 21.5338 1.41323 21.2668 0.938053 20.7917C0.462875 20.3165 0.195923 19.672 0.195923 19C0.195923 18.328 0.462875 17.6835 0.938053 17.2083C1.41323 16.7332 2.05771 16.4662 2.72971 16.4662H43.2703C43.603 16.4662 43.9325 16.5318 44.2399 16.6591C44.5473 16.7864 44.8266 16.9731 45.0619 17.2083C45.2972 17.4436 45.4838 17.723 45.6112 18.0304C45.7385 18.3378 45.804 18.6673 45.804 19C45.804 19.3328 45.7385 19.6622 45.6112 19.9696C45.4838 20.2771 45.2972 20.5564 45.0619 20.7917C44.8266 21.027 44.5473 21.2136 44.2399 21.3409C43.9325 21.4683 43.603 21.5338 43.2703 21.5338H2.72971Z" fill={teamInfo.detailsPage.pageColor}/>
                            <path d="M18.9459 37.75C18.613 37.7511 18.2833 37.686 17.9757 37.5586C17.6682 37.4311 17.389 37.2439 17.1545 37.0077L0.938256 20.7915C0.702916 20.5563 0.516226 20.277 0.388854 19.9696C0.261482 19.6622 0.195923 19.3327 0.195923 19C0.195923 18.6673 0.261482 18.3378 0.388854 18.0304C0.516226 17.723 0.702916 17.4438 0.938256 17.2086L17.1545 0.992324C17.3897 0.75706 17.669 0.570437 17.9764 0.44311C18.2838 0.315784 18.6132 0.250248 18.9459 0.250244C19.2787 0.25024 19.6081 0.315768 19.9155 0.443088C20.2229 0.570407 20.5022 0.757024 20.7374 0.992283C20.9727 1.22754 21.1593 1.50684 21.2867 1.81422C21.414 2.1216 21.4795 2.45105 21.4795 2.78376C21.4795 3.11647 21.414 3.44593 21.2867 3.75331C21.1594 4.0607 20.9727 4.34 20.7375 4.57526L6.31265 19L20.7375 33.4248C21.0918 33.7791 21.333 34.2306 21.4308 34.722C21.5285 35.2135 21.4783 35.7229 21.2865 36.1859C21.0948 36.6488 20.7701 37.0445 20.3534 37.3229C19.9368 37.6013 19.447 37.75 18.9459 37.75Z" fill={teamInfo.detailsPage.pageColor}/>
                        </svg>
                    </button>
                    <img 
                        src={teamInfo.detailsPage.fullLogoImg} 
                        alt={`${teamInfo.name} Logo`} 
                        className="md:h-[50px]"/>
                    <img 
                        src={teamInfo.detailsPage.carTeam} 
                        alt={`${teamInfo.name}'s car`} 
                        className="md:h-[50px]"/>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 max-lg:flex-wrap ">
                    <div className="flex flex-col items-center justify-center flex-wrap text-center gap-5">
                        <h1 className="text-[#00005A] font-bold italic text-6xl max-sm:text-4xl">{teamInfo.detailsPage.fullName}</h1>
                        <img 
                            src={teamInfo.detailsPage.carTeam} 
                            alt={`${teamInfo.name}'s car`} 
                            className="hidden lg:block"/>
                        <div className="divide-y flex flex-col w-full">
                            <TopicInfo topic={"Piloto Reserva"} content={teamInfo.detailsPage.reserveDriver} teamColor={teamInfo.detailsPage.pageColor}/>
                            <TopicInfo topic={"Origem"} content={teamInfo.detailsPage.teamOrigin} teamColor={teamInfo.detailsPage.pageColor}/>
                            <TopicInfo topic={"Carro"} content={teamInfo.detailsPage.carType} teamColor={teamInfo.detailsPage.pageColor}/>
                            <TopicInfo topic={"Diretor"} content={teamInfo.detailsPage.director} teamColor={teamInfo.detailsPage.pageColor}/>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        {
                            teamInfo.detailsPage.pilots
                            .map( pilot => (
                                <PilotCard key={pilot.pilotId} teamColor={teamInfo.detailsPage.pageColor} {...pilot}/>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <p className="text-center pt-5">© FIA 2013-2024 Todo o conteúdo sujeito à aprovação da FIA</p>
                </div>
            </div>
        </div>
    )
}