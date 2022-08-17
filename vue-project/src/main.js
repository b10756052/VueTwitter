import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";
import Search from "./components/Search.vue";
import "./assets/main.css";

createApp(App).use(store).mount("#app");

createApp(Search).use(store).mount("#search");
