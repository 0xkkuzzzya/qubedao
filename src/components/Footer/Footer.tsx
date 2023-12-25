import styled from "styled-components";
import { ListFormat } from "typescript";

const MainFooter = styled.div`
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 30px 0px;
    @media (max-width: 840px) {
        flex-direction: column;
    }
`

const LinkBlock = styled.div`
    padding-left: 40px;
    padding-right: 40px;
    text-align: left;
    @media (max-width: 840px) {
        padding-top: 25px;
        width: 100%;
    }
    @media (max-width: 450px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`

const NameBlock = styled.div`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
    @media (max-width: 450px) {
        font-size: 22px;
    }
`

const LinkText = styled.a`
    font-weight: 700;
    font-size: 18px;
    color: #333;
    @media (max-width: 450px) {
        font-size: 16px;
    }
`

const Link = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 10px;
`

const FirstBlock = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 840px) {
        width: 100%;
    }
`

const SecondBlock = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 840px) {
        width: 100%;
    }
    
`



export const Footer = () => {

    let Ecosystem = <NameBlock>Ecosystem</NameBlock>
    let Network = <NameBlock>Network</NameBlock>
    let Learn = <NameBlock>Learn</NameBlock>
    let Community = <NameBlock>Community</NameBlock>

    return(
        <MainFooter>
            <FirstBlock>
                <LinkBlock>
                    {Ecosystem}
                    <Link>
                        <LinkText>Get a wallet</LinkText>
                        <LinkText>Savings</LinkText>
                        <LinkText>Stablecoins</LinkText>
                        <LinkText>Exchange</LinkText>
                        <LinkText>Bridge</LinkText>
                    </Link>
                </LinkBlock>
            <LinkBlock>
                {Network}
                <Link>
                    <LinkText>Explorer</LinkText>
                    <LinkText>Tech Documentation</LinkText>
                    <LinkText>Github</LinkText>
                </Link>
            </LinkBlock>
            </FirstBlock>
            <SecondBlock>
                <LinkBlock>
                    {Learn}
                    <Link>
                        <LinkText>Blog</LinkText>
                        <LinkText>Documentation</LinkText>
                    </Link>
                </LinkBlock>
                <LinkBlock>
                    {Community}
                    <Link>
                        <LinkText>Telegram</LinkText>
                        <LinkText>X.com</LinkText>
                        <LinkText>Discord</LinkText>
                    </Link>
                </LinkBlock>
            </SecondBlock>
        </MainFooter>
    ) 
}