import styled from 'styled-components'

export const DropDiv = styled.div`
    padding: 10px 0px 0px 0px;
    height: 185px;
    display: flex;
    justify-content: center;
    width: 100%;
    border: ${(props) => (props.active ? 'dashed #10A0A2 2px;' : '2px solid #10A0A2')};
    background-color: ${(props) => (props.active ? 'rgba(255,255,255,.8)' : 'white')};
`

export const MessageDrop = styled.div`
    display: flex;
    align-items: center;
`

export const DefaultOcrPage = styled.div`
    display: flex;
    justify-content: center;
`
export const InputPageStart = styled.input`
    max-height: 52px;
    padding: 0px;
    margin: 16px;
    max-width: 64px;
    text-align: center;
`

export default { }
