import styled from "styled-components";
import QubeLogo from '../../../../../assets/svg/QuveLogoPage2.svg'
import { useInView } from "react-intersection-observer";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Block = styled.div <{marginM: string, opacityM: string}>`
    width: 550px;
    height: 170px;
    border-radius: 20px;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    transition: all .3s ease-in-out;
    margin-bottom: 30px;
    background: #1B1B1C;
    @media (max-width: 600px) {
        width: 100%;
    }
`

const ContainerHeader = styled.div`
    width: 100%; 
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-left: 20px;
`

const Logo = styled.img`
    width: 35px;
    height: 35px;
`

const Name = styled.a`
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
        margin-top: 10px;
    }
`

const GreyBlock = styled.div`
    width: 80%;
    margin-left: 20px;
    margin-top: 10px;
    @media (max-width: 500px) {
        width: 90%;
        margin-top: 5px;
    }
`

const MinterInfo = styled.a`
    font-size: 22px;
    font-weight: 500;
    color: white;
`

const GreyText = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #B7BDC6;
    @media (max-width: 500px) {
        font-size: 12px;
    }
`


export const Exchange = () => {

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
      });

    return(
        <Container>
            <Block ref={ref} 
            marginM={inView == true ? '0px' : '30px'}
            opacityM={inView == true ? '1' : '0'}>
                <ContainerHeader>
                    <Logo src={QubeLogo}></Logo>
                    <Name>Exchange</Name>
                </ContainerHeader>
                <InfoBlock>
                    <MinterInfo>
                        Buy and trade crypto
                    </MinterInfo>
                </InfoBlock>
                <GreyBlock>
                    <GreyText>
                        Premier orderbook & AMM decentralized exchange with deep liquidity and low slippage.
                    </GreyText>
                </GreyBlock>
            </Block>
        </Container>
    )
}