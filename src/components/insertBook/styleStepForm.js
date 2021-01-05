import styled from 'styled-components'

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
    border: 1px solid #10A0A2;
`

export const FormInsert = styled.form`
`

export default { }
