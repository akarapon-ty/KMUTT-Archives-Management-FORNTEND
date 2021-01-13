import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { gql, useQuery } from '@apollo/client'

import {
  ImageIcon, DivideBox, Content, Topic, Detail, Tag, TagP, Line, Inline, AddButton,
} from './styleStepSeven'
import {
  Space,
} from './styleAll'
import { InputFormat } from './InputField'

const StepSeven = (props) => {
  const {
    value, handlerAddTag, handlerOnChangeTag, handlerRemoveTag, docId, setTagData,
  } = props

  const QUERY_DOCUMENTTAG = gql`
    query document($pk: Int!){
      document(pk: $pk){
        title,
        image,
        status,
        tag{
          tag,
          scoreId
        },
      }
    }
  `

  const { data, loading, error } = useQuery(QUERY_DOCUMENTTAG, { variables: { pk: docId }, onCompleted: ({ document }) => setTagData(document.tag) })

  if (loading) {
    return null
  }

  if (error) {
    window.console.log(error)
    return null
  }

  if (data.document.status !== 5) {
    window.location.replace('/homepage')
  }
  const tagValue = value.length > 0 ? value : null

  return (
    <>
      <h4>7. Edit Tag</h4>
      <DivideBox>
        <ImageIcon src={`data:image/jpeg;base64,${data.document.image}`} />
        <Content>
          <Topic>{data.document.title}</Topic>
          <Detail>Tag / Keyword :</Detail>

          <Inline>

            { tagValue
              ? tagValue.map((key, index) => (
                <Tag key={`key : ${key.tag}`}>
                  <TagP
                    onChange={handlerOnChangeTag}
                    name={key.tag}
                    key={`tag-${key.tag}input`}
                  >
                    {key.tag}
                  </TagP>
                  <CloseIcon key={`tag:${key.tag}del`} onClick={() => handlerRemoveTag(index, key.scoreId)} />
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
