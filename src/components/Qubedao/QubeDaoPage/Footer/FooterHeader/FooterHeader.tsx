import styled from "styled-components";
import QubeCicrle from '../../../../../assets/svg/QubeCircle.svg'

const Container = styled.div`
    width: 100%;
`

const Header = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 45px;
`

const HeaderText = styled.a`
    font-size: 22px;
    font-weight: 600;
    color: white;
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