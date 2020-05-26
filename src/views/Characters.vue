<template>
  <b-row class="py-3">
<b-button
variant="info"
@click="fetchCharacters"
>
GetCharacters
</b-button>
    <!-- <div v-if="loading" class="spinner w-100"> -->
      <!-- <b-spinner label="Spinning"></b-spinner> -->
    <!-- </div> -->
    <template >
      <b-col cols="3" v-for="character in characters" :key="character.id">
        <b-card
          :title="character.name"
          :img-src="character.image"
          :img-alt="character.name"
          img-top
          class="mb-2"
        >
          <!-- :class="{ colored: isInFavorites(character) }" -->
          <b-card-text>
            {{ character.location.name }}
          </b-card-text>
          <b-button
            variant="info"
            @click="addToFavorites({ character })"
            >Add to favorites</b-button
          >
            <!-- :disabled="isInFavorites(character)" -->
        </b-card>
      </b-col>
    </template>
  </b-row>
</template>

<script>
import { useMutation } from '@vue/apollo-composable';
import charactersQuery from '../graphql/queries/characters.query.gql';
import { fetchCharacters } from '../helpers/characters.js'
import addToFavoritesMutation from '../graphql/queries/addToFavorites.mutation.gql';
// import favoriteCharactersQuery from '../graphql/queries/favoriteCharacters.query.gql';
// import characters from '../graphql/queries/characters.query.gql'
// import characters from '../graphql/queries/characters.query.js'
import { apolloClient } from '../graphql/client'
import { useLazyQuery } from '@apollo/client';
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const characters = ref([])

    const { getData }  = useLazyQuery(charactersQuery);


    // const { result: charactersResult, loading } = useQuery(charactersQuery);

    // const characters = useResult(
    //   charactersResult,
    //   null,
    //   data => data.characters.results
    // );
    const fetchCharacters = async () => {
    try {
     const result = await apolloClient.query({
       query: charactersQuery
     })
     console.log(apolloClient)
      characters.value = result.data.characters.results
  } catch (error) {
    console.error(error)
  }
    }

  
    // console.log(fetchCharacters)

    // Where are favorite characters? (╯°□°)╯︵ ┻━┻
    // const { result: favResult } = useQuery(favoriteCharactersQuery);

    const isInFavorites = character =>
      favResult.value.favoriteCharacters.includes(character); // Yes, this is placeholder

    const { mutate: addToFavorites } = useMutation(addToFavoritesMutation);

    return {
      characters,
      fetchCharacters,
      getData,
      addToFavorites,
      isInFavorites
    };
  }
};
</script>

<style>
.colored {
  background-color: #c5f8f8;
}
</style>
