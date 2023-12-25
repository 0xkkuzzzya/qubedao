import styled from "styled-components";
import { FirstMainBlock } from "../FirstBlock/FirstMainBlock/FirstBlock";
import { SecondBlock } from "../SecondBlock/SecondBlock";
import { ThirdBlock } from "../ThirdBlock/ThirdBlock";
import { FouthBlock } from "../FourthBlock/FourthBlock";
import { Footer } from "../Footer/Footer";

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
            <FouthBlock></FouthBlock>
            <Footer></Footer>
        </Pages>
    )
}