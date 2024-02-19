import styled from "styled-components";
import MainPageLogo from '../../../assets/svg/MainPageImg.svg'
import { OpenAppButton } from "../../Buttons/MainPageButtons/OpenApp";
import { CommunityButton } from "../../Buttons/MainPageButtons/Community";

const MainPageBlock = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    margin: auto;
    margin-top: 13em;
`

const TextBlock = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

const MainText = styled.h1`
    color: #E9E9EB;
    font-size: 80px;
    margin: 0;
    font-weight: 600;
`

const GreyText = styled.h4`
    font-size: 23px;
    color: #B7BDC6;
    margin-top: 20px;
`

const MainPageImg = styled.img`
    width: 450px;
    margin-top: -65px;
`

const ButtonBlock = styled.div`
    display: flex;
    margin-top: 20px;
`


export const MainPage = () => {
    return(
        <MainPageBlock>
            <Container>
                <MainPageImg src={MainPageLogo}></MainPageImg>
                <TextBlock>
                    <MainText>
                    Money for the <br/>Interchain
                    </MainText>
                    <GreyText>
                    Qube is an appchain of alogorithmic<br/>
                    staiblecoins aimed at demecratizing<br/>
                    decentralized finance for everyone.<br/>
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