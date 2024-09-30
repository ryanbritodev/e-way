import { AnchorLink } from "./AnchorLink"

export const Header = () => {
    return (
        <header className="flex justify-between py-6 px-14 m-auto bg-white items-center">
            <img
                src="/assets/images/sideBar/ewayLogo.svg"
                alt="Eway"
                id="#home"
                className="size-14"
            />
            <div className="flex gap-4 items-center">
                <AnchorLink href={'/#about'} text={'Sobre'}/>
                <AnchorLink href={'/#collectible'} text={'Colecionáveis'}/>
                <AnchorLink href={'/#assistant'} text={'VoltAI'}/>
                <AnchorLink href={'/#eway'} text={'E-WAY'}/>
            </div>
        </header>
    )
}