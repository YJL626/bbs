import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import { elementPlugins } from "./element";
import "element-plus/packages/theme-chalk/src/base.scss";
const app = createApp(App);

elementPlugins.forEach((plugin) => app.use(plugin));

app
  .use(store)
  .use(router)
  .mount("#app");
