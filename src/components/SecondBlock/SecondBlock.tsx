import styled from "styled-components";
import { SecondBlockText } from "./SecondBlockText/SecondBlockText";
import { SecondBlockMany } from "./SecondBLockMany/SecondBlockMany";

const Second = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FBFBFA;
`

export const SecondBlock = () => {
    return(
        <Second>
            <SecondBlockText></SecondBlockText>
            <SecondBlockMany></SecondBlockMany>
        </Second>
    )
}