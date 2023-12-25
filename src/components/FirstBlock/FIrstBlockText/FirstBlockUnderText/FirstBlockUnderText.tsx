import React from "react";
import styled from "styled-components";

const MainText = styled.h1`
    color: #46ACFF;
    margin-top: -60px;
    @media (max-width: 480px) {
        margin-top: -30px;
    }
`

export const FirstBlockUnderText = () => {
    return(
        <MainText>
            for the masses
        </MainText>
    )
}