import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import moment from "moment";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(Vuetify, {
  iconfont: "md"
});
Vue.config.productionTip = false;

Vue.filter("date2String", function(date) {
  return moment(date).format("YYYY-MM-DD");
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
