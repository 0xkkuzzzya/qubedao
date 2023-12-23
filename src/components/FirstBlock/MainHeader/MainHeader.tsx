import styled from "styled-components";
import LogoQUBE from '../../../assets/svg/QubeLogo.svg'
import { ButtonLink } from "../FirstBlockButton/ButtonLink";
import { useAccordionStore } from "../../../hooks/useAccordionStore";
import React from "react";

const Header = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 720px){
        justify-content: normal;
    }
`

const HeaderLogoBlock = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`

const HeaderLogoQUBE = styled.img`
    width: 60px;
    height: 60px;
    @media (max-width: 720px){
        width: 40px;
        height: 40px;
    }
`

const HeaderLogoText = styled.h2`
    margin-left: 10px;
    font-size: 50px;
`

const BlockLink = styled.nav`
    display: flex;
    font-size: 20px;
    @media (max-width: 720px){
        width: 100%;
    }
`


const LinkText = styled.button`
    font-weight: 600;
    margin-left: 20px;
    margin-right: 20px;
    
`

// const LinkBlockHidden = styled.div `
//     max-height: 110px;
//     transition: max-height .5s ease-in-out ;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     background-color: #dfdfdf;
// `



export const MainHeader = () => {

    return(
        <Header>
            <BlockLink>
                <LinkText>Learn</LinkText>
                <LinkText>Network</LinkText>
            </BlockLink>
            <HeaderLogoBlock>
                <HeaderLogoQUBE src={LogoQUBE}></HeaderLogoQUBE>
                <HeaderLogoText>Qube</HeaderLogoText>
            </HeaderLogoBlock>
            <BlockLink>
                <LinkText>Ecosystem</LinkText>
                <LinkText>Community</LinkText>
            </BlockLink>
        </Header>
    )
}