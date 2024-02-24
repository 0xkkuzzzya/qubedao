import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const Block = styled.div <{margin: string, opacity: string}>`
    width: 470px;
    height: 130px;
    background: #1B1B1C;
    margin-top: ${(props: { margin: any; }) => props.margin};
    opacity: ${(props: { opacity: any; }) => props.opacity};
    transition: all .3s ease-in-out;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 500px) {
        width: 290px;
    }
`

const Block2MainText = styled.a`
    font-size: 60px;
    font-weight: 600;
    color: white;
    margin-right: 20px;
    @media (max-width: 500px) {
        font-size: 40px;
    }
`

const Block2BlueText = styled.a`
    font-size: 60px;
    font-weight: 600;
    background: linear-gradient(to right, #5DD5E4, #1AA2F8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 500px) {
        font-size: 40px;
    }
`

const Block2UndrText = styled.a`
    font-size: 20px;
    color: #B7BDC6;
    margin-right: 20px;
`


export const Block2 = () => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
      });

    return (
        <Block ref={ref} 
        margin={inView == true ? '0px' : '30px'} 
        opacity={inView == true ? '1' : '0'}>
            <Block2UndrText>Pay gas fees</Block2UndrText>
            <Block2MainText>In <Block2BlueText>any</Block2BlueText> token</Block2MainText>
        </Block>
    )
}