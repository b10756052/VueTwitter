import { createApp } from "vue";
import App from "./App.vue";
import Search from "./components/Search.vue";

import "./assets/main.css";
createApp(Search).mount("#search");
createApp(App).mount("#app");
