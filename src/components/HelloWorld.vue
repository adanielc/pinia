<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ title }}
        </h1>
        <h1 class="display-2 font-weight-bold mb-3">
          {{ counter }}
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="increment">Add</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { userCounterStore } from "@/stores/counter";
import { mapState, mapActions } from "pinia";
export default {
  name: "HelloWorld",

  data: () => ({}),
  computed: {
    ...mapState(userCounterStore, ["title", "counter"]),
  },
  methods: {
    ...mapActions(userCounterStore, ["increment"]),
  },
};
</script>
