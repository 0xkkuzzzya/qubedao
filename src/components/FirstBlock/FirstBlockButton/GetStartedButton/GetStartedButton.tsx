import styled from "styled-components";

const GetStarted = styled.button`
    width: 200px;
    height: 50px;
    background-color: #46ACFFE5;
    margin-right: 20px;
    border-radius: 30px;
    border: none;
    font-family: 'Metropolis', sans-serif;
    font-weight: 600;
    color: white;
    font-size: 19px;
    outline: none;
    cursor: pointer;
`

export const GetStartedButton = () => {
    return(
        <GetStarted>Get Started</GetStarted>
    )
}