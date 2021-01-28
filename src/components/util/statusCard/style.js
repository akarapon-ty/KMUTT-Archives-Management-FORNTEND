import styled from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'

export const StatusStyle = styled.div`
    font-size: 16px;
    line-height: 13px;
    margin: auto;
    border-radius: 8px;
    background-color:white;
    padding:20px;
    ${(props) => (props.state === 'In queue' ? 'border: solid #c4c4c4 1px;' : 'border: solid #10A0A2 1px;')};
    ${(props) => (props.state === 'Finish' ? 'border: solid #10A0A2 1px;' : null)};
`

export const DivideBox = styled.div`
    display: flex;
    align-items: stretch;
    background-color: #ffffff;
`

export const Image = styled.img`
    width:130px;
    height:145px;
`
export const StatusLoad = styled.div`
    display: flex;
    justify-content:center;
    width:100px;
    color:#10A0A2;
    align-items: center;
`
export const Content = styled.div`
    margin-left:20px;
    width:100%
`

export const TitleBook = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin-top:15px;
`
export const Line = styled.div`
    width:100%;
    height:1px;
    margin-top:15px;
    background-color:#E5E5E5;
`
export const ConP = styled.div`
    margin-top:15px;    
`
export const BoldText = styled.div`
    font-weight:500;
    ${(props) => (props.state === 'In queue' ? null : 'color:#4DC8C5')};
    ${(props) => (props.state === 'Finish' ? 'color:#10A0A2' : null)};

    display: flex;
    flex-flow: row wrap;
    height:24px;
    ${(props) => (props.link ? 'justify-content: flex-end; font-size:14px; text-transform: uppercase; margin-top:10px; cursor: pointer;' : 'font-size:16px; margin-top:15px;')}
    &:hover{
        ${(props) => (props.link ? 'color:#4DC8C5;' : null)}
    }
`
export const Space = styled.div`
    height:20px;
`
export const ColorProgress = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️

    MuiCircularProgress: {
      // Name of the rule
      colorPrimary: {
        color: '#10A0A2',
      },
    },
  },
})

export default {}
