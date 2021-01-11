import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'

export const StepFormDiv = styled.div`
    padding: 30px 20px 20px 20px;
    border-radius:4px;
    background-color:white;
`
export const FormDiv = styled.div`
    width: 100%;
    padding: 15px 0px 0px 0px;
`
export const ButtonControlStepDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 0px 0px 0px;
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
