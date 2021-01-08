import styled from 'styled-components'

export const ImageIcon = styled.div`
    width:140px;
    height:190px;
    background-color: red;
    position:static;
`
export const Topic = styled.div`
    font-size:24px;
    font-weight:500;
    color:#10A0A2;
`
export const Content = styled.div`
    padding:0px 20px;
    width:75%;
`
export const Detail = styled.div`
    padding-top:10px;
    font-size:20px;

`
export const Tag = styled.div`
    margin:15px 10px 0px 0px;
    display: flex;
    padding:6px 10px;
    color:#10A0A2;
    border:solid 1px #10A0A2;
    border-radius:20px;
    cursor:pointer;
    &:hover {
        color:white;
        background-color:#10A0A2;
    }

`

export const Inline = styled.div`
    ${(props) => (props.long ? 'width:100%;' : null)}
    display: inline-flex;
    align-items:  flex-start; 
    flex-wrap: wrap;
    

`

export const TagP = styled.div`
    word-wrap: break-word;
    padding:0px 5px;

    
`

export const AddButton = styled.div`
    color:#10A0A2;
    border-radius:4px;
    padding:5px 8px;
    float:right;
    cursor:pointer;
    width:50px;
    height:30px;
    &:hover {
        color:white;
        background-color:#10A0A2;
    }
`
export const DivideBox = styled.div`
    display: flex;
    align-items: stretch;
    background-color: #ffffff;
`
export const Line = styled.div`
    width:100%;
    height:1px;
    margin-top:15px;
    background-color:#E5E5E5;
`
export default { }
