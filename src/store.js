import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: "",
    locale: "ja"
  },
  getters: {},
  actinos: {},
  mutations: {
    updateMsg(state, payload) {
      state.msg = payload.msg;
    }
  }
});
