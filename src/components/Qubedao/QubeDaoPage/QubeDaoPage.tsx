import styled from "styled-components";
import { PageHeader } from "./PageHeader/PageHeader";
import { PageContainer } from "./PageContainer/PageContainer";
import { Footer } from "./Footer/Footer";
import { PageInfoQUBE } from "./PageInfoQUBE/PageInfoQUBE";
import { FooterLink } from "./Footer/FooterLink/FooterLink";

const PageBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin: auto;
    @media (max-width: 1000px) {
        margin-top: 100px;
    }
    @media (max-width: 600px) {
        width: 90%;
    }
`


export const QubeDaoPage = () => {
    return(
        <PageBlock>
            <PageHeader/>
            <PageContainer/>
            <PageInfoQUBE/>
            <Footer/>
        </PageBlock>
    )
}