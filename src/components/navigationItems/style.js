import styled from 'styled-components'

export const UlNavigationitems = styled.ul`
    margin: 0px;
    padding: 0px;
    display:-webkit-flex;
    display:flex;
    list-style-type:none;
    padding:0;
    justify-content:flex-end;
    max-height: 56;
    align-items: center;
    height: 100%;

    @media(min-width: 500px){
        margin: 0px;
        padding: 0px;
        list-style: none;
        display: flex;
        align-items: center;
        height: 100%;
    }
`
export const Logo = styled.li`
    padding: 0px;
    max-height: 56;
    margin-right:auto;
    align-items: center;
    height: 100%;
    color:white;
    text-transform: uppercase;
    text-shadow: 1px 1px 10px #10A0A2;
    cursor: pointer;

    @media(min-width: 500px){
        padding: 20px;
        height: 100%;
    }
`
export const DropdownDiv = styled.div`
  top: 56px;
  display: ${(props) => (props.show ? 'block' : 'none')};;
  position: absolute;
  background-color: #FFFFF;
  min-width: 126px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,.2);
  z-index: 200;
  right: 25px;
  border-radius: 5px;
  display: flex;
`

export const Logout = styled.div`
  cursor: pointer;
  color: #10A0A2;
  display: flex;
  align-items: center;
  background-color:white;
  justify-content: center;
  min-width: 126px;
  min-height: 33px;
  z-index: 300;
`

export default { }
