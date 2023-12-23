import React from "react";
import styled from "styled-components";

const MainText = styled.h2`
    color: #333;
    margin-top: -30px;
`

const MainTextP = styled.p`
    margin-top: -10px;
    @media (max-width: 720px) {
        margin-top: -10px;
    }
`

export const FirstBlockMiniText = () => {
    return(
        <MainText>
            Qube is blockchain ecosystem of algorithmic stablecoins powering
            <MainTextP></MainTextP>
            decentralized finance for everyone.
        </MainText>
    )
}