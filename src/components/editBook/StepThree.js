import React from 'react'
import CloseIcon from '@material-ui/icons/Close'

import {
  ImageIcon, DivideBox, Content, Topic, Detail, Tag, TagP, Line, Inline, AddButton,
} from '../insertBook/styleStepSeven'
import {
  Space,
} from '../insertBook/styleAll'
import { InputFormat } from '../insertBook/InputField'

const StepThree = (props) => {
  const {
    value, handlerAddTag, handlerRemoveTag,
  } = props

  const { image, tag, title } = value

  return (
    <>
      <DivideBox>
        <ImageIcon src={`data:image/jpeg;base64,${image}`} />
        <Content>
          <Topic>{title}</Topic>
          <Detail>Tag / Keyword :</Detail>
          <Inline>
            {value
              ? (tag).map((key, index) => (
                <Tag key={`key : ${key}`}>
                  <TagP
                    name={key}
                    key={`tag-${key}input`}
                  >
                    {key}
                  </TagP>
                  <CloseIcon key={`tag:${key}del`} onClick={() => handlerRemoveTag(index)} />
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

export default StepThree
