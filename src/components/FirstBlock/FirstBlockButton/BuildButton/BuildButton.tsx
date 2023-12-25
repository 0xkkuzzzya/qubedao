import styled from "styled-components";

const Build = styled.button`
    width: 200px;
    height: 50px;
    background-color: transparent;
    margin-left: 20px;
    border-radius: 30px;
    border: 2px solid #46ACFF;
    font-family: 'Metropolis', sans-serif;
    font-weight: 600;
    color: #00ACFD;
    font-size: 19px;
    outline: none;
    cursor: pointer;
`

export const BuildButton = () => {
    return(
        <Build>Build on Qube</Build>
    )
}