import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/main.scss";

import CaretDownIcon from "./components/icons/CaretDown.vue";
import CaretRightIcon from "./components/icons/CaretRight.vue";

const app = createApp(App);

app.component("caret-down-icon", CaretDownIcon);
app.component("caret-right-icon", CaretRightIcon);



app.use(store).use(router).mount("#app");
