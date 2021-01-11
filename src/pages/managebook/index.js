// import React from 'react'
// import { useQuery, gql } from '@apollo/client'

// import { SearchCard, SearchFormat } from '../../components/search'
// import DefaultLayoutStyle from '../../components/util/LayoutStyle'

// export const Search = () => {
//   const querySearch = gql`
//     query {
//       documents {
//         statusQuery
//         documents {
//           id,
//           DC_title,
//           DC_coverage_temporal,
//           creator,
//         }
//       }
//     }
//   `

//   const { data, loading } = useQuery(querySearch)
//   if (loading) {
//     return null
//   }

//   return (
//     <DefaultLayoutStyle>
//       <SearchFormat searchFill="KMUTT" searchTotal={data.documents.documents.length} manage active={data.documents ? null : true} />
//       { data.documents ? data.documents.documents.map((value) => <SearchCard key={value.id} title={value.DC_title} creator={value.creator} coverageTemporal={value.DC_coverage_temporal} tag={[]} manage />) : null}
//     </DefaultLayoutStyle>
//   )
// }

// export default Search
