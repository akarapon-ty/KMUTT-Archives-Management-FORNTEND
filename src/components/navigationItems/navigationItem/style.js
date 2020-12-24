import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Li = styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;

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
    &:hover,active {
       
    }
    @media (min-width: 500px) {
        height: 100%;
        padding: 16px 10px;
        border-buttom: 4px solid transparent;
        width: auto;
        display: block;
        &:hover {
        }
    }
`

export const Divtest = styled.div``

export default { }
