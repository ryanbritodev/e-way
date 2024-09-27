export const NameLabel = ({ label, content }) => {
    return (
        <>
        <div className="flex flex-col">
            <span className="text-gray-600 text-2xl md:text-lg font-bold">{label}</span>
            <p className="text-black text-4xl md:text-3xl font-bold leading-10">{content}</p>
        </div>
        </>
    )
}