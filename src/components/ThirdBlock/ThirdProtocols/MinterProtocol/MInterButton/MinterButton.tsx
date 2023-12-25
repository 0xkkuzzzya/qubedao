import styled from "styled-components";

const BlockButton = styled.div`
    max-width: 100%;
    display: flex;
`

const ReadMore = styled.button `
    width: 180px;
    height: 50px;
    margin-left: 70px;
    border-radius: 30px;
    border: none;
    background-color: white;
    font-size: 20px;
    font-weight: 600;
    font-family: 'Metropolis', sans-serif;
    color: #00ACFD;
    margin-bottom: 10px;
    cursor: pointer;
    @media (max-width: 600px) {
        margin-left: 20px;
        font-size: 15px;
    }
`

const GoTo = styled.button`
    width: 180px;
    height: 50px;
    margin-left: 30px;
    border-radius: 30px;
    background-color: transparent;
    border: 2px solid white;
    color: white;
    font-size: 20px;
    font-weight: 600;
    font-family: 'Metropolis', sans-serif;
    cursor: pointer;
    @media (max-width: 600px) {
        font-size: 15px;
        margin-right: 20px;
    }
`

export const MinterButton = () => {
    return(
        <BlockButton>
            <ReadMore>Read More</ReadMore>
            <GoTo>Go to minter</GoTo>
        </BlockButton>
    )
}