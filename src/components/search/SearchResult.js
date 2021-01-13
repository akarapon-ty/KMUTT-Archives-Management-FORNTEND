import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { gql, useQuery } from '@apollo/client'

import SearchCard from './searchCard'

import { SearchText, SearchTextFill } from './style'

const SearchResult = ({ input }) => {
  const SEARCH_DOCUMENT = gql`
    query searchDocument($fulltext: String!) {
        searchDocument(fulltext: $fulltext){
            foundDocument,
            documentRelevance {
                idDocument,
                relevanceScore
            }
        }
    }
    `

  const { loading: loadSearchDocument, error: errorSearchDocument, data: dataSearchDocument } = useQuery(SEARCH_DOCUMENT, { variables: { fulltext: input }, skip: input === '' })

  if (loadSearchDocument) return null
  if (errorSearchDocument) {
    window.console.error(errorSearchDocument.message)
    return null
  }

  if (!dataSearchDocument) {
    return null
  }

  const handlerOnClickSearchCard = (id) => {
    // send to viewDoc
    window.console.log('docID', id)
  }

  const { documentRelevance, foundDocument } = dataSearchDocument.searchDocument

  return (
    <>
      <SearchText>
        {foundDocument}
        {' '}
        Results found :
        {' '}
        <SearchTextFill>{input}</SearchTextFill>
      </SearchText>
      {documentRelevance.map((element) => <SearchCard key={`keyRelevance : ${element.idDocument}`} documentId={element.idDocument} onClick={handlerOnClickSearchCard} />)}
    </>
  )
}

SearchResult.defaultProps = {
  input: '',
}

SearchResult.propTypes = {
  input: PropTypes.string,
}

export default memo(SearchResult)
