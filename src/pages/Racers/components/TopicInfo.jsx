export const TopicInfo = ({ topic, content, teamColor }) => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-2 py-4">
                <h3 className="text-[#00005A] text-3xl font-bold basis-2/5 text-left">{topic}</h3>
                <p className="text-2xl basis-2/5 font-bold text-right" style={{ color: teamColor }}>{content}</p>
            </div>
        </>
    )
}