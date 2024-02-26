import styled from "styled-components";
import NavLogo from '../../../assets/svg/NavLogo.webp'
import { useHeaderStore } from "../../../hooks/useHeaderStore";

const ButtonBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    @media (min-width: 1000px) {
        display: none;
    }
`

const Button = styled.button`
    background: transparent;
    outline: none;
    border: none;
    padding: 0;
    margin-right: 60px;
    @media (max-width: 500px){
        margin-right: 30px;
    }
`

const ButtonLogo = styled.img <{icon: string}>`
    width: 25px;
    height: 25px;
    margin-left: auto;
`


export const NavButton = () => {

    const [accordion, setAccordion] = useHeaderStore()

    function openLinkBlock () {
        if(accordion.active == false) {
            setAccordion({
                active: true,
                margin: '50px',
                height: '250px',
            })
        } else if (accordion.active == true) {
            setAccordion({
                active: false,
                margin: '50px',
                height: '0px',
            })
        }
    }

    return(
        <ButtonBlock>
            <Button onClick={openLinkBlock}>
                <ButtonLogo src={NavLogo}></ButtonLogo>
            </Button>
        </ButtonBlock>
    )
}