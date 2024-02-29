import styled from "styled-components";
import { Exchange } from "./Exchange/Exchange";
import { Liquid } from "./Liquid/Liquid";
import { UsqContainer } from "./Usq/Usq";
import { Grow } from "./Grow/Grow";
import { DepositHub } from "./DepositHub/DepositHub";
import { KeplrBlock } from "./Keplr/Keplr";
import { LeapBlock } from "./Leap/Leap";


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1000px) {
        margin: 0 auto;
    }
`


export const EcosystemContainer = () => {   
    return (
        <Container>
            <UsqContainer></UsqContainer>
            <Grow></Grow>
            <Exchange></Exchange>
            <Liquid></Liquid>
            <DepositHub></DepositHub>
            <KeplrBlock></KeplrBlock>
            <LeapBlock></LeapBlock>
        </Container>
    )
}




