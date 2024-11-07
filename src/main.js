import { createApp } from "vue";
import "@styles/index.scss";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./libs/vuetify";
const app = createApp(App);

app.use(store);
app.use(router);
app.use(vuetify);
app.mount("#app");
