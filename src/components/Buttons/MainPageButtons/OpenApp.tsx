import styled from "styled-components";

const Button = styled.div`
    width: 200px;
    height: 50px;
    background: linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255));
    border: none;
    outline: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`

const ButtonText = styled.a`
    font-weight: 600;
    font-size: 20px;
    color: #151516;
`


export const OpenAppButton = () => {
    return(
        <Button>
            <ButtonText>Open App</ButtonText>
        </Button>
    )
}