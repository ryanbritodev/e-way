export const TeamButton = ({ name, logo, colorButton, onClick }) => {
    return (
        <button style={{ backgroundColor: colorButton }} className="flex gap-4 rounded-lg items-center justify-center w-auto px-10 h-32" onClick={onClick}>
            <img src={logo} alt={`${name} name`} className="h-7 max-w-20"/>
            <span className="text-white font-bold italic text-wrap">{name}</span>
        </button>
    )
}