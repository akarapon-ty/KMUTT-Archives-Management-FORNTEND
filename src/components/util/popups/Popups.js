import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

import {
  DeleteButton, ModalContent, ModalDetail, ModalTopic, ConfirmButton, CancelButton, NextButtonStyle, ModalBackground,
} from './style'
import Backdrop from '../backdrop/BackDrop'

const Popups = (props) => {
  const {
    topic, content, red, confirm, handlerDeleteOnClick,
  } = props
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClickClose = () => {
    setOpen(false)
  }

  return (
    <>
      {red ? (
        <DeleteButton onClick={() => handlerDeleteOnClick()} red={red}>
          <DeleteForeverIcon />
          DELETE
        </DeleteButton>
      ) : (
        <NextButtonStyle onClick={() => handleClickOpen()} type="button">
          Next
          <NavigateNextIcon />
        </NextButtonStyle>
      )}
      <ModalBackground show={open}>
        <Backdrop show={open} clicked={handleClickClose} />
        <ModalContent>
          <ModalTopic>
            {topic}
          </ModalTopic>
          <ModalDetail>
            {content}
            <br />
          </ModalDetail>
          {red ? (
            <ConfirmButton onClick={() => handleClickClose()} red={red}>{confirm}</ConfirmButton>
          ) : (
            <ConfirmButton name="submitNextForm" type="submit" onClick={() => handleClickClose()}>Yes, delete this document.</ConfirmButton>
          )}
          <CancelButton onClick={() => handleClickClose()} red={red}>Cancel</CancelButton>
        </ModalContent>
      </ModalBackground>
    </>
  )
}

Popups.defaultProps = {
  topic: 'default topic',
  content: 'default content',
  confirm: 'default confirm',
  red: null,
}

Popups.propTypes = {
  topic: PropTypes.string,
  content: PropTypes.string,
  confirm: PropTypes.string,
  red: PropTypes.bool,
}

export default Popups
