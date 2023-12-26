import styled from "styled-components";

const UpTextBlock = styled.div`
    max-width: 100%;
    margin-top: 60px;
    padding: 0px 30px;
    display: flex;
    flex-direction: row;
    text-align: center;
`

const SecondText = styled.h1`
    font-size: 55px;
    font-weight: 700;
    padding: 20px 15px;
    @media (max-width: 720px) {
        font-size: 45px;
    }
`

const BlueText = styled.a`
    color: #46ACFF;
    font-size: 53px;
    @media (max-width: 720px) {
        font-size: 50px;
    }
    @media (max-width: 720px) {
        font-size: 45px;
    }
`


export const SecondBlockText = () => {
    return(
        <UpTextBlock>
            <SecondText>
            <BlueText>Save</BlueText>, <BlueText>Spend</BlueText> and <BlueText>Stake</BlueText> Like Never Before
            </SecondText>
        </UpTextBlock>
    )
}