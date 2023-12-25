import styled from "styled-components";
import LogoQUBE from '../../../assets/svg/QubeLogo.svg'
import React from "react";

const Header = styled.div`
    max-width: 100%;
    height: 80px;
    display: grid;
    @media (max-width: 600px){
        font-size: 35px;
        height: 60px;
        margin-left: 10px;
        margin-right: 10px;
    }
    @media (min-width: 720px) {
        margin-left: 50px;
    }
    @media (max-width: 940px) {
        margin-left: 10px;
    }
`

const HeaderLogoBlock = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 940px){
        display: flex;
        position: absolute;
        margin-top: -90px;
        margin-left: -465px;
    }
    @media (max-width: 720px){
        display: flex;
        position: absolute;
        margin-top: -70px;
        margin-left: 0px;
        left: 0;
        text-align: center;
    }
`

const HeaderLogoQUBE = styled.img`
    display: block;
    width: 60px;
    height: 60px;
    margin-left: 30px;
    @media (max-width: 940px){
        width: 30px;
        height: 30px;
    }
`

const HeaderLogoText = styled.h2`
    margin-left: 10px;
    font-size: 50px;
    margin-right: 30px;
    @media (max-width: 940px){
        font-size: 20px;
    }
`

const BlockLink = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 60px;
    margin-top: 10px;
    @media (min-width: 720px){
        width: 100%;
        justify-content: center;
    }
    @media (max-width: 940px){
        margin-top: 50px;
    }
    @media (max-width: 720px){
        margin-top: 30px;
    }
`


const LinkText = styled.button`
    width: 100%;
    background: transparent;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    padding: 0;
    @media (min-width: 730px){
        font-size: 20px;
        margin-left: 30px;
        margin-right: 30px;
    }
    @media (max-width: 720px){
        margin-left: 0;
        margin-right: 0;
    }
`

const LinkFlex = styled.div`
    display: flex;
    align-items: center;
`

const LinkBlock = styled.div`
    flex-grow: 1;
    @media (min-width: 730px){
        flex-grow: 0;
        display: flex;
    }
`

const Test = styled.div`
    width: 100px;
    flex-grow: 1;
    @media (min-width: 730px){
        flex-grow: 0;
        display: flex;
    }
`

// const LinkBlockHidden = styled.div `
//     max-height: 110px;
//     transition: max-height .5s ease-in-out ;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     background-color: #dfdfdf;
//
//     Network
//     Ecosystem
//     Community
// `





export const MainHeader = () => {

    return(
        <Header>
                <BlockLink>
                    <LinkBlock>
                        <LinkText>Learn</LinkText>
                    </LinkBlock>
                    <LinkBlock>
                        <LinkText>Network</LinkText>
                    </LinkBlock>
                        <HeaderLogoBlock>
                            <HeaderLogoQUBE src={LogoQUBE}></HeaderLogoQUBE>
                            <HeaderLogoText>Qube</HeaderLogoText>
                        </HeaderLogoBlock>
                    <LinkBlock>
                        <LinkText>Ecosystem</LinkText>
                    </LinkBlock>
                    <LinkBlock>
                        <LinkText>Community</LinkText>
                    </LinkBlock>
                </BlockLink>

        </Header>
    )
}