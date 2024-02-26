import styled from "styled-components";
import QubeLogo from '../../../../../../assets/svg/QuveLogoPage2.webp'

const Container = styled.div`
    width: 100%;
`

const ContainerHeader = styled.div`
    width: 100%; 
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-left: 20px;
`

const MinterLogo = styled.img`
    width: 30px;
    height: 30px;
`

const MinterName = styled.a`
    font-size: 27px;
    font-weight: 600;
    color: white;
    margin-left: 10px;
    @media (max-width: 500px) {
        font-size: 20px;
    }
`

const InfoBlock = styled.div`
    width: 70%;
    margin-top: 15px;
    margin-left: 20px;
    @media (max-width: 500px) {
        width: 80%;
    }
`

const GreyBlock = styled.div`
    width: 80%;
    margin-left: 20px;
    margin-top: 10px;
    @media (max-width: 500px) {
        width: 90%;
    }
`

const MinterInfo = styled.a`
    font-size: 22px;
    font-weight: 500;
    color: white;
    @media (max-width: 500px) {
        font-size: 18px;
    }
`

const GreyText = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #B7BDC6;
    @media (max-width: 500px) {
        font-size: 12px;
    }
`



export const GrowInfo = () => {
    return (
        <Container>
            <ContainerHeader>
                <MinterLogo src={QubeLogo}></MinterLogo>
                <MinterName>Grow</MinterName>
            </ContainerHeader>
            <InfoBlock>
                <MinterInfo>
                    Decentralized savings protocol
                </MinterInfo>
            </InfoBlock>
            <GreyBlock>
                <GreyText>
                    Lend, borrow & stake at the highest rates. Bid on liquidated callateral wuthout bots.
                </GreyText>
            </GreyBlock>
        </Container>
    )
}