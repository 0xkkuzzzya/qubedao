import styled from "styled-components";
import QubeLogo from '../../../../assets/svg/QubeLogo.webp'
import { MainHeader } from "../../../Header/MainHeader";
import { InfoQUBEContainer } from "./InfoQUBEContainer/InfoQUBEContainer";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const HeaderMini = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: 500px) {
        width: 100%;
    }
`

const HeaderMain = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-end;
    text-align: right;
    @media (max-width: 500px) {
        width: 100%;
    }
`

const MainHeaderText = styled.a`
    font-size: 30px;
    font-weight: 500;
    color: white;
    @media (max-width: 500px) {
        font-size: 25px;
    }
`

const HeaderMiniText = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #B7BDC6;
    margin: 0px 5px;
`

const HeaderLogo = styled.img`
    width: 30px;
    @media (max-width: 500px) {
        width: 20px;
    }
`

const BlueTextPhase1 = styled.a`
    font-size: 35px;
    font-weight: 600;
    background: linear-gradient(to right, #7CC1FD, #A1D3FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 500px) {
        font-size: 30px;
    }
`

const BlueTextPhase2 = styled.a`
    font-size: 35px;
    font-weight: 700;
    background: linear-gradient(to right, #A1D3FF, #7BBDFF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 500px) {
        font-size: 30px;
    }
`

const BlueTextPhase3 = styled.a`
    font-size: 35px;
    font-weight: 700;
    background: linear-gradient(to right, #7BBDFF, #2B99FD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 500px) {
        font-size: 30px;
    }
`


export const PageInfoQUBE = () => {
    return(
        <Container>
            <HeaderMini>
                <div style={{display: "flex", alignItems: "center",}}>
                    <HeaderMiniText>Powered by</HeaderMiniText>
                    <HeaderLogo src={QubeLogo}></HeaderLogo>
                    <HeaderMiniText>Qube Appchain</HeaderMiniText>
                </div>
            </HeaderMini>
            <HeaderMain>
                <MainHeaderText>
                    <BlueTextPhase1>Trade</BlueTextPhase1>,
                    <BlueTextPhase2> Save</BlueTextPhase2>,
                    <BlueTextPhase3> Stake</BlueTextPhase3>
                    <br/>
                    <MainHeaderText>without limits.</MainHeaderText>
                </MainHeaderText>
            </HeaderMain>
            <InfoQUBEContainer/>
        </Container>
    )
}