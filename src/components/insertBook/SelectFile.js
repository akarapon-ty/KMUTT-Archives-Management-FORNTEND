import React from 'react'
import { useFormContext } from 'react-hook-form'

import DragAndDrop from './DragAndDrop'
import { DefaultOcrPage, InputPageStart } from './styleDragAndDrop'

const SelectFile = (props) => {
  const { value } = props
  const { startPage } = value

  const { register } = useFormContext()
  return (
    <>
      <h4>1. Select file pdf to OCR</h4>
      <DragAndDrop />
      <DefaultOcrPage>
        <p>Start OCR at page :</p>
        <InputPageStart ref={register} type="number" name="startPage" min="1" defaultValue={startPage} />
      </DefaultOcrPage>
    </>
  )
}

export default SelectFile
