import styled from "styled-components";

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    @media (max-width: 500px) {
        width: 100%;
    }
`

const BlockPosition = styled.div`
    width: 100%;
    display: flex;
    margin-top: 30px;
`

const Block1 = styled.div`
    width: 300px;
    height: 130px;
    background: #1B1B1C;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    @media (max-width: 500px) {
        width: 200px;
    }
`

const Block1MainText = styled.a`
    font-size: 65px;
    font-weight: 600;
    margin-top: -10px;
    background: linear-gradient(to right, #7CC1FD, #2D9AFD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 500px) {
        font-size: 50px;
    }
`

const Block1UndrText = styled.a`
    font-size: 20px;
    color: #B7BDC6;
    @media (max-width: 500px) {
        font-size: 16px;
    }
`

const Block2 = styled.div`
    width: 470px;
    height: 130px;
    background: #1B1B1C;
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

const Block3 = styled.div`
    width: 350px;
    height: 130px;
    background: #1B1B1C;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;
    @media (max-width: 500px) {
        width: 250px;
    }
`

const Block3MainText = styled.a`
    font-size: 60px;
    font-weight: 600;
    margin-top: -10px;
    background: linear-gradient(to right, #7CC1FD, #2D9AFD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 500px) {
        font-size: 50px;
    }
`

const Block3UndrText = styled.a`
    font-size: 18px;
    color: #B7BDC6;
    @media (max-width: 500px) {
        font-size: 16px;
    }
`

const Block4 = styled.div`
    width: 400px;
    height: 130px;
    background: #1B1B1C;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding-right: 20px;
    @media (max-width: 500px) {
        width: 310px;
    }
`

const Block4BlueText = styled.a`
    font-size: 60px;
    font-weight: 600;
    background: linear-gradient(to right, #9DE7EF, #1AA2F8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: -10px;
`




export const InfoQUBEContainer = () => {

    let Block1Text = '<0.05$'

    return(
        <Container>
            <BlockPosition style={{justifyContent: "flex-start"}}>
                <Block1>
                    <Block1MainText>{Block1Text}</Block1MainText>
                    <Block1UndrText>Average transaction fee</Block1UndrText>
                </Block1>
            </BlockPosition>
            <BlockPosition style={{justifyContent: "flex-end"}}>
                <Block2>
                    <Block2UndrText>Pay gas fees</Block2UndrText>
                    <Block2MainText>In <Block2BlueText>any</Block2BlueText> token</Block2MainText>
                </Block2>
            </BlockPosition>
            <BlockPosition style={{justifyContent: "flex-start"}}>
                <Block3>
                    <Block3MainText>$2.5B+</Block3MainText>
                    <Block3UndrText>Assets in economic security</Block3UndrText>
                </Block3>
            </BlockPosition>
            <BlockPosition style={{justifyContent: "flex-end"}}>
                <Block4>
                    <Block4BlueText>≈1s</Block4BlueText>
                    <Block1UndrText>Average transaction finality</Block1UndrText>
                </Block4>
            </BlockPosition>
        </Container>
    )
}