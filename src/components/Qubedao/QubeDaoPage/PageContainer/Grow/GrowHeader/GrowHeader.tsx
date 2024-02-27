import styled from "styled-components";
import AtomLogo from '../../../../../../assets/svg/AtomLogo.webp'
import QubeLogo from '../../../../../../assets/svg/QubeLogo.webp'

const Container = styled.div`
    width: 100%;
    height: 53%;
    display: flex;
    align-items: center;
    @media (max-width: 500px) {
        height: 48%;
    }
`

const TokenBlock = styled.div`
    width: 30%;
    height: 100%;
    background: linear-gradient( to right, #A7D5FE, #9DE7EF);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 30px;
`

const TokenNameBlock = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 500px) {
        margin-top: 10px;
    }
`

const TokenName = styled.h1`
    font-size: 20px;
    font-weight: 700;
    color: #222222;
    margin-left: 3px;
    @media (max-width: 500px) {
        font-size: 16px;
    }
`

const TokenNameLogo = styled.img`
    width: 30px;
    @media (max-width: 500px) {
        width: 20px;
    }
`

const TokenLogo = styled.img`
    width: 150px;
    margin-top: -40px;
    @media (max-width: 500px) {
        width: 120px;
        margin-top: -30px;
    }
`

const HeaderInfoBlock = styled.div`
    width: 70%;
    height: 100%;
    background: linear-gradient(135deg, #1C2023, #3F3F40);
    border-top-right-radius: 30px;
`

const HeaderTextBlock = styled.div`
    width: 100%;
    margin-top: 30px;
    margin-left: 20px;
    @media (max-width: 500px) {
        margin-top: 20px;
    }
`

const HeaderText = styled.a`
    font-size: 25px;
    font-weight: 600;
    color: white;
    @media (max-width: 500px) {
        font-size: 22px;
    }
`

const HeaderMiniTextBlock = styled.div`
    width: 50%;
    margin-top: 10px;
    margin-left: 20px;
    @media (max-width: 500px) {
        width: 65%;
    }
`

const HeaderMiniText = styled.a`
    font-size: 20px;
    font-weight: 600;
    color: white;
    @media (max-width: 500px) {
        font-size: 17px;
    }
`

const BlueText = styled.a`
    font-size: 20px;
    font-weight: 600;
    color: #7DC1FE;
    @media (max-width: 500px) {
        font-size: 18px;
    }
`


export const GrowHeader = () => {
    return (
        <Container>
            <TokenBlock>
                <TokenNameBlock>
                    <TokenNameLogo src={QubeLogo}></TokenNameLogo>
                    <TokenName>Grow</TokenName>
                </TokenNameBlock>
                <TokenLogo src={AtomLogo}></TokenLogo>
            </TokenBlock>
            <HeaderInfoBlock>
                <HeaderTextBlock>
                    <HeaderText>
                    Put your<br/>
                    assets to work
                    </HeaderText>
                </HeaderTextBlock>
                <HeaderMiniTextBlock>
                    <HeaderMiniText>
                        <BlueText>Stake </BlueText>
                         USQ, ATOM,
                        TIA & more!
                    </HeaderMiniText>
                </HeaderMiniTextBlock>
            </HeaderInfoBlock>
        </Container>
    )
}