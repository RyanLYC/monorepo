import { createApp } from "vue";
import App from "./App.vue";
import component1 from "@zy/component1";

const app = createApp(App);
app.use(component1);
app.mount("#app");
