import styled from "styled-components";
import { MainHeader } from "../MainHeader/MainHeader";

const FitstBlock = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 720px){
        justify-content: normal;
    }
`

export const FirstMainBlock = () => {
    return(
        <FitstBlock>
            <MainHeader></MainHeader>
        </FitstBlock>
    )
}