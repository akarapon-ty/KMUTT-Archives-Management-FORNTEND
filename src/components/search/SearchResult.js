import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { gql, useQuery } from '@apollo/client'

import SearchCard from './searchCard'

import { SearchText, SearchTextFill } from './style'

const SearchResult = ({ searchToken, yearRange }) => {
  const SEARCH_DOCUMENT = gql`
    query searchDocument($searchSet: InputSearch) {
        searchDocument(searchSet: $searchSet){
            foundDocument,
            documentRelevance {
                documentId,
                relevanceScore,
            },
            errorMessage,
        }
    }
    `

  const parserSearchDocument = (token, year) => {
    const search = []
    const contributor = []
    const contributorRole = []
    const creator = []
    const creatorOrganizationName = []
    const publisher = []

    token.forEach((element) => {
      if (element.prefix === null) search.push(element.value)
      else if (element.prefix === 'Creator') search.push(element.value)
      else if (element.prefix === 'Creator Organization Name') search.push(element.value)
      else if (element.prefix === 'Contributor') search.push(element.value)
      else if (element.prefix === 'Contributor Role') search.push(element.value)
      else if (element.prefix === 'Publisher') search.push(element.value)
    })

    return {
      search, contributor, contributorRole, creator, creatorOrganizationName, publisher, year,
    }
  }

  const {
    loading: loadSearchDocument,
    error: errorSearchDocument,
    data: dataSearchDocument,
  } = useQuery(SEARCH_DOCUMENT,
    {
      variables: { searchSet: parserSearchDocument(searchToken, yearRange) },
      skip: searchToken.length === 0,
    })

  if (loadSearchDocument) return null
  if (errorSearchDocument) {
    window.console.error(errorSearchDocument.message)
    return null
  }

  if (!dataSearchDocument) {
    return null
  }

  const handlerOnClickSearchCard = (id) => {
    window.location.href = `/viewbook?id=${id}`
  }

  const { documentRelevance, foundDocument, errorMessage } = dataSearchDocument.searchDocument

  return (
    <>
      <SearchText>
        {foundDocument}
        {' '}
        Results found :
        {' '}
        {/* <SearchTextFill>{input}</SearchTextFill> */}
      </SearchText>
      {documentRelevance.map((element) => <SearchCard key={`keyRelevance : ${element.documentId}`} documentId={element.documentId} onClick={handlerOnClickSearchCard} />)}
    </>
  )
}

SearchResult.defaultProps = {
  searchToken: [],
  yearRange: [],
}

SearchResult.propTypes = {
  searchToken: PropTypes.arrayOf(PropTypes.shape({
    prefix: PropTypes.string,
    value: PropTypes.string,
  })),
  yearRange: PropTypes.arrayOf(PropTypes.number),
}

export default memo(SearchResult)
