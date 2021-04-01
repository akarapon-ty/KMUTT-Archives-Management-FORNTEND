import styled from 'styled-components'

export const InputField = styled.input`
    ${(props) => (props.numb ? 'width:7%;' : null)}
    ${(props) => (props.shorts ? 'width:80%;' : null)}
    ${(props) => (props.type ? null : 'width:97.7%;')}
    ${(props) => (props.multi ? 'width:90%;' : null)}
    border-radius:4px;
    border:1px solid #e5e5e5;
    padding:10px;
    font-size:16px;
    margin-bottom:10px;

`
export const InputArea = styled.textarea`
    width:97.7%;
    border-radius:4px;
    border:1px solid #e5e5e5;
    padding:10px;
    font-size:16px;
    resize: none;
    margin-bottom:10px;

`
export const InputLabel = styled.div`
    font-size:16px;
    font-weight:400;
    color:#10A0A2;
    margin-bottom:10px;
`
export const InputSelector = styled.select`
    border-radius:4px;
    border:1px solid #e5e5e5;
    padding:10px;
    font-size:16px;
    margin-right:10px;
`
export const Space = styled.div`
    height:20px;
`
export const Inline = styled.div`
    ${(props) => (props.long ? 'width:100%;' : null)}
    display: inline-flex;
    align-items: center;

`
export const InsertButton = styled.button`
    border:none;
    color:#10A0A2;
    background-color:white;
    text-decoration: none;
    font-weight:700;
    cursor:pointer;
    &:hover{
        color:#4DC8C5;
    }
`

export const LeftRightBox = styled.div`
    display: flex;
    justify-content: space-between;
`

export default { }
