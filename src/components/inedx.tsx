import styled from "styled-components";
import { MainHeader } from "./Header/MainHeader";
import { Routes, Route } from 'react-router-dom';
import { QubeDao } from "./Qubedao/QubeDao";
import { Ecosystem } from "./Ecosystem/Ecosystem";
import ScrollTop from "./ScrollTop";
import { FooterLink } from "./Qubedao/QubeDaoPage/Footer/FooterLink/FooterLink";

const Container = styled.div`
    width: 100%;
    background: #151516;
    -webkit-tap-highlight-color: transparent;
`


export const ContainerIndex = () => {
    return(
        <Container>
            <MainHeader></MainHeader>
            <ScrollTop/>
            <Routes>
                <Route path="/" element={<QubeDao></QubeDao>} />
                <Route path="/launch" element={<></>} />
                <Route path="/ecosystem" element={<Ecosystem></Ecosystem>} />
                <Route path="/community" element={<></>} />
                <Route path="/use" element={<></>} />
                <Route path="/developer" element={<></>} />
                <Route path="/qubedao" element={<QubeDao></QubeDao>} />
			</Routes>
            <FooterLink/>
        </Container>
    )
}