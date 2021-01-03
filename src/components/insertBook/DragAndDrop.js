import React, { useRef, useEffect, useState } from 'react'

import {
  DropDiv, MessageDrop, InputUpload, ImgTrash, ImgPdf,
} from './styleDragAndDrop'
import trashIcon from '../../assets/icon/trash-icon.png'
import pdfIcon from '../../assets/icon/pdf.png'

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

  let message = <MessageDrop>Drag and drop or click here to upload</MessageDrop>
  if (file) {
    message = (
      <>
        <ImgPdf
          src={pdfIcon}
          className="img"
          alt="trashIcon"
        />
        <MessageDrop>{file.name}</MessageDrop>
        <ImgTrash
          src={trashIcon}
          className="img"
          alt="trashIcon"
          onClick={() => handlerDeleteUploadFile()}
        />
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
