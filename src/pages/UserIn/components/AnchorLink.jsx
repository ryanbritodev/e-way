export const AnchorLink = ({ href, text }) => {
    return (
        <a className="hover:font-bold transition-all" href={href}>{text}</a>
    )
}