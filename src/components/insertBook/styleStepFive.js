import styled from 'styled-components'

export const ContainerPicture = styled.div`
    height: 595px;
    overflow-y: auto;
`

export const ImagePage = styled.img`
    width: 100%;
`

export const ContainerOptions = styled.div`
    border-top:solid 1px #10A0A2;
    border-bottom:solid 1px #10A0A2;
    display: flex;
    justify-content: flex-end;
    padding:15px 5px;;
`

export const PageButton = styled.button`
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

export const ContainerWord = styled.div`
    background-color: #F3FBFB;
    height: 372px;
    overflow-y: auto;
    display: inline-flex;
    align-items:  flex-start; 
    flex-wrap: wrap;
    width:100%;
`

export const InputTermDiv = styled.div`
    display: flex;
    font:18px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:white;
    height:60px;
    margin:10px 10px;
    padding:5px 10px;
    border-radius:4px;
`

export const LabelTermDiv = styled.div`
    
`

export const ControlPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LineBetweenLableAndInput = styled.div`
    background-color:#10A0A2;
    height:1px;
    margin:5px 0px;
    width:100%
`

export const InputTermStyle = styled.input`
    margin:0;
    border:none;
    width:100%;
    text-align: center; 

`

export const LabelTerm = styled.div`
    color:#10A0A2;
    font-weight:500;

`
export const LabelPage = styled.div`
    color:#10A0A2;

`
export const InputPage = styled.input`
    width: 37px;
    height: 28px;
    text-align: center;
    margin: 15px 5px;
    border: solid 1px #4DC8C5;
`

export default { }
