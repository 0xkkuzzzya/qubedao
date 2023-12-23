import styled from "styled-components";
import { FirstMainBlock } from "../FirstBlock/FirstMainBlock/FirstBlock";
import React from "react";

const Pages = styled.div`
    width: 100%;
    overflow: hidden;
`

export const MainPages = () => {
    return(
        <Pages>
            <FirstMainBlock></FirstMainBlock>
        </Pages>
    )
}