import styled from "styled-components";
import QubeLogo from '../../../../assets/svg/QubeLogo.webp'
import { useInView } from 'react-intersection-observer';

const Header = styled.div <{margin: string, opacity: string}>`
    width: 100%;
    margin-top: ${(props: { margin: any; }) => props.margin};
    opacity: ${(props: { opacity: any; }) => props.opacity};
    transition: all .3s ease-in-out;
    align-items: center;
    display: flex;
    color: white;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 50px;
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 20px;
    }
`

const TextBlock = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
        align-items: center;
    }
`

const HeaderText1 = styled.h1`
    font-size: 45px;
    font-weight: 600;
    margin: 0 20px;
    @media (max-width: 850px) {
        font-size: 35px;
    }
    @media (max-width: 600px) {
        font-size: 28px;
        margin: 0;
    }
`

const HeaderText2 = styled.h1`
    font-size: 45px;
    font-weight: 600;
    margin: 0 20px;
    @media (max-width: 850px) {
        font-size: 35px;
    }
    @media (max-width: 600px) {
        font-size: 28px;
        margin-left: 5px;
        margin-top: 5px;
    }
`

const HeaderLogo = styled.img`
    width: 50px;
    @media (max-width: 850px) {
        width: 35px;
    }
    @media (max-width: 650px) {
        width: 25px;
    }
`


export const PageHeader = () => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
      });

    return (
        <Header ref={ref} 
        margin={inView == true ? '0px' : '30px'}
        opacity={inView == true ? '1' : '0'}>
            <TextBlock>
                <HeaderText1>Explore the</HeaderText1>
            </TextBlock>
            <TextBlock>
                <HeaderLogo src={QubeLogo}></HeaderLogo>
                <HeaderText2>Qube ecosystem</HeaderText2>
            </TextBlock>
        </Header>
    )
}