import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'

import { gql, useQuery } from '@apollo/client'

import SearchCard from './searchCard'

import { SearchText } from './style'

import RoundedMatUI from '../util/pagePagination/RoundedMatUI'

const SearchResult = ({ searchToken, yearRange }) => {
  const [pageState, setPageState] = useState(1)

  const SEARCH_DOCUMENT = gql`
    query searchDocument($searchSet: InputSearch!, $page: Int!) {
        searchDocument(searchSet: $searchSet, page: $page){
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
      else if (element.prefix === 'Creator') creator.push(element.value)
      else if (element.prefix === 'Creator Organization Name') creatorOrganizationName.push(element.value)
      else if (element.prefix === 'Contributor') contributor.push(element.value)
      else if (element.prefix === 'Contributor Role') contributorRole.push(element.value)
      else if (element.prefix === 'Publisher') publisher.push(element.value)
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
      variables: { searchSet: parserSearchDocument(searchToken, yearRange), page: pageState },
    //   skip: searchToken.length === 0,
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

  const { documentRelevance, foundDocument, totalPage } = dataSearchDocument.searchDocument

  const handlerPrefixSearchResult = (lenghtOfDocument) => {
    if (lenghtOfDocument === 0) return 'Not Found'
    if (lenghtOfDocument === 1) return `${lenghtOfDocument} Result found :`
    return `${lenghtOfDocument} Results found :`
  }

  const handlerOnPageChange = (event, value) => {
    setPageState(value)
  }

  return (
    <>
      <SearchText>
        {handlerPrefixSearchResult(foundDocument)}
        {' '}
        {/* <SearchTextFill>{input}</SearchTextFill> */}
      </SearchText>
      {documentRelevance.map((element) => <SearchCard key={`keyRelevance : ${element.documentId}`} documentId={element.documentId} onClick={handlerOnClickSearchCard} />)}
      <RoundedMatUI page={pageState} setPage={handlerOnPageChange} totalPage={totalPage} />
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
  yearRange: PropTypes.arrayOf(PropTypes.string),
}

export default memo(SearchResult)
