import styled from "styled-components";
import Qube from '../../assets/svg/QubeLogo.webp'
import { DesktopHeader } from "./DesktopHeader/DesktopHeader";
import { LogoLink } from "./CustomLink/LogoLink/LogoLink";
import { useMediaQuery } from 'react-responsive'
import { MobileHeader } from "./MobileHeader/MobileHeader";
import { NavButton } from "../Buttons/NavButton/Navbutton";

const Header = styled.div`
    width: 100%;
    height: 100px;
    background: #151516;
    display: flex;
    align-items: center;
`

const QubeLogo = styled.img`
    width: 55px;
    height: 55px;
    display: block;
`

const LogoBlock = styled.div`
    display: flex;
    align-items: center;
`

const NavBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`


export const MainHeader = () => {

    const isDes = useMediaQuery({
        query: "(min-device-width: 1000px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 1000px)",
    });

    return (
        <div>
            <Header>
                <LogoBlock>
                    <LogoLink to="/">
                        <QubeLogo src={Qube}></QubeLogo>
                    </LogoLink>
                </LogoBlock>
                <NavBlock>
                    <NavButton />
                    {isDes && <DesktopHeader />}
                </NavBlock>
            </Header>
            {isMob && <MobileHeader />}
        </div>
    )
}