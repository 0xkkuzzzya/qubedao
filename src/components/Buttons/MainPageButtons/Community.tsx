import styled from "styled-components";

const Button = styled.div`
    width: 200px;
    height: 50px;
    background: transparent;
    border: 2px solid #fff;
    outline: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`

const ButtonText = styled.a`
    font-weight: 600;
    font-size: 20px;
    color: #fff;
`


export const CommunityButton = () => {
    return(
        <Button>
            <ButtonText>Community</ButtonText>
        </Button>
    )
}