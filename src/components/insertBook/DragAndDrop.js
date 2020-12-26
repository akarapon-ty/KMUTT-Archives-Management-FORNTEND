import React, { useRef, useEffect, useState } from 'react'
import { DropDiv, MessageDrop } from './styleDragAndDrop'

const DragAndDrop = (props) => {
  const dropRef = useRef(null)

  const { children } = props

  const [dragging, setDragging] = useState(false)

  const handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      console.log('in')
      setDragging(true)
    }
  }
  const handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('out')
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
      // this.props.handleDrop(e.dataTransfer.files)
      console.log('Test')
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

  return (
    <DropDiv ref={dropRef} active={dragging}>
      <MessageDrop>
        Drag and drop to upload
      </MessageDrop>
    </DropDiv>
  )
}

export default DragAndDrop
