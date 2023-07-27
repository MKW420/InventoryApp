// import { createApp } from "vue";
// import App from "../src/views/DashboardView";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// //simport router from './router'
// createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
