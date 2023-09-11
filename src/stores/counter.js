import { defineStore } from "pinia";

export const userCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    title: "Pinia Title name",
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
