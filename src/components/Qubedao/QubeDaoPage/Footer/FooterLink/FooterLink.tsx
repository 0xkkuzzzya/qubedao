import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Container = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
    margin-top: 30px;
    justify-content: center;
    margin-bottom: 50px;
    @media (max-width: 950px) {
        width: 100%;
    }
`

const ContainerBlockDes = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    gap: 30px;
    color: #B7BDC6;
    font-size: 18px;
    text-decoration: none;
    justify-content: space-between;
    @media (max-width: 950px) {
        gap: 10px;
        justify-content: normal;
    }
`

const ContainerBlockMob = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    color: #B7BDC6;
    font-size: 18px;
    text-decoration: none;
    @media (max-width: 950px) {
        font-size: 16px;
        width: 80%;
    }
    @media (max-width: 600px) {
        width: 85%;
    }
`

const MobBlock = styled.div`
`

const Block1 = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 950px) {
        height: 50%;
    }
`

const LinkText = styled.a`
    font-weight: 500;
    color: #B7BDC6;
    text-decoration: none;
`

const BlockText = styled.a`
    color: white;
    font-size: 30px;
    font-weight: 500;
`

const Block2 = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Block3 = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 950px) {
        height: 50%;
    }
`

const Block4 = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`


export const FooterLink = () => {

    const isDes = useMediaQuery({
        query: "(min-device-width: 950px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 950px)",
    });


    let IsDesCon = <ContainerBlockDes>
        <Block1>
            <BlockText>Use</BlockText>
            <LinkText href="https://cosmos.network/">Get a wallet</LinkText>
            <LinkText href="">Get QUBE</LinkText>
            <LinkText href="">Deposit</LinkText>
        </Block1>
        <Block2>
            <BlockText>Learn</BlockText>
            <LinkText href="https://docs.qubedao.com">Docs</LinkText>
            <LinkText href="https://medium.com/@QubeLedger">Medium</LinkText>
            <LinkText href="">Primer</LinkText>
            <LinkText href="">USQ Comparison</LinkText>
            <LinkText href="https://github.com/QubeLedger">Qube Ledger</LinkText>
            <LinkText href="/ecosystem">Ecosystem</LinkText>
        </Block2>
        <Block3>
            <BlockText>Products</BlockText>
            <LinkText href="https://swap.qubedao.com">Swap</LinkText>
            <LinkText href="https://minter.qubedao.com">Minter (USQ)</LinkText>
            <LinkText href="https://grow.qubedao.com">Grow</LinkText>
            <LinkText href="https://bridge.qubedao.com">Bridge to Qube</LinkText>
        </Block3>
        <Block4>
            <BlockText>Community</BlockText>
            <LinkText href="https://twitter.com/qubeledger">X (Twitter)</LinkText>
            <LinkText href="https://t.me/QubeLedger">Telegram</LinkText>
            <LinkText href="">Announcements</LinkText>
            <LinkText href="https://forum.qubedao.com">Forum</LinkText>
            <LinkText href="https://discord.gg/FDjrR3BR">Discord</LinkText>
        </Block4>
    </ContainerBlockDes>

    let IsMobCon = <ContainerBlockMob>

        <MobBlock>
            <Block1>
                <BlockText>Use</BlockText>
                <LinkText href="https://cosmos.network/">Get a wallet</LinkText>
                <LinkText href="">Get QUBE</LinkText>
                <LinkText href="">Deposit</LinkText>
            </Block1>
            <Block2>
                <BlockText>Learn</BlockText>
                <LinkText href="https://docs.qubedao.com">Docs</LinkText>
                <LinkText href="https://medium.com/@QubeLedger">Medium</LinkText>
                <LinkText href="">Primer</LinkText>
                <LinkText href="">USQ Comparison</LinkText>
                <LinkText href="https://github.com/QubeLedger">Qube Ledger</LinkText>
                <LinkText href="/ecosystem">Ecosystem</LinkText>
            </Block2>
        </MobBlock>
        <MobBlock>
            <Block3>
                <BlockText>Products</BlockText>
                <LinkText href="https://swap.qubedao.com">Swap</LinkText>
                <LinkText href="https://minter.qubedao.com">Minter (USQ)</LinkText>
                <LinkText href="https://grow.qubedao.com">Grow</LinkText>
                <LinkText href="https://bridge.qubedao.com">Bridge to Qube</LinkText>
            </Block3>
            <Block4>
                <BlockText>Community</BlockText>
                <LinkText href="https://twitter.com/qubeledger">X (Twitter)</LinkText>
                <LinkText href="https://t.me/QubeLedger">Telegram</LinkText>
                <LinkText href="">Announcements</LinkText>
                <LinkText href="https://forum.qubedao.com">Forum</LinkText>
                <LinkText href="https://discord.gg/FDjrR3BR">Discord</LinkText>
            </Block4>
        </MobBlock>
    </ContainerBlockMob>

    return (
        <Container>
            {isDes && IsDesCon}
            {isMob && IsMobCon}
        </Container>
    )
}