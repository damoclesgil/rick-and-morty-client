<template>
  <b-row class="py-3">
    <!-- <b-button variant="info" @click="getData">GetData </b-button> -->

    <template>
      <b-col cols="3" v-for="character in characters" :key="character.id">
        {{ character.name }}
      </b-col>
    </template>
  </b-row>
</template>

<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import charactersQuery from "../graphql/queries/characters.query.gql";
// import { onMounted } from "@vue/composition-api";

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
