import styled from "styled-components";
import { MainPage } from "./MainPage/MainPage";
import { QubeDaoPage } from "./QubeDaoPage/QubeDaoPage";

const Container = styled.div`
    width: 1000px;
    height: 100%;
    margin: 0 auto;
    padding-bottom: 50px;
    @media (max-width: 1000px) {
        width: 100%;
    }
`


export const QubeDao = () => {
    return(
        <Container>
            <MainPage/>
            <QubeDaoPage/>
        </Container>
    )
}