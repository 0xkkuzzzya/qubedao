import styled from "styled-components";
import QubeLogo from '../../../../assets/svg/QubeLogo.svg'

const Header = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    color: white;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 50px;
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 0px;
    }
`

const TextBlock = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
        align-items: center;
    }
`

const HeaderText1 = styled.h1`
    font-size: 45px;
    font-weight: 600;
    margin: 0 20px;
    @media (max-width: 850px) {
        font-size: 35px;
    }
    @media (max-width: 600px) {
        font-size: 28px;
        margin: 0;
    }
`

const HeaderText2 = styled.h1`
    font-size: 45px;
    font-weight: 600;
    margin: 0 20px;
    @media (max-width: 850px) {
        font-size: 35px;
    }
    @media (max-width: 600px) {
        font-size: 28px;
        margin-left: 5px;
        margin-top: 5px;
    }
`

const HeaderLogo = styled.img`
    width: 50px;
    @media (max-width: 850px) {
        width: 35px;
    }
    @media (max-width: 650px) {
        width: 25px;
    }
`


export const PageHeader = () => {
    return (
        <Header>
            <TextBlock>
                <HeaderText1>Explore the</HeaderText1>
            </TextBlock>
            <TextBlock>
                <HeaderLogo src={QubeLogo}></HeaderLogo>
                <HeaderText2>Qube ecosystem</HeaderText2>
            </TextBlock>
        </Header>
    )
}