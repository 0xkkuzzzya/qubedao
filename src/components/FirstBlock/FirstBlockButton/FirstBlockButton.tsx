import styled from "styled-components";
import { BuildButton } from "./BuildButton/BuildButton";
import { GetStartedButton } from "./GetStartedButton/GetStartedButton";

const ButttonBlock = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    padding: 0px 20px;
    margin-bottom: 150px;
`

export const FirstBlockButton = () => {
    return(
        <ButttonBlock>
            <GetStartedButton></GetStartedButton>
            <BuildButton></BuildButton>
        </ButttonBlock>
    )
}