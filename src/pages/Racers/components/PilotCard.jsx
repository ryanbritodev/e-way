export const PilotCard = ({ pilotPicture, pilotFirstName, pilotLastName, pilotNumber, pilotCountryName, pilotCountryFlag, teamColor }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-start h-full gap-14">
                <img 
                    src={pilotPicture} 
                    alt={`${pilotFirstName}'s picture`}
                    />
                <div className="flex justify-between items-start w-[333px] md:w-full py-7 md:py-0">
                    <div className="flex flex-col gap-1 basis-7/12">
                        <p className="text-black text-3xl">{pilotFirstName}</p>
                        <p className="font-bold text-4xl">{pilotLastName}</p>
                    </div>
                    <span style={{ color: teamColor }} className="font-bold text-6xl">{pilotNumber}</span>
                </div>
                <div className="flex gap-4 items-center justify-start w-[333px] md:w-full">
                    <img 
                        src={pilotCountryFlag} 
                        alt={`${pilotCountryName}'s flag`} 
                        className="h-7"/>
                    <p className="text-3xl font-bold">{pilotCountryName}</p>
                </div>
            </div>
        </>
    )
}