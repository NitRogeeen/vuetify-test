<template>
  <div>
    <my-date-picker label="Choose date" v-model="selectDate" icon="event" outline inner-icon/>
    <task-card :date="selectDate"></task-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TaskCard from "@/components/TaskCard";
import MyDatePicker from "@/components/MyDatePicker";
import moment from "moment";
export default {
  name: "Top",
  components: {
    TaskCard,
    MyDatePicker
  },
  data() {
    return {
      selectDate: moment().format("YYYY-MM-DD")
    };
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
