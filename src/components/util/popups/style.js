import styled from 'styled-components'

export const DeleteButton = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  float:right;
  background-color:${(props) => (props.red ? 'red' : 'white')};
  color: ${(props) => (props.red ? 'white' : '#10A0A2')};;
  text-decoration: none;
  padding:6px 20px 6px 16px;
  border-radius:4px;
  border:none;
  font-size:16px;
  cursor: pointer;
  &:hover{
    opacity:0.5;
  }
`

export const CancelButton = styled.button`
  text-transform: uppercase;
  margin-top:5px;
  float:right;
  background-color:white;
  color: ${(props) => (props.red ? 'red' : '#10A0A2')};
  text-decoration: none;
  padding:10px 20px;
  border-radius:4px;
  border:none;
  font-size:16px;
  cursor: pointer;
  &:hover{
    opacity:0.5;
  }
`
export const ConfirmButton = styled.button`
  text-transform: uppercase;
  margin-top:5px;
  float:right;
  background-color: ${(props) => (props.red ? 'red' : '#10A0A2')};
  color: white;
  text-decoration: none;
  padding:10px 20px;
  border-radius:4px;
  border:none;
  font-size:16px;
  cursor: pointer;
  &:hover{
    opacity:0.5;
  }
`
export const NextButtonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: white;
    font-size: 16px;
    padding:10px 0px;
    color: ${(props) => (props.disabled ? 'white;' : '#10A0A2;')}
    ${(props) => (props.disabled ? null : 'cursor:pointer;')}
    &:hover {
      color: ${(props) => (props.disabled ? 'white;' : '#4DC8C5;')}
      ;
  }
`
export const ModalBackground = styled.div`
    position:fixed;
    left: 0;
    top: 0;
    background-color:rgba(0, 0, 0, 0.5);
    width:100%;
    height:100%;
    z-index:1;
    display: ${(props) => (props.show ? 'flex' : 'none')}; 
    align-items: center; 
    justify-content: center;
`
export const ModalContent = styled.div`
    background-color:white;
    min-width:20em;
    max-width:40em;
    z-index:102;
    padding:20px;
    border-radius:4px
`
export const ModalTopic = styled.div`
    font-size:24px;
    color: #323232;    
    padding:10px 5px 5px 5px;   
    line-height:normal;
`
export const ModalDetail = styled.div`
    font-size:16px;
    color:#000000;
    font-weight:300;
    line-height:normal;
    padding:20px 5px;
`
export default {}
