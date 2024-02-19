import styled from "styled-components";
import { MainPage } from "./MainPage/MainPage";

const Container = styled.div`
    width: 1000px;
    height: 100%;
    margin: 0 auto;
`


export const QubeDao = () => {
    return(
        <Container>
            <MainPage></MainPage>
        </Container>
    )
}