import styled from "styled-components";
import QubeLogo from '../../../../../assets/svg/QuveLogoPage2.webp'

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
    margin-top: 8px;
    margin-left: 20px;
    @media (max-width: 600px) {
        width: 80%;
    }
`

const GreyBlock = styled.div`
    width: 80%;
    margin-left: 20px;
    margin-top: 3px;
    @media (max-width: 600px) {
        width: 95%;
        margin-top: 0px;
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



export const USQInfo = () => {
    return (
        <Container>
            <ContainerHeader>
                    <Logo src={QubeLogo}></Logo>
                    <Name>Minter</Name>
                </ContainerHeader>
                <InfoBlock>
                    <Info>
                        Capital-efficient decentralized 
                        stablecoins
                    </Info>
                </InfoBlock>
                <GreyBlock>
                <GreyText>
                    Qube stablecoins are the first fully collateralized, capital-efficient decentralized stablecoins in the world.
                    </GreyText>
                </GreyBlock>
        </Container>
    )
}