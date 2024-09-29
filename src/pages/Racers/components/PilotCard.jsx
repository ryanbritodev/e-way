export const PilotCard = ({ pilotPicture, pilotFirstName, pilotLastName, pilotNumber, pilotCountryName, pilotCountryFlag, teamColor }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-start h-full gap-14 max-sm:gap-7">
                <img 
                    src={pilotPicture} 
                    alt={`${pilotFirstName}'s picture`}
                    className="max-sm:w-56"
                    />
                <div className="flex justify-between max-sm:justify-center items-start max-sm:items-center w-full md:w-full py-7 md:py-0 max-sm:-mt-6">
                    <div className="flex flex-col gap-1 max-sm:gap-0 basis-7/12">
                        <p className="text-black text-3xl max-sm:text-xl">{pilotFirstName}</p>
                        <p className="font-bold text-4xl max-sm:text-2xl">{pilotLastName}</p>
                    </div>
                    <span style={{ color: teamColor }} className="font-bold text-6xl max-sm:text-4xl">{pilotNumber}</span>
                </div>
                <div className="flex gap-4 items-center justify-center w-full md:w-full max-sm:-mt-10 max-sm:mb-8">
                    <img 
                        src={pilotCountryFlag} 
                        alt={`${pilotCountryName}'s flag`} 
                        className="h-7 max-sm:h-5"/>
                    <p className="text-3xl max-sm:text-xl font-bold">{pilotCountryName}</p>
                </div>
            </div>
        </>
    )
}