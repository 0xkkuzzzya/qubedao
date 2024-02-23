import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    color: #B7BDC6;
    margin-top: 100px;
    font-size: 18px;
    text-decoration: none;
`

const Block1 = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const LinkText = styled.a`
    font-weight: 500;
    color: #B7BDC6;
    text-decoration: none;
`

const BlockText = styled.a`
    color: white;
    font-size: 30px;
    font-weight: 600;
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
`

const Block4 = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`


export const FooterLink = () => {
    return(
        <Container>
            <Block1>
                <BlockText>Use</BlockText>
                <LinkText href="https://cosmos.network/">Get a wallet</LinkText>
                <LinkText>Get QUBE</LinkText>
                <LinkText>Deposit</LinkText>
            </Block1>
            <Block2>
                <BlockText>Learn</BlockText>
                <LinkText>Docs</LinkText>
                <LinkText>Medium</LinkText>
                <LinkText>Primer</LinkText>
                <LinkText>USQ Comparison</LinkText>
                <LinkText>Qube Ledger</LinkText>
                <LinkText>Ecosystem</LinkText>
            </Block2>
            <Block3>
                <BlockText>Products</BlockText>
                <LinkText>Swap</LinkText>
                <LinkText>Minter (USQ)</LinkText>
                <LinkText>Grow</LinkText>
                <LinkText>Bridge to Qube</LinkText>
            </Block3>
            <Block4>
                <BlockText>Community</BlockText>
                <LinkText>X (Twitter)</LinkText>
                <LinkText>Telegram</LinkText>
                <LinkText>Announcements</LinkText>
                <LinkText>Forum</LinkText>
                <LinkText>Discord</LinkText>
            </Block4>
        </Container>
    )
}