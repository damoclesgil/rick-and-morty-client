<template>
  <div class="py-3">
    <template>
      <div v-for="character in characters" :key="character.id">
        {{ character.name }}
      </div>
    </template>
  </div>
</template>

<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import charactersQuery from "../graphql/queries/characters.query.gql";

export default {
  setup() {
    const { result: charactersResult, loading } = useQuery(charactersQuery);

    const characters = useResult(
      charactersResult,
      null,
      (data) => data.characters.results
    );

    return { characters };
  },
};
</script>

<style>
.colored {
  background-color: #c5f8f8;
}
</style>
