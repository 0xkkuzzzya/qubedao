import styled from "styled-components";
import { FirstMainBlock } from "../FirstBlock/FirstMainBlock/FirstBlock";
import { SecondBlock } from "../SecondBlock/SecondBlock";

import React from "react";
import { ThirdBlock } from "../ThirdBlock/ThirdBlock";

const Pages = styled.div`
    width: 100%;
    overflow: hidden;
`

export const MainPages = () => {
    return(
        <Pages>
            <FirstMainBlock></FirstMainBlock>
            <SecondBlock></SecondBlock>
            <ThirdBlock></ThirdBlock>
        </Pages>
    )
}