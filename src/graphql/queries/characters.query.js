import gql from 'graphql-tag'

export const characters = gql`
query Characters {
    characters{
      results {
        id
        name
        location {
          name
          
        }
        image
      }
    }
  }
`
