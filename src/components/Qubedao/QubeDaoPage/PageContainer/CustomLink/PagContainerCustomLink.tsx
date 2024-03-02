import styled from "styled-components";
import { Link, useMatch } from "react-router-dom";
import { ReactNode } from "react";

const LinkText = (Link)
const LinkBLock = styled(LinkText)`
    width: 100%;
    text-decoration: none;
    outline: none;
    text-align: center;
`

interface Props {
    to: string;
    children: ReactNode;
}

export const PagContainerCustomLink = ({children, to}: Props) => {

    const match = useMatch(to)

    return(
        <LinkBLock 
        to={to}
        style={{
            transition: '.2s ease-in-out',
            width: '100%'
        }}
        >
            {children}
        </LinkBLock>
    )
}