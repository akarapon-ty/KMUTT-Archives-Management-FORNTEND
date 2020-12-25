import styled from 'styled-components'

export const UlNavigationitems = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    max-height: 56;
    align-items: center;
    justify-content: flex-end;
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
