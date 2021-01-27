import styled from 'styled-components'

export const ResultStyle = styled.div`
  height: 170px;
  font-size: 16px;
  line-height: 13px;
  margin:auto;
  margin-bottom:20px;
  cursor: pointer;
`

export const DivideBox = styled.div`
  display: flex;
  align-items: stretch;
  background-color: #ffffff;
`

export const Image = styled.img`
  width:124px;
  height:170px;
`

export const Content = styled.div`
  margin-left:20px;
  width:100%
`

export const TitleBook = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-top:15px;
  color: #10A0A2;
`
export const Line = styled.div`
  width:100%;
  height:1px;
  margin-top:15px;
  background-color:#E5E5E5;
`
export const ConP = styled.div`
  margin-top:15px;
`

export const TagBook = styled.div`
  margin-top: 15px;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  flex-wrap: wrap;
`

export const Tag = styled.div`
  border-style: solid;
  border-color: #10A0A2;
  border-radius: 14px;
  border-width: thin;
  color: #10A0A2;
  padding-top:4px;
  padding-bottom:3px;
  padding-left:10px;
  padding-right:10px;
  margin-right:5px;
  margin-left:5px;
  margin-top:5px;
  text-align: center;
  font-size: 12px;
`
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
export const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url(${(props) => props.bg});
`

export const SearchText = styled.div`
  font-weight:500;
  font-size:16px;
  margin-bottom:30px;
  margin-top:30px;

`

export const SearchTextFill = styled.div`
  display:inline;
  font-weight:500;
  font-size:16px;
  color: #10A0A2;
`

export const DeleteButton = styled.button`
  float:right;
  background-color:red;
  color: white;
  text-decoration: none;
  padding:10px 20px;
  height:48;
  border-radius:4px;
  border:none;
  font-size:16px;
  cursor: pointer;
`
export const ManageButton = styled.button`
  margin-top:5px;
  float:right;
  background-color:white;
  color: #10A0A2;
  text-decoration: none;
  padding:10px 20px;
  height:48;
  border-radius:4px;
  border:none;
  font-size:16px;
  cursor: pointer;

`
export default { }
