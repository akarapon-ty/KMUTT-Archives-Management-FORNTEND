import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'

import { SearchResult, SearchFormat } from '../../components/search'
import DefaultLayoutStyle from '../../components/util/LayoutStyle'

export const Search = () => {
  // const [infor, setInfo] = useState([])
  const querySearch = gql`
    query {
      documents {
        statusQuery
        documents {
          id,
          DC_title,
          DC_coverage_temporal,
        }
      }
    }
  `
  const qtest = null

  const { data, loading } = useQuery(querySearch)
  if (loading) {
    return null
  }
  if (!loading) {
    console.log(data)
  }
  return (
    <DefaultLayoutStyle>
      {/* <SearchFormat searchFill="KMUTT" searchTotal={data.length} /> */}
      {/* {data.map((value) => <SearchResult key={value.id} create={value.id} name={value.DC_title} tag={value.DC_coverage_temporal} />)} */}
    </DefaultLayoutStyle>
  )
}

export default { }
