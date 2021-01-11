import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

import {
  ImageIcon, DivideBox, Content, Topic, Detail, Tag, TagP, Line, Inline, AddButton,
} from './styleStepSeven'
import {
  Space,
} from './styleAll'
import { InputFormat } from './InputField'

const StepSeven = (props) => {
  const {
    value, handlerAddTag, handlerOnChangeTag, handlerRemoveTag,
  } = props
  const tagMockups = value
  const tagValue = Object.keys(tagMockups).length > 0 ? tagMockups : null

  return (
    <>
      <h4>6. Edit Tag</h4>
      <DivideBox>
        <ImageIcon />
        <Content>
          <Topic>Titlebook</Topic>
          <Detail>Tag / Keyword :</Detail>

          <Inline>

            { tagValue
              ? Object.keys(tagValue).map((key) => (
                <Tag key={`key : ${key}`}>
                  <TagP
                    onChange={handlerOnChangeTag}
                    name={key}
                    key={`tag-${key}input`}
                  >
                    {tagValue[key]}
                  </TagP>
                  <CloseIcon key={`tag:${key}del`} onClick={() => handlerRemoveTag(key)} />
                </Tag>
              )) : null}

          </Inline>
          <Space />
          <Line />
          <Detail>Add keyword to the book</Detail>
          <Content>
            <InputFormat inputName="Tag / Keyword" inputLabel="Tag / Keyword" short types="Hello" />
            <AddButton onClick={() => handlerAddTag()} type="button"> + ADD</AddButton>
          </Content>
          <Space />

        </Content>

      </DivideBox>

    </>
  )
}

export default StepSeven
