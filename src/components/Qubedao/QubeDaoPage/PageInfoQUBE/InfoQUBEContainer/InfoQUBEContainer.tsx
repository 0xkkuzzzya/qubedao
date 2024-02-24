import styled from "styled-components";
import { Block1 } from "./Block1/Block1";
import { Block2 } from "./Block2/Block2";
import { Block3 } from "./Block3/Block3";
import { Block4 } from "./Block4/Block4";

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    @media (max-width: 500px) {
        width: 100%;
    }
`

const BlockPosition = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
`


export const InfoQUBEContainer = () => {

    return(
        <Container>
            <BlockPosition style={{justifyContent: "flex-start"}}>
                <Block1></Block1>
            </BlockPosition>
            <BlockPosition style={{justifyContent: "flex-end"}}>
               <Block2></Block2>
            </BlockPosition>
            <BlockPosition style={{justifyContent: "flex-start"}}>
                <Block3></Block3>
            </BlockPosition>
            <BlockPosition style={{justifyContent: "flex-end"}}>
                <Block4></Block4>
            </BlockPosition>
        </Container>
    )
}