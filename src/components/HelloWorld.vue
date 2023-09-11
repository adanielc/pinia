<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ title }}</p>
  </div>
</template>

<script>
import { userCounterStore } from "@/stores/counter";
import { mapState, mapActions } from "pinia";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    ...mapState(userCounterStore, ["title"]),
  },
  methods: {
    ...mapActions(userCounterStore, ["increment"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
