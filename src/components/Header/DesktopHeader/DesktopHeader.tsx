import styled from "styled-components";
import { Customlink } from "../CustomLink/LinkButtons/CustomLink";

const Header = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 60px;
`

const LinkBlock = styled.div`

`


export const DesktopHeader = () => {
    return(
        <Header>
            <LinkBlock>
                <Customlink to="/launch">Launch</Customlink>
            </LinkBlock>

            <LinkBlock>
                <Customlink to="/ecosystem">Ecosystem</Customlink>
            </LinkBlock>

            <LinkBlock>
                <Customlink to="/community">Community</Customlink>
            </LinkBlock>

            <LinkBlock>
                <Customlink to="/use">Use QUBE</Customlink>
            </LinkBlock>
            
            <LinkBlock style={{marginRight: "60px"}}>
                <Customlink to="/developer">Developer</Customlink>
            </LinkBlock>
        </Header>
    )
}