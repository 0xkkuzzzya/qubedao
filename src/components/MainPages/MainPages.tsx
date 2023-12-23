import styled from "styled-components";
import { FirstMainBlock } from "../FirstBlock/FirstMainBlock/FirstBlock";
import React from "react";

const Pages = styled.div`
    @media (max-width: 720px) {
        display: inline-block;
        justify-content: center;
}
`

export const MainPages = () => {
    return(
        <Pages>
            <FirstMainBlock></FirstMainBlock>
        </Pages>
    )
}