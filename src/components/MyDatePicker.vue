<template>
  <v-menu
    v-model="datepicker"
    :close-on-content-click="false"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        :label="label"
        v-model="innerValue"
        :[isInnerIcon]="icon"
        readonly
        v-on="on"
        :solo="solo"
        :box="box"
        :outline="outline"
      ></v-text-field>
    </template>
    <v-date-picker v-model="innerValue"></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: "MyDatePicker",
  props: {
    value: { type: String },
    label: { type: String },
    icon: { type: String, default: "" },
    solo: { type: Boolean, default: false },
    box: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    innerIcon: { type: Boolean, default: false }
  },
  data() {
    return {
      datepicker: false
    };
  },
  computed: {
    innerValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.datepicker = false;
        this.$emit("input", value);
      }
    },
    isInnerIcon() {
      return this.innerIcon? "prepend-inner-icon": "prepend-icon";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
