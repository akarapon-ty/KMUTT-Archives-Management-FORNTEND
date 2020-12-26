import React from 'react'

import DragAndDrop from './DragAndDrop'
import { DefaultOcrPage, InputPageStart } from './styleDragAndDrop'

const SelectFile = (props) => {
  const { handlerStartPage } = props
  return (
    <>
      <h4>1. Select file pdf to OCR</h4>
      {({ register }) => (
        <>
          <DragAndDrop />
          <DefaultOcrPage>
            <p>Start OCR at page :</p>
            <InputPageStart type="number" ref={register} name="startPage" min="1" defaultValue="1" onChange={(e) => handlerStartPage(e)} />
          </DefaultOcrPage>
        </>
      )}
    </>
  )
}

export default SelectFile
