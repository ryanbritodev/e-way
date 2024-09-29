export const TeamButton = ({ name, logo, colorButton, onClick }) => {
    return (
        <button style={{ backgroundColor: colorButton }} className="flex gap-4 rounded-lg items-center justify-center w-auto px-10 h-32 hover:-translate-x-1 hover:-translate-y-1 transition-all" onClick={onClick}>
            <img src={logo} alt={`${name} name`} className="max-h-11 max-w-20"/>
            <span className="text-white font-bold italic text-wrap">{name}</span>
        </button>
    )
}