import React from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import CircularProgress from '@material-ui/core/CircularProgress'
import { ThemeProvider } from '@material-ui/core/styles'
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import {
  StatusStyle, DivideBox, Image, Content, TitleBook, Line, ConP, BoldText, StatusLoad, ColorProgress, Space,
} from './style'

const StatusCard = (props) => {
  const {
    id, titleBook, publishDate, compileState,
  } = props

  const parseState = (state) => {
    switch (state) {
      case 0:
        return 'In queue'
      case 1:
        return 'OCR'
      case 2:
        return 'Text processing'
      case 3:
        return 'Finish'
      default:
        return null
    }
  }
  const newState = parseState(compileState)
  const handleStatus = (status) => {
    switch (status) {
      case 3:
        return <CheckCircleOutlinedIcon style={{ fontSize: 40 }} />
      case 0:
        return null
      default:
        return (
          <ThemeProvider theme={ColorProgress}>
            <CircularProgress />
          </ThemeProvider>
        )
    }
  }

  const handleNextStep = (clickId) => {
    props.history.push({ pathname: '/insertbook', search: `?step=4&id=${clickId}` })
  }
  return (
    <>
      <StatusStyle state={newState}>
        <DivideBox>
          <Image />
          <Content>
            <TitleBook>{titleBook}</TitleBook>
            <Line />
            <ConP>
              Publish Date :
              {' '}
              {publishDate}
            </ConP>
            <BoldText state={newState}>
              Status :
              {' '}
              {parseState(compileState)}
            </BoldText>
          </Content>
          <StatusLoad>
            {handleStatus(compileState)}
          </StatusLoad>
        </DivideBox>
      </StatusStyle>
      {
          newState === 'Finish' ? (
            <BoldText link state={newState} onClick={() => handleNextStep(id)}>
              Click here to continue
              {' '}
              <ArrowRightAltIcon style={{ marginLeft: 10, fontSize: 21 }} />
            </BoldText>
          ) : null
      }
      <Space />
    </>

  )
}

export default withRouter(StatusCard)

StatusCard.defaultProps = {
  compileState: 0,
  publishDate: 'xx/xx/xxxx',
  titleBook: 'Title Book Default',
  id: 0,
}

StatusCard.propTypes = {
  compileState: PropTypes.number,
  publishDate: PropTypes.string,
  titleBook: PropTypes.string,
  id: PropTypes.number,

}
