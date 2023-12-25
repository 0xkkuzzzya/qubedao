import styled from "styled-components";

const MainBlock = styled.div`
    width: 100%;
`

const FirstBlock = styled.div`
    max-width: 100%;
    height: 350px;
    background-color: #66BAFF;
`

const SecondBlock = styled.div`
    max-width: 100%;
    height: 350px;
    background-color: #474747;
`

export const FouthBlock = () => {
    return(
        <MainBlock>
            <FirstBlock></FirstBlock>
            <SecondBlock></SecondBlock>
        </MainBlock>
    ) 
}