import styled from 'styled-components'

export const InputLogin = styled.input`
    width:100%;
    border-radius:4px;
    border:1px solid #e5e5e5;
    padding:10px;
    font-size:16px;
`
export const FormLabel = styled.div`
    font-size:16px;
    font-weight:400;
    color:#10A0A2;
    margin-top:20px;
    margin-bottom:10px;

`

export const LoginButton = styled.button`
    height:48;
    border-radius:4px;
    border:none;
    padding:5px;
    color:white;
    font-size:16px;
    background-color:#10A0A2;
    margin:20px 40%;
    text-decoration: none;
    padding:10px 20px;

`
export const ErrorMessage = styled.div`
    color:red;
    font-size:16px;
    font-weight:300;
    padding:5px;
`

export default { }
