import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const Block = styled.div <{margin: string, opacity: string}>`
    width: 300px;
    height: 130px;
    background: #1B1B1C;
    margin-top: ${(props: { margin: any; }) => props.margin};
    opacity: ${(props: { opacity: any; }) => props.opacity};
    transition: all .3s ease-in-out;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    @media (max-width: 500px) {
        width: 200px;
    }
`

const Block1MainText = styled.a`
    font-size: 65px;
    font-weight: 600;
    margin-top: -10px;
    background: linear-gradient(to right, #7CC1FD, #2D9AFD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 500px) {
        font-size: 50px;
    }
`

const Block1UndrText = styled.a`
    font-size: 20px;
    color: #B7BDC6;
    @media (max-width: 500px) {
        font-size: 16px;
    }
`

export const Block1 = () => {

    let Block1Text = '<0.05%'

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
      });

    return (
        <Block ref={ref} 
        margin={inView == true ? '0px' : '30px'} 
        opacity={inView == true ? '1' : '0'}> 
            <Block1MainText>{Block1Text}</Block1MainText>
            <Block1UndrText>Average transaction fee</Block1UndrText>
        </Block>
    )
}