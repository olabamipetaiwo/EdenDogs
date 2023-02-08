import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/main.scss";
import CaretDownIcon from "@/components/icons/CaretDown.vue";
import CaretRightIcon from "@/components/icons/CaretRight.vue";
import Spinner from "@/components/icons/Spinner.vue";
import { _InitLazy } from "@/utils/intersection";

const app = createApp(App);

app.directive("lazyload", {
  created: (el) => {
    _InitLazy(el);
  },
  updated: (el) => {
    _InitLazy(el);
  },
});

app.component("caret-down-icon", CaretDownIcon);
app.component("caret-right-icon", CaretRightIcon);
app.component("spinner", Spinner);

app.use(store).use(router).mount("#app");
