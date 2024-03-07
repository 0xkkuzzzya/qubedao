import styled from "styled-components";
import QubeLogo from '../../../../../../assets/svg/QuveLogoPage2.webp'

const Container = styled.div`
    width: 100%;
`

const ContainerHeader = styled.div`
    width: 100%; 
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-left: 20px;
`

const Logo = styled.img`
    width: 25px;
    height: 25px;
`

const Name = styled.a`
    font-size: 27px;
    font-weight: 500;
    color: white;
    margin-left: 10px;
    @media (max-width: 600px) {
        font-size: 17px;
    }
`

const InfoBlock = styled.div`
    width: 70%;
    margin-top: 15px;
    margin-left: 20px;
    @media (max-width: 600px) {
        width: 80%;
        margin-top: 20px;
    }
`

const GreyBlock = styled.div`
    width: 80%;
    margin-left: 20px;
    margin-top: 10px;
    @media (max-width: 600px) {
        width: 90%;
    }
`

const Info = styled.a`
    font-size: 22px;
    font-weight: 500;
    color: white;
    @media (max-width: 600px) {
        font-size: 18px;
    }
`

const GreyText = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #B7BDC6;
    @media (max-width: 600px) {
        font-size: 12px;
    }
`



export const GrowInfo = () => {
    return (
        <Container>
            <ContainerHeader>
                <Logo src={QubeLogo}></Logo>
                <Name>Grow</Name>
            </ContainerHeader>
            <InfoBlock>
                <Info>
                    Decentralized savings protocol
                </Info>
            </InfoBlock>
            <GreyBlock>
                <GreyText>
                    Lend, borrow & stake at the highest rates. Bid on liquidated collateral without bots.
                </GreyText>
            </GreyBlock>
        </Container>
    )
}