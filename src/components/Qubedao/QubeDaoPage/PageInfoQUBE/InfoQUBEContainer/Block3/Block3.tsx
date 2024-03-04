import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const Block = styled.div <{margin: string, opacity: string}>`
    width: 350px;
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
    @media (max-width: 600px) {
        width: 250px;
    }
`

const Block3MainText = styled.a`
    font-size: 60px;
    font-weight: 500;
    margin-top: -10px;
    background: linear-gradient(to right, #7CC1FD, #2D9AFD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 600px) {
        font-size: 50px;
    }
`

const Block3UndrText = styled.a`
    font-size: 18px;
    color: #B7BDC6;
    font-weight: 500;
    @media (max-width: 600px) {
        font-size: 16px;
    }
`


export const Block3 = () => {
    
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
      });

    return (
        <Block ref={ref} 
        margin={inView == true ? '0px' : '30px'} 
        opacity={inView == true ? '1' : '0'}>
            <Block3MainText>$3B+</Block3MainText>
            <Block3UndrText>Assets in economic security</Block3UndrText>
        </Block>
    )
}