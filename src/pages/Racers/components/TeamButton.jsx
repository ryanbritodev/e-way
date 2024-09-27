export const TeamButton = ({ name, logo, colorButton }) => {
    return (
        <button style={{ backgroundColor: colorButton }} className="flex gap-2 rounded-lg items-center justify-center w-44 px-10 h-16">
            <img src={logo} alt={`${name} name`} className="h-7"/>
            <span className="text-white font-bold italic text-wrap">{name}</span>
        </button>
    )
}