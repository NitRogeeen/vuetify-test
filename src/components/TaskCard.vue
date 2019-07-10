<template>
  <v-card>
    <v-card-title>
      <h2>{{ date }}</h2>
    </v-card-title>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TaskCard",
  data() {
    return {};
  },
  props: {
    date: "",
    taskList: []
  },
  computed: {
    ...mapState({
      msg: "msg"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
