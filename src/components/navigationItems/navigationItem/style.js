import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Li = styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
    margin-left:auto;
    @media (min-width: 500px) {
        margin: 0;
        display: flex;
        height: 100%;
        width: auto;
        align-items: center;
    }
`

export const NavLinkStyle = styled(NavLink)`
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    color:white;
    &:hover{
        text-shadow: 1px 1px 5px white;

    }
    &.active{
        text-shadow: 1px 1px 10px white;

    }
    @media (min-width: 500px) {
        height: 100%;
        padding: 16px 30px;
        border-buttom: 4px solid transparent;
        width: auto;
        display: block;
        &:hover {
        }
    }
`

export const ProfileText = styled.div`
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    color:white;

    &:hover{
        text-shadow: 1px 1px 5px white;

    }
    &.active{
        text-shadow: 1px 1px 10px white;

    }
    @media (min-width: 500px) {
        height: 100%;
        padding: 16px 30px;
        border-buttom: 4px solid transparent;
        width: auto;
        display: block;
        &:hover {
        }
    }
`

export default { }
