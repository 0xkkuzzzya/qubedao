import styled from "styled-components";
import { USQInfo } from "./Usq/UsqBlock";
import { USQBlock } from "./Usq/USQHeader/USQHeader";
import { GrowHeader } from "./Grow/GrowHeader/GrowHeader";
import { GrowInfo } from "./Grow/GrowInfo/GrowInfo";
import { Exchange } from "./Exchange/Exchange";
import { Liquid } from "./Liquid/Liquid";
import Arrow from '../../../../assets/svg/Arrow.svg'
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";
import { Usq } from "./Usq/Usq";
import { Grow } from "./Grow/Grow";


const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LinkBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

const ArrowLogo = styled.img`
    width: 20px;
    margin-left: 10px;
    margin-top: 3px;
`

const LinkText = styled.a`
    font-size: 25px;
    font-weight: 600;
    color: white;
    
`


export const PageContainer = () => {   
    return (
        <Container>
            <Usq></Usq>
            <Grow></Grow>
            <Exchange></Exchange>
            <Liquid></Liquid>
            <LinkBlock>
                <LinkText>
                    Explore the ecosystem
                </LinkText>
                <ArrowLogo src={Arrow}></ArrowLogo>
            </LinkBlock>
        </Container>
    )
}




