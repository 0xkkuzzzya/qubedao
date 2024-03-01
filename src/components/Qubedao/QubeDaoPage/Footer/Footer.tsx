import styled from "styled-components";
import { FooterHeader } from "./FooterHeader/FooterHeader";
import { FooterLink } from "./FooterLink/FooterLink";
import { useInView } from "react-intersection-observer";

const Container = styled.div <{margin: string, opacity: string}>`
    width: 80%;
    margin-top: ${(props: { margin: any; }) => props.margin};
    opacity: ${(props: { opacity: any; }) => props.opacity};
    transition: all .3s ease-in-out;
    @media (max-width: 600px) {
        width: 95%;
    }
`

const FooterTextBlock = styled.div`
    width: 100%;
    @media (max-width: 500px) {
        width: 100%;
    }
`

const FooterText = styled.a`
    font-size: 45px;
    font-weight: 600;
    color: white;
    @media (max-width: 500px) {
        font-size: 22px;
    }
`

const BlueText = styled.a`
    font-size: 45px;
    font-weight: 600;
    background: linear-gradient(to right, #7DC1FE, #2D9AFD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 500px) {
        font-size: 25px;
    }
`

const GreyTextBlock = styled.div`
    width: 65%;
    margin-top: 15px;
    @media (max-width: 500px) {
        width: 90%;
    }
`

const GreyText = styled.a`
    font-size: 23px;
    font-weight: 600;
    color: #B7BDC6;
    margin-top: 10px;
    @media (max-width: 500px) {
        font-size: 16px;
    }
`

const LinkButton = styled.button`
    width: 200px;
    height: 40px;
    background: linear-gradient(to right, #7EC2FE, #2B99FD);
    border: none;
    outline: none;
    border-radius: 10px;
    margin-top: 30px;
    font-family: "Inter", sans-serif;
`

const ButtonText = styled.a`
    font-size: 18px;
    color: #111;
    font-weight: 700;
`


export const Footer = () => {
    
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
      });

    return(
        <Container ref={ref} 
        margin={inView == true ? '0px' : '30px'}
        opacity={inView == true ? '1' : '0'}>
            <FooterHeader/>
            <FooterTextBlock>
                <FooterText>
                Qube is an open-source 
                stablecoin network controlled 
                by its <BlueText>stakeholders</BlueText>
                </FooterText>
            </FooterTextBlock>
            <GreyTextBlock>
                <GreyText>More demand for Qube dApps = more value capture 
                by QUBE — Qube's decentralized utility asset.</GreyText>
            </GreyTextBlock>
            <LinkButton>
                <ButtonText>Explore QUBE</ButtonText>
            </LinkButton>
        </Container>
    )
}