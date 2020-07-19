import favoriteCharactersQuery from "./queries/favoriteCharacters.query.gql";
import charactersMock from "./mock";
import { ApolloClient, createHttpLink } from "@apollo/client/core";
import { InMemoryCache } from '@apollo/client/cache';

const httpLink = createHttpLink({
  uri: "https://rickandmortyapi.com/graphql",
});

const cache = new InMemoryCache();

const resolvers = {
  Query: {
    characters() {
      return charactersMock;
    },
  },
  Mutation: {
    addToFavorites(_, { character }, { cache }) {
      const data = cache.readQuery({ query: favoriteCharactersQuery });
      data.favoriteCharacters = [...data.favoriteCharacters, character];
      cache.writeQuery({ query: favoriteCharactersQuery, data });
    },
    removeFromFavorites(_, { id }, { cache }) {
      const data = cache.readQuery({ query: favoriteCharactersQuery });
      data.favoriteCharacters = data.favoriteCharacters.filter(
        (character) => character.id !== id
      );
      cache.writeQuery({ query: favoriteCharactersQuery, data });
    },
  },
};

// cache.writeData({ data: { favoriteCharacters: [] } });

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  resolvers,
});
