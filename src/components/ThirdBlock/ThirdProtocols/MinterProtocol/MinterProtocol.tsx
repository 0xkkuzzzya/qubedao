import styled from "styled-components";
import MinterScreen from '../../../../assets/svg/MinterScreen.jpg'
import { MinterButton } from "./MInterButton/MinterButton";

const MinterBlock = styled.div`
    max-width: 60%;
    background-color: #46ACFF;
    display: flex;
    margin-bottom: 50px;
    border-radius: 50px;
    @media (max-width: 900px) {
        flex-direction: column;
        max-width: 90%;
        align-items: center;
    }
`

const TextBlock = styled.div`
    color: white;
    max-width: 70%;
    @media (max-width: 900px) {
        max-width: 100%;
    }
`

const NameText = styled.h1`
    font-size: 45px;
    margin-top: 100px;
    margin-left: 70px;
    font-weight: 700;
    @media (max-width: 600px) {
        margin-left: 20px;
        font-size: 40px
    }
`

const DescriptionText = styled.h3`
    font-size: 20px;
    font-size: 30px;
    margin-left: 70px;
    @media (max-width: 600px) {
        margin-left: 20px;
        font-size: 20px
    }
`

const PhotoMinter = styled.div`
    width: 400px;
    height: 500px;
    background-color: red;
    border-radius: 40px;
    @media (max-width: 720px) {
        width: 90%;
    }
`

export const MinterProtocol = () => {

    let Description = <DescriptionText>Minter is a decentralized stablecoin protocol that algorithmically pegs stablecoins to fiat currencies. </DescriptionText>

    return(
        <MinterBlock>
            <TextBlock>
                <NameText>Minter</NameText>
                {Description}
                <MinterButton></MinterButton>
            </TextBlock>
            <PhotoMinter></PhotoMinter>
        </MinterBlock>
    )
}