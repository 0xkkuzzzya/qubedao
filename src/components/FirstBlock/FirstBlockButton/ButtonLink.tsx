import styled from "styled-components";
import LinkImg from '../../../assets/svg/ArrowLink.svg'
import { useAccordionStore } from "../../../hooks/useAccordionStore";

const LinkButton = styled.button`
    display: none;
    width: 50px;
    margin-left: auto;
    margin-right: 20px;
    @media (max-width: 720px){
        display: block;
    }
`
const LinkButtonImg = styled.img`
    width: 15px;
    height: 15px;
`

export const ButtonLink = () => {

    const [accordion, setAccordion] = useAccordionStore()

    function openLinkBlock () {
        if(accordion.active == false) {
            setAccordion({
                active: true,
                height: '210px'
            })
        } else if (accordion.active == true) {
            setAccordion({
                active: false,
                height: '0px'
            })
        }
    }
    

    return(
        <LinkButton onClick={openLinkBlock}>
            <LinkButtonImg src={LinkImg}></LinkButtonImg>
        </LinkButton>
    )
}