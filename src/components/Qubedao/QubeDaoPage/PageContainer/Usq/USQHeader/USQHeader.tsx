import styled from "styled-components";
import USQLogo from '../../../../../../assets/svg/USQLogo.svg'

const Container = styled.div`
    width: 100%;
    height: 53%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient( to right, #D6E0EC, #6FB4F9);
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    @media (max-width: 500px) {
        height: 48%;
    }
`

const TokenName = styled.h1`
    font-size: 75px;
    font-weight: 600;
    color: #222222;
    margin-left: 50px;
    @media (max-width: 500px) {
        font-size: 60px;
    }
`

const TokenLogo = styled.img`
    width: 170px;
    margin-right: 50px;
    @media (max-width: 500px) {
        margin-right: 30px;
        width: 145px;
    }
`



export const USQBlock = () => {
    return (
        <Container>
            <TokenName>USQ</TokenName>
            <TokenLogo src={USQLogo}></TokenLogo>
        </Container>
    )
}