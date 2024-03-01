import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const Block = styled.div <{margin: string, opacity: string}>`
    width: 400px;
    height: 130px;
    background: #1B1B1C;
    margin-top: ${(props: { margin: any; }) => props.margin};
    opacity: ${(props: { opacity: any; }) => props.opacity};
    transition: all .3s ease-in-out;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 20px;
    @media (max-width: 600px) {
        width: 310px;
    }
`

const Block4BlueText = styled.a`
    font-size: 60px;
    font-weight: 600;
    background: linear-gradient(to right, #9DE7EF, #1AA2F8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: -10px;
`

const Block1UndrText = styled.a`
    font-size: 20px;
    color: #B7BDC6;
    @media (max-width: 600px) {
        font-size: 16px;
    }
`


export const Block4 = () => {
    
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
      });

    return (
        <Block ref={ref} 
        margin={inView == true ? '0px' : '30px'} 
        opacity={inView == true ? '1' : '0'}>
            <Block4BlueText>≈1s</Block4BlueText>
            <Block1UndrText>Average transaction finality</Block1UndrText>
        </Block>
    )
}