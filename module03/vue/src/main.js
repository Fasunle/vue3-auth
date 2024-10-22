import App from "./App.vue";

import { createApp } from "vue";

import { registerPlugins } from "@/plugins";

import axios from "@/api/axios";
import auth from "./module/auth";
axios.setup();

const app = createApp(App);

registerPlugins(app);
// refresh screen whenever the user reload the app
auth.refresh();

app.mount("#app");
