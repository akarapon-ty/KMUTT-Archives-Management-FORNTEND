import { gql } from '@apollo/client'

export const userInformation = gql`
query userInformation {
    userInformation{
      userId,
      name,
      surname,
      role,
    }
  }
`

export default { }
