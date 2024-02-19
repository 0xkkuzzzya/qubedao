import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { ReactNode } from "react";

const LinkText = (Link)
const LinkBLock = styled(LinkText)`
    max-width: 100%;
    margin-left: 60px;
    @media (max-width: 500px){
        margin-left: 30px;
    }
`

interface Props {
    to: string;
    children: ReactNode;
}

export const LogoLink = ({children, to}: Props) => {

    const match = useMatch(to)

    return(
        <LinkBLock 
        to={to}

        >
            {children}
        </LinkBLock>
    )
}