import React from 'react'
import CloseIcon from '@material-ui/icons/Close'
import { gql, useQuery } from '@apollo/client'

import {
  ImageIcon, DivideBox, Content, Topic, Detail, Tag, TagP, Line, Inline, AddButton,
} from './css/styleStepSeven'
import {
  Space,
} from './css/styleAll'
import { InputFormat } from './InputField'

const StepSeven = (props) => {
  const {
    value, handlerAddTag, handlerRemoveTag, docId, setTagData,
  } = props

  const QUERY_DOCUMENT = gql`
    query document($pk: Int!){
      document(pk: $pk){
        document{
          title,
          image,
          status,
        }
      }
    }
  `

  const QUERY_GENERATETAG = gql`
    query generateTagForAdd($documentId: Int!, $limit: Int){
      generateTagForAdd(documentId: $documentId, limit: $limit)
    }
  `

  const queryMultiple = () => {
    const resultDoc = useQuery(QUERY_DOCUMENT,
      {
        variables: { pk: docId },
      })
    const resultTag = useQuery(QUERY_GENERATETAG,
      {
        variables: { documentId: docId, limit: 10 },
        onCompleted: ({ generateTagForAdd }) => setTagData(generateTagForAdd),
      })
    return [resultDoc, resultTag]
  }

  const [{ data: documentData, loading: documentLoading, error: documentError }, { loading: tagLoading, error: tagError }] = queryMultiple()

  if (documentLoading || tagLoading) {
    return null
  }

  if (documentError) {
    window.console.log('doc', documentError)
    return null
  }

  if (tagError) {
    window.console.log('tag', tagError)
    return null
  }

  const { document } = documentData.document
  const { image, title } = document

  return (
    <>
      <h4>7. Edit Tag</h4>
      <DivideBox>
        <ImageIcon src={`data:image/jpeg;base64,${image}`} />
        <Content>
          <Topic>{title}</Topic>
          <Detail>Tag / Keyword :</Detail>
          <Inline>
            { value
              ? value.map((key, index) => (
                <Tag key={`key : ${key}`}>
                  <TagP
                    name={key}
                    key={`tag-${key}input`}
                  >
                    {key}
                  </TagP>
                  <CloseIcon onClick={() => handlerRemoveTag(index, key)} />
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
