import styled from "styled-components";
import QubeLogo from '../../assets/svg/QubeLogo.webp'
import { EcosystemContainer } from "./PageContainer/PageContainer";

const Container = styled.div`
    width: 1000px;
    margin: 0 auto;
    @media (max-width: 1000px) {
        width: 100%;
    }
`

const ContainerBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const MainTextBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const GreyTextBlock = styled.div`
    width: 60%;
    display: flex;
    text-align: center;
    margin-bottom: 40px;
`

const GreyText = styled.h1`
    font-size: 20px;
    font-weight: 500;
    color: #969696;
`

const TextBlock = styled.div`
    display: flex;
    align-items: center;
    color: white;
    margin-top: 40px;
    margin-bottom: 10px;
    @media (max-width: 600px) {
        align-items: center;
    }
`

const HeaderLogo = styled.img`
    width: 50px;
    @media (max-width: 850px) {
        width: 35px;
    }
    @media (max-width: 650px) {
        width: 25px;
    }
`

const HeaderText2 = styled.h1`
    font-size: 45px;
    font-weight: 500;
    margin: 0 20px;
    @media (max-width: 850px) {
        font-size: 35px;
    }
    @media (max-width: 600px) {
        font-size: 28px;
        margin-left: 5px;
    }
`


export const Ecosystem = () => {
    return(
        <Container>
            <ContainerBlock>
                <MainTextBlock>
                    <TextBlock>
                        <HeaderLogo src={QubeLogo}></HeaderLogo>
                        <HeaderText2>Qube ecosystem</HeaderText2>
                    </TextBlock>
                    <GreyTextBlock>
                        <GreyText>
                            The first interconnected ecosystem. Build, trade, and earn, seamlessly 
                            with suite of stablecoins and dApps, all powered by QUBE token. Join the future of finance, 
                            decentralized and accessible to all.
                        </GreyText>
                    </GreyTextBlock>
                </MainTextBlock>
                <EcosystemContainer></EcosystemContainer>
            </ContainerBlock>
        </Container>
    )
}