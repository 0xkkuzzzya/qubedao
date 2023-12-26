import styled from "styled-components";
import React from "react";
import { MainHeader } from "../MainHeader/MainHeader";
import { FirstBlockMainText } from "../FIrstBlockText/FirstBlockMainText/FirstBlockMainText";
import { FirstBlockUnderText } from "../FIrstBlockText/FirstBlockUnderText/FirstBlockUnderText";
import { FirstBlockMiniText } from "../FIrstBlockText/FirstBlockMiniText/FirstBlockMiniText";
import { FirstBlockButton } from "../FirstBlockButton/FirstBlockButton";

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
    margin-top: 180px;
`

const UnderMainText = styled.div`
    max-width: 100%;
    font-size: 18px;
    max-width: 50%;
    @media (max-width: 600px){
        font-size: 15px;
    }
    @media (max-width: 720px){
        max-width: 80%;
    }    
`

const UpMainText = styled.div`
    max-width: 100%;
    font-size: 45px;
    padding: 0px 15px;
    @media (max-width: 800px){
        font-size: 35px;
    }
    @media (max-width: 480px){
        font-size: 23px;
    }
`

export const FirstMainBlock = () => {
    return(
        <FitstBlock>
            <MainHeader></MainHeader>
            <MainText>
                <UpMainText>
                    <FirstBlockMainText></FirstBlockMainText>
                    <FirstBlockUnderText></FirstBlockUnderText>
                </UpMainText>
                <UnderMainText>
                    <FirstBlockMiniText></FirstBlockMiniText>
                </UnderMainText>
            </MainText>
            <FirstBlockButton></FirstBlockButton>
        </FitstBlock>
    )
}