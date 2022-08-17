import { createStore } from "vuex";

export default createStore({
  state: {
    data: "哈哈",
  },
  mutations: {
    setData(state, parseData) {
      state.data = parseData;
    },
  },
  actions: {},
  modules: {},
});
