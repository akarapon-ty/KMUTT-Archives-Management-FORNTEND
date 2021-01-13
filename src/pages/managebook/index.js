import React from 'react'
import { useQuery, gql } from '@apollo/client'

import { SearchResult, SearchFormat } from '../../components/search'
import DefaultLayoutStyle from '../../components/util/LayoutStyle'

export const Search = () => {
  const querySearch = gql`
    query {
      documents {
        statusQuery
        documents {
          id,
          title,
          coverageTemporal,
          creator,
        }
      }
    }
  `

  const { data, loading } = useQuery(querySearch)
  if (loading) {
    return null
  }

  return (
    <DefaultLayoutStyle>
      <SearchFormat searchFill="KMUTT" searchTotal={data.documents.documents.length} manage active={data.documents ? null : true} />
      { data.documents ? data.documents.documents.map((value) => <SearchResult key={value.id} title={value.title} creator={value.creator} coverageTemporal={value.coverageTemporal} tag={[]} manage />) : null}
    </DefaultLayoutStyle>
  )
}

export default Search
