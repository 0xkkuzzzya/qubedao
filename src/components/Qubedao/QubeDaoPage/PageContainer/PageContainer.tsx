import styled from "styled-components";
import { USQInfo } from "./Usq/UsqBlock";
import { USQBlock } from "./Usq/USQHeader/USQHeader";
import { GrowHeader } from "./Grow/GrowHeader/GrowHeader";
import { GrowInfo } from "./Grow/GrowInfo/GrowInfo";
import { Exchange } from "./Exchange/Exchange";
import { Liquid } from "./Liquid/Liquid";


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MineterGrowBlock = styled.div`
    width: 550px;
    height: 350px;
    border-radius: 20px;
    margin-top: 30px;
    background: #1B1B1C;
    @media (max-width: 600px) {
        width: 100%;
        height: 300px;
    }
`

const LiquidExchangeBlock = styled.div`
    width: 550px;
    height: 170px;
    border-radius: 20px;
    margin-top: 30px;
    background: #1B1B1C;
    @media (max-width: 600px) {
        width: 100%;
    }
`

const LinkBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

const LinkText = styled.a`
    font-size: 25px;
    font-weight: 600;
    color: white;
    
`


export const PageContainer = () => {
    return (
        <Container>
            <MineterGrowBlock>
                <USQBlock></USQBlock>
                <USQInfo></USQInfo>
            </MineterGrowBlock>
            <MineterGrowBlock>
                <GrowHeader></GrowHeader>
                <GrowInfo></GrowInfo>
            </MineterGrowBlock>
            <LiquidExchangeBlock>
                <Exchange></Exchange>
            </LiquidExchangeBlock>
            <LiquidExchangeBlock>
                <Liquid></Liquid>
            </LiquidExchangeBlock>
            <LinkBlock>
                <LinkText>
                    Explore the ecosystem
                </LinkText>
            </LinkBlock>
        </Container>
    )
}



