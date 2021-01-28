import styled from 'styled-components'

export const ButtonControlStepDiv = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-between;
    padding: 15px 0px 0px 0px;
`
export const SaveButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    border: none;
    padding:10px 15px;
    border-radius:4px;
    height:40px;

    background-color: #10A0A2;;
    color:white;
    font-size: 16px;
    cursor:pointer;
    &:hover {
      background-color: #4DC8C5;
  }
`

export const ControlStepDiv = styled.div`
    display: ${(props) => (props.show ? 'block' : 'none')};
`

export const LineControlStepDiv = styled.div`
    background-color:#4DC8C5;
    height:1px;
`

export default { }
