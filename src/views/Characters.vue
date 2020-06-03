<template>
  <b-row class="py-3">
    <div v-if="loading" class="spinner w-100">
      <b-spinner label="Spinning"></b-spinner>
    </div>
    {{ characters }}
    <!--
  <div v-for="(char, index) in characters.characters.results" :key="index">
      {{ char }}
    </div>
    <template>
      <b-col
        cols="3"
        v-for="character in characters.characters.results"
        :key="character.id"
      >
        <b-card
          :title="character.name"
          :img-src="character.image"
          :img-alt="character.name"
          img-top
          class="mb-2"
        >
          <b-card-text :class="{ colored: isInFavorites(character) }">
            {{ character.location.name }}
          </b-card-text>
          <b-button
            variant="info"
            :disabled="isInFavorites(character)"
            @click="addToFavorites({ character })"
            >Add to favorites</b-button
          >
        </b-card>
      </b-col>
    </template>
    -->
  </b-row>
</template>

<script>
import { useQuery, useResult, useMutation } from "@vue/apollo-composable";
import charactersQuery from "../graphql/queries/characters.query.gql";
import addToFavoritesMutation from "../graphql/queries/addToFavorites.mutation.gql";
// import { useLazyQuery } from "@apollo/client";

export default {
  setup() {
    // const { getData } = useLazyQuery(charactersQuery);

    const { result: characters, loading } = useQuery(charactersQuery);

    // console.log(characters.value.characters.results);

    // console.log(charactersResult);

    // const characters = useResult(
    //   charactersResult,
    //   null,
    //   (data) => data.characters.results
    // );

    const { mutate: addToFavorites } = useMutation(addToFavoritesMutation);

    return {
      characters,
      loading,
      addToFavorites,
    };
  },
};
</script>

<style>
.colored {
  background-color: #c5f8f8;
}
</style>
