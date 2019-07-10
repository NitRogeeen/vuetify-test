<template>
  <div>
    <h1>PageA!!!</h1>
    <p>message:{{ msg }}</p>

    <v-form>
      <v-text-field v-model="msg" label="message"></v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "PageA",
  computed: {
    msg: {
      get () {
        return this.$store.state.msg
      },
      set (value) {
        this.$store.commit('updateMsg', {msg: value})
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
