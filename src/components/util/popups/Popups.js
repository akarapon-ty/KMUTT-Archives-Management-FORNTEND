import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import PropTypes from 'prop-types'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

import {
  DeleteButton, ModalContent, ModalDetail, ModalTopic, ConfirmButton, CancelButton, NextButtonStyle, ModalBackground,
} from './style'

const Popups = (props) => {
  const {
    topic, content, red, confirm,
  } = props
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const { register } = useFormContext()

  return (
    <>
      {red ? (
        <DeleteButton onClick={handleClickOpen} red={red}>
          <DeleteForeverIcon />
          DELETE
        </DeleteButton>
      ) : (
        <NextButtonStyle onClick={handleClickOpen} type="button">
          Next
          <NavigateNextIcon />
        </NextButtonStyle>
      )}
      <ModalBackground open={open} onClick={handleClose}>
        <ModalContent>
          <ModalTopic>
            {topic}
          </ModalTopic>
          <ModalDetail>
            {content}
            <br />
          </ModalDetail>
          {red ? (
            <ConfirmButton onClick={handleClose} red={red}>{confirm}</ConfirmButton>

          ) : (
            <ConfirmButton name="submitNextForm" type="submit" onClick={handleClose}>Yes, delete this document.</ConfirmButton>

          )}
          <CancelButton onClick={handleClose} red={red}>Cancel</CancelButton>
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
