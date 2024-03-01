import styled from "styled-components";
import QubeCicrle from '../../../../../assets/svg/QubeCircle.webp'

const Container = styled.div`
    width: 100%;
    margin-top: 100px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 55px;
    @media (max-width: 500px) {
        width: 45px;
    }
`

const HeaderText = styled.a`
    font-size: 22px;
    font-weight: 600;
    color: white;
    @media (max-width: 500px) {
        font-size: 18px;
    }
`


export const FooterHeader = () => {
    return(
        <Container>
            <Header>
                <HeaderText>Governed by</HeaderText>
                <Logo src={QubeCicrle}></Logo>
                <HeaderText>QUBE</HeaderText>
            </Header>
        </Container>
    )
}