import teamDetails from "../data/teams.json"

export const TeamPage = ({ id, setActivePage }) => {

    const time = teamDetails.filter(team => team.id == id)[0]
    return (
        id != null &&
        <>
            <button onClick={() => {setActivePage(null)}}><img src="" alt="arrow-back" /></button>
            <h1>{time.name}</h1>
            <h1>{time.id}</h1>
        </>
    )
}