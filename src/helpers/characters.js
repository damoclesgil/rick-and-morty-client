import characters from '../graphql/queries/characters.query.gql'
import { apolloClient } from '../graphql/client'

export const fetchCharacters = async () => {
  try {
    const result = await apolloClient.query({
      query: characters
    })
    return result
    // console.log(result)
  } catch (error) {
    console.error(error)
  }
}

/* HOW TO USE 

  const characters = async () => {
      const result = await fetchCharacters
      return result      
    }
    
*/