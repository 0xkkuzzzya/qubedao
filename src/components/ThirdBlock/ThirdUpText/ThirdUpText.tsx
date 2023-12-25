import styled from "styled-components";

const ThirdText = styled.div`
    max-width: 100%;
    margin-top: 150px;
    display: flex;
    text-align: center;
    justify-content: center;
    flex-direction: column;
`

const UpText = styled.h2`
    font-size: 60px;
`

export const ThirdUpText = () => {
    return(
        <ThirdText>
            <UpText>Dive into the Qube ecosystem</UpText>
        </ThirdText>
    )
}