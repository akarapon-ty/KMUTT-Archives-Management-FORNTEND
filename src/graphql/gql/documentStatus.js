import { gql } from '@apollo/client'

export const documentStatusMultiple = gql`
  query {
      documentStatusMultiple {
          documentId,
          name,
          version,
          status,
          pages{
            pageId,
            index,
            name,
            status
          }
      }
  }
`

export default { }
