import { createApp } from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import Search from "./components/Search.vue";
import "./assets/main.css";
import store from "./store";
// Vue.use(Vuex);
createApp(Search).mount("#search");
createApp(App).mount("#app");
// new Vue({
//   el: "#app",
//   store, // -> store: 'store'
// });
