import styled from "styled-components";
import { MainHeader } from "./Header/MainHeader";
import { Routes, Route } from 'react-router-dom';
import { QubeDao } from "./Qubedao/QubeDao";

const Container = styled.div`
    width: 100%;
    background: #151516;
    overflow: hidden;
`


export const ContainerIndex = () => {
    return(
        <Container>
            <MainHeader></MainHeader>
            <Routes>
                <Route path="/" element={<QubeDao></QubeDao>} />
                <Route path="/launch" element={<></>} />
                <Route path="/ecosystem" element={<></>} />
                <Route path="/community" element={<></>} />
                <Route path="/useQube" element={<></>} />
                <Route path="/developer" element={<></>} />
                <Route path="/qubedao" element={<QubeDao></QubeDao>} />
			</Routes>
        </Container>
    )
}