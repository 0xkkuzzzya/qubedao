import styled from "styled-components";
import { Exchange } from "./Exchange/Exchange";
import { Liquid } from "./Liquid/Liquid";
import Arrow from '../../../../assets/svg/Arrow.svg'
import { Usq } from "./Usq/Usq";
import { Grow } from "./Grow/Grow";
import { useMediaQuery } from 'react-responsive'


const Container = styled.div`
    width: 100%;
    
`

const ContainerBlockDes = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ContainerBlockMob = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LinkBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    @media (max-width: 500px) {
        font-size: 18px;
        margin-top: 10px
    }
`

const ArrowLogo = styled.img`
    width: 20px;
    margin-left: 10px;
    margin-top: 3px;
`

const LinkText = styled.a`
    font-size: 20px;
    font-weight: 600;
    color: white;
    @media (max-width: 500px) {
        font-size: 18px;
    }
`


export const PageContainer = () => {

    const isDes = useMediaQuery({
        query: "(min-device-width: 1000px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 1000px)",
    });

    let IsDesCon =  <>
                        <ContainerBlockDes>
                            <div style={{ marginRight: "15px" }}>
                                <Usq></Usq>
                                <Exchange></Exchange>
                            </div>
                            <div style={{ marginLeft: "15px" }}>
                                <Grow></Grow>
                                <Liquid></Liquid>
                            </div>
                        </ContainerBlockDes>
                        <LinkBlock>
                        <LinkText>
                            Explore the ecosystem
                        </LinkText>
                        <ArrowLogo src={Arrow}></ArrowLogo>
                        </LinkBlock>
                    </>
                    

    let IsMobCon = <ContainerBlockMob>
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
                    </ContainerBlockMob>

    return (
        <Container>
            {isDes && IsDesCon}
            {isMob && IsMobCon}
        </Container>
    )
}




