import styled from "styled-components";
import React from "react";
import { MainHeader } from "../MainHeader/MainHeader";
import { FirstBlockMainText } from "../FIrstBlockText/FirstBlockMainText/FirstBlockMainText";
import { FirstBlockUnderText } from "../FIrstBlockText/FirstBlockUnderText/FirstBlockUnderText";
import { FirstBlockMiniText } from "../FIrstBlockText/FirstBlockMiniText/FirstBlockMiniText";

const FitstBlock = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`

const MainText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-top: 100px;
    /* @media (max-width: 720px) {
        max-width: 70%;
    } */
`

const UnderMainText = styled.div`
    max-width: 100%;
`

export const FirstMainBlock = () => {
    return(
        <FitstBlock>
            <MainHeader></MainHeader>
            <MainText>
                <FirstBlockMainText></FirstBlockMainText>
                <FirstBlockUnderText></FirstBlockUnderText>
                <UnderMainText>
                    <FirstBlockMiniText></FirstBlockMiniText>
                </UnderMainText>
            </MainText>
        </FitstBlock>
    )
}