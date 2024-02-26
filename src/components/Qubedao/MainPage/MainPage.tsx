import styled from "styled-components";
import MainPageLogo from '../../../assets/svg/MainPageImg.webp'
import { OpenAppButton } from "../../Buttons/MainPageButtons/OpenApp";
import { CommunityButton } from "../../Buttons/MainPageButtons/Community";

const MainPageBlock = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
    @media (max-width: 1000px) {
        height: 100%;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    margin: auto;
    margin-top: 13em;
    flex-direction: row;
    align-items: center;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
    @media (max-width: 1000px) {
        margin-top: 5em;
        padding: 0 20px;
    }
`

const TextBlock = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 1000px) {
        align-items: center;
        text-align: center;
    }
    @media (max-width: 600px) {
        align-items: flex-start;
        text-align: center;
    }
`

const MainText = styled.h1`
    color: #E9E9EB;
    font-size: 80px;
    margin: 0;
    font-weight: 600;
    @media (max-width: 1000px) {
        text-align: center;
    }
    @media (max-width: 500px) {
        text-align: left;
        font-size: 60px;
        font-weight: 500;
        width: 60%;
    }
`

const GreyText = styled.h4`
    font-size: 23px;
    color: #B7BDC6;
    margin-top: 20px;
    font-weight: 500;
    @media (max-width: 500px) {
        text-align: left;
        font-size: 16px;
        width: 85%;
        font-weight: 500;
        color: #969696;
    }
`

const MainPageImgBlock = styled.div`
    width: 100%;
    display: flex;
    @media (max-width: 1000px) {
        justify-content: center;
    }
`

const MainPageImg = styled.img`
    width: 400px;
    margin-top: -65px;
    margin-right: 50px;
    @media (max-width: 1000px) {
        margin-right: 0px;
    }
    @media (max-width: 600px) {
        width: 270px;
    }
    @media (max-width: 320px) {
        width: 230px;
    }
`

const ButtonBlock = styled.div`
    display: flex;
    margin-top: 20px;
    @media (max-width: 1000px) {
        justify-content: center;
    }
    @media (max-width: 500px) {
        flex-direction: column;
    }
`


export const MainPage = () => {
    return(
        <MainPageBlock>
            <Container>
                <MainPageImgBlock>
                    <MainPageImg src={MainPageLogo}></MainPageImg>
                </MainPageImgBlock>
                <TextBlock>
                    <MainText>
                    Money for the <br/>Interchain
                    </MainText>
                    <GreyText>
                        Qube is an appchain of alogorithmic stablecoins aimed at democratizing decentralized finance for everyone.
                    </GreyText>
                    <ButtonBlock>
                        <OpenAppButton/>
                        <CommunityButton/>
                    </ButtonBlock>
                </TextBlock>
            </Container>
        </MainPageBlock>
    )
}