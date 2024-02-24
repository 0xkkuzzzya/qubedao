import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { GrowHeader } from "./GrowHeader/GrowHeader";
import { GrowInfo } from "./GrowInfo/GrowInfo";

const MinterBlock = styled.div <{marginM: string, opacityM: string}>`
    width: 550px;
    height: 350px;
    border-radius: 20px;
    margin-top: ${(props: { marginM: any; }) => props.marginM};
    opacity: ${(props: { opacityM: any; }) => props.opacityM};
    margin-bottom: 30px;
    transition: all .3s ease-in-out;
    background: #1B1B1C;
    @media (max-width: 600px) {
        width: 100%;
        height: 300px;
    }
`

export const Grow = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
      });
    return(
        <MinterBlock ref={ref} 
            marginM={inView == true ? '0px' : '30px'}
            opacityM={inView == true ? '1' : '0'}>
                <GrowHeader></GrowHeader>
                <GrowInfo></GrowInfo>
            </MinterBlock>
    )
}