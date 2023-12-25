import styled from "styled-components";
import CosmosHub from '../../../assets/svg/CosmosHub.svg'
import CosmosIBC from '../../../assets/svg/CosmosIBC.svg'
import ProtocolLogo from '../../../assets/svg/ProtocolLogo.svg'
import SmartContractLogo from '../../../assets/svg/SmartContractLogo.svg'

const BlockMany = styled.div`
    max-width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    flex-direction: row;
    @media (max-width: 1150px) {
        flex-direction: column;
    }
`

const FirstBlock = styled.div`
    display: flex;
    text-align: center;
    flex-direction: row;
    align-items: center;
    @media (max-width: 510px) {
        flex-direction: column;
    }
`

const SecondBlock = styled.div`
    display: flex;
    text-align: center;
    flex-direction: row;
    align-items: center;
    @media (max-width: 510px) {
        flex-direction: column;
    }
`


const ManyBlock = styled.div`
    width: 260px;
    height: 380px;
    background-color: #E7F2FF;
    margin-bottom: 40px;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 30px;
    @media (max-width: 720px) {
        margin-top: 30px;
        width: 80%;
    }
`

const NameText = styled.h2`
    font-size: 21px;
    padding: 0px 15px;
`

const LogoImg = styled.img`
    margin-top: 30px;
    width: 80px;
    height: 80px;
`

const ManyText = styled.h3`
    font-size: 17px;
    padding: 15px 20px;
`

export const SecondBlockMany = () => {

    let FirstText = <ManyText>Secured by $28+ staked ATOM, Qube, Ledger is the most secured DeFi Hub</ManyText>;
    let SecondText = <ManyText>Trustlessly bridge assets and data from 40+ blockchains. Qube assets are natively supported in the largest blockchain ecosystem</ManyText>;
    let ThirdText = <ManyText>Qube’s stablecoins are ATOM-backed family of price-stable decentralized digital currencies pegged to the world’s major assets</ManyText>;
    let FourthText = <ManyText>Launch dynamic dApps with Qube’s powerful CosmWasm smart contract layer</ManyText>;

    return(
        <BlockMany>
            <FirstBlock>
                <ManyBlock>
                    <LogoImg src={CosmosHub}></LogoImg>
                    <NameText>Secured by Cosmos Hub</NameText>
                    {FirstText}
                </ManyBlock>
                <ManyBlock>
                    <LogoImg src={CosmosIBC}></LogoImg>
                    <NameText>Interoperable with Cosmos IBC</NameText>
                    {SecondText}
                </ManyBlock>
            </FirstBlock>
            <SecondBlock>
                <ManyBlock>
                    <LogoImg src={ProtocolLogo}></LogoImg>
                    <NameText>Algorithmic Stablecoins Protocol</NameText>
                    {ThirdText}
                </ManyBlock>
                <ManyBlock>
                    <LogoImg src={SmartContractLogo}></LogoImg>
                    <NameText>Robust Smart-Contract Platform</NameText>
                    {FourthText}
                </ManyBlock>
            </SecondBlock>
        </BlockMany>
    )
}