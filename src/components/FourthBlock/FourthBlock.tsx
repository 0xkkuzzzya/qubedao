import styled from "styled-components";
import Telegram from '../../assets/svg/Telegram.svg'

const MainBlock = styled.div`
    width: 100%;
`

const FirstBlock = styled.div`
    max-width: 100%;
    height: 350px;
    background-color: #66BAFF;
    text-align: center;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
`

const NameText = styled.h1`
    padding-top: 30px;
    font-size: 55px;
    color: white;
    margin-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    @media (max-width: 720px) {
        font-size: 40px;
        margin-top: 10px;
    }
`

const UnderText = styled.h1`
    max-width: 50%;
    font-size: 25px;
    margin-top: 35px;
    color: white;
    @media (max-width: 720px) {
        font-size: 18px;
        margin-top: 20px;
    }
`

const SecondBlock = styled.div`
    max-width: 100%;
    height: 350px;
    background-color: #474747;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
`

const FirstButton = styled.button`
    width: 200px;
    height: 50px;
    border: 2px solid white;
    background-color: transparent;
    border-radius: 50px;
    font-size: 16px;
    font-family: 'Metropolis', sans-serif;
    font-weight: 600;
    color: white;
    cursor: pointer;
    margin-top: 20px;
    @media (max-width: 720px) {
        margin-top: 30px;
    }
`

const SecondButton = styled.button`
    width: 200px;
    height: 50px;
    border: none;
    background-color: #46ACFF;
    font-size: 16px;
    font-family: 'Metropolis', sans-serif;
    border-radius: 50px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    @media (max-width: 720px) {
        margin-top: 30px;
    }
`

const TelegramImg = styled.img`
    width: 30px;
    height: 30px;
`

export const FouthBlock = () => {
    return(
        <MainBlock>
            <FirstBlock>
                <NameText>Developer resources</NameText>
                <UnderText>Everything you need to get started building on Qube, all in one place.</UnderText>
                <FirstButton>Start building</FirstButton>
            </FirstBlock>
            <SecondBlock>
                <NameText>Join the community</NameText>
                <UnderText>Join a vibrant community of innovators and builders creating a more open web.</UnderText>
                <SecondButton>
                    English channel
                    <TelegramImg src={Telegram}></TelegramImg>
                </SecondButton>
            </SecondBlock>
        </MainBlock>
    ) 
}