import styled from "styled-components";
import { Customlink } from "../CustomLink/LinkButtons/CustomLink";
import { useHeaderStore } from "../../../hooks/useHeaderStore";

const Header = styled.div`
    width: 100%;
    background: #151516;
    display: flex;
    align-items: center;
`

const HeaderNav = styled.nav <{height: string, padding: string}>`
    max-height: ${(props: { height: any; }) => props.height};
    width: 100%;
    background: #121212;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    transition: all .3s ease-in-out;
    padding-bottom: ${(props: { padding: any; }) => props.padding};
`

const LinkBlock = styled.div`
    background-color: #333;
    padding: 10px;
    width: 90%;
    border-radius: 10px;
    margin-top: 10px;
    display: flex;
`


export const MobileHeader = () => {

    const [accordion, setAccordion] = useHeaderStore()

    return (
        <Header>
            <HeaderNav height={accordion.height} padding={accordion.active == true ? '10px' : '0px'}>
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

                    <LinkBlock>
                        <Customlink to="/developer">Developer</Customlink>
                    </LinkBlock>
            </HeaderNav>
        </Header>
    )
}