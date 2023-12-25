import styled from "styled-components";
import { ThirdUpText } from "./ThirdUpText/ThirdUpText";
import { MinterProtocol } from "./ThirdProtocols/MinterProtocol/MinterProtocol";

const Third = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const ThirdBlock = () => {
    return(
        <Third>
            <ThirdUpText></ThirdUpText>
            <MinterProtocol></MinterProtocol>
        </Third>
    )
}