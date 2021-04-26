import React, { useRef, useEffect, useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf'

import {
  DropDiv, MessageDrop, InputUpload, ImgTrash, ImgPdf,
} from './css/styleDragAndDrop'

const DragAndDrop = (props) => {
  const dropRef = useRef(null)

  const { handleUploadFile, handlerDeleteUploadFile, file } = props

  const [dragging, setDragging] = useState(false)

  const handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true)
    }
  }
  const handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
  }
  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDrop = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleUploadFile(e.dataTransfer.files[0])
      e.dataTransfer.clearData()
      setDragging(false)
    }
  }

  useEffect(() => {
    const DivDragAndDrop = dropRef.current
    DivDragAndDrop.addEventListener('dragenter', handleDragIn)
    DivDragAndDrop.addEventListener('dragleave', handleDragOut)
    DivDragAndDrop.addEventListener('dragover', handleDrag)
    DivDragAndDrop.addEventListener('drop', handleDrop)
    return () => {

    }
  }, [])

  let message = (
    <MessageDrop>
      <AddCircleIcon style={{ marginRight: 10 }} />
      Drag and drop or click here to upload
    </MessageDrop>
  )
  if (file) {
    message = (
      <>
        <ImgPdf>
          <PictureAsPdfIcon />
        </ImgPdf>
        <MessageDrop file>{file.name}</MessageDrop>
        <ImgTrash onClick={() => handlerDeleteUploadFile()}>
          <CloseIcon />
        </ImgTrash>
      </>
    )
  }

  return (
    <DropDiv ref={dropRef} active={dragging}>
      {message}
      <InputUpload type="file" accept="application/pdf" onChange={(e) => handleUploadFile(e.target.files[0])} />
    </DropDiv>
  )
}

export default DragAndDrop
