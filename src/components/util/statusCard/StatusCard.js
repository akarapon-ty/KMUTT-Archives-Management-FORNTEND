import React from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import CircularProgress from '@material-ui/core/CircularProgress'
import { ThemeProvider } from '@material-ui/core/styles'
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined'
import PropTypes from 'prop-types'

import {
  StatusStyle, DivideBox, Image, Content, TitleBook, Line, ConP, BoldText, StatusLoad, ColorProgress, Space,
} from './style'

const StatusCard = (props) => {
  const {
    id, titleBook, publishDate, compileState, handleNextStep, image,
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
        return 'Finish text processed'
      case 4:
        return 'Tag Generating'
      case 5:
        return 'Ready to Edit tag'
      case 6:
        return 'Insert Book Finish'
      default:
        return null
    }
  }
  const newState = parseState(compileState)
  const handleStatus = (status) => {
    switch (status) {
      case 3:
        return <CheckCircleOutlinedIcon style={{ fontSize: 40 }} />
      case 5:
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

  const imageRender = image ? <Image src={`data:image/jpeg;base64,${image}`} /> : null

  return (
    <>
      <StatusStyle state={newState}>
        <DivideBox>
          {imageRender}
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
          newState === 'Finish text processed' ? (
            <BoldText link state={newState} onClick={() => handleNextStep(id, compileState)}>
              Click here to continue
              {' '}
              <ArrowRightAltIcon style={{ marginLeft: 10, fontSize: 21 }} />
            </BoldText>
          ) : null
      }
      {
          newState === 'Ready to Edit tag' ? (
            <BoldText link state={newState} onClick={() => handleNextStep(id, compileState)}>
              Click here to continue edit tag
              {' '}
              <ArrowRightAltIcon style={{ marginLeft: 10, fontSize: 21 }} />
            </BoldText>
          ) : null
      }
      <Space />
    </>

  )
}

export default StatusCard

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
