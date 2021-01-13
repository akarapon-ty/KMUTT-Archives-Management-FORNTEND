import React from 'react'
import { useFormContext } from 'react-hook-form'

const Test = (props) => {
  const {
    value, handlerOnChangeRelation, handlerAddRelation, handlerRemoveRelation,
  } = props

  const { relation } = value
  const valueTest = Object.keys(relation).length > 0 ? relation : { 1: '' }
  const { register } = useFormContext()

  /*
  const queryMultiple = () => {
    const res1 = useQuery(QUERY_CORRECTNESSPAGE,
      {
        variables: { pageId: pageNumber, documentId: docId },
        onCompleted: ({ keywordInPage }) => handlerSetTerm(keywordInPage.PreTerms, keywordInPage.pageId),
        skip: pageNumber === 0,
      })
    const res2 = useQuery(QUERY_AMOUNTPAGE,
      {
        variables: { documentId: docId },
        onCompleted: ({ amountPage }) => handlerSetLimitPage(amountPage.firstPage, amountPage.lastpage),
        skip: pageNumber !== 0,
      })
    return [res1, res2]
  }

  const [
    { loading: amountPageLoading, error },
    { loading: imageLoading, data: dataImagePage, error: imageError },
  ] = queryMultiple()
  */

  return (
    <>
      <div>
        {Object.keys(valueTest).map((key) => (
          <>
            <input
              ref={register}
              onChange={(e) => handlerOnChangeRelation(e)}
              defaultValue={valueTest[key]}
              name={key}
              key={key}
              placeholder="relation"
            />
            <button key={`${key}button`} value={key} onClick={(e) => handlerRemoveRelation(e)} type="button"> remove</button>
          </>
        ))}
      </div>
      <button type="button" name="addRelation" onClick={() => handlerAddRelation()}>add</button>
    </>
  )
}

export default Test
