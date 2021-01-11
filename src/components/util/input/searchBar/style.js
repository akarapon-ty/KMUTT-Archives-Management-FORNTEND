import styled from 'styled-components'

export const SearchInputStyle = styled.input`
  width:93%;
  padding:15px;
  padding-left:50px;
  border-radius: 4px;
  border: none;
  box-shadow: 1px 1px 5px #c3c3c3;
  background-image: url(${(props) => props.bg});
  background-position: 2% 50%; 
  background-repeat: no-repeat;
  margin-bottom:20px;
  margin-top:20px;

  &:focus {
    border: NONE;
  }
`

export default {}
