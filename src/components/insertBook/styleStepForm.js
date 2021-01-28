import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'

export const StepFormDiv = styled.div`
    margin-top:60px;
    padding: 30px 20px 20px 20px;
    border-radius:4px;
`
export const FormDiv = styled.div`
    width: 100%;
    padding: 15px 0px 0px 0px;
`
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

export const FormInsert = styled.form`
`

export const muiTheme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️

    MuiStepIcon: {
      // Name of the rule
      root: {
        color: '#c4c4c4',
        '&$completed': {
          color: '#10A0A2',
        },
        '&$active': {
          color: '#10A0A2',
        },
      },

    },
  },
})

export default { }
