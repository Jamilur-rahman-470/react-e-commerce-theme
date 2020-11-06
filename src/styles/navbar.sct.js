import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 10vh;
    background: #fff;
`

export const Brand = styled.a`
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 900;
    &:hover{
        color: #019779;
    }
`

export const Links = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    li{
        margin: 0 8px;
        a{
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 2px;
            font-weight: 900;
        }
    }
`

export const Links2 = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    li{
        margin: 0 8px;
        a{
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 2px;
            font-weight: 900;
            color: #019779;
        }
    }
`

export const Badge = styled.div`
    padding: 4px 6px;
    background: #019779;
    color: #fff;
    font-size: 12px;
    font-weight: 900;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

