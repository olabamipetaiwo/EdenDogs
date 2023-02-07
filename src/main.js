import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/main.scss";
import CaretDownIcon from "@/components/icons/CaretDown.vue";
import CaretRightIcon from "@/components/icons/CaretRight.vue";
import Spinner from "@/components/icons/Spinner.vue";

const app = createApp(App);

app.directive("lazyload", {
  created: (el) => {
    function loadImage() {
      const imageElement = Array.from(el.children).find((el) => {
        return el.nodeName === "IMG";
      });

      if (imageElement) {
        imageElement.addEventListener("load", () => {
          setTimeout(() => el.classList.add("loaded"), 100);
        });
        imageElement.addEventListener("error", () => console.log("error"));
        imageElement.src = imageElement.dataset.url;
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: "0.5",
      };

      const observer = new IntersectionObserver(handleIntersect, options);

      observer.observe(el); // target element to watch
    }

    if (!window["IntersectionObserver"]) {
      loadImage();
    } else {
      createObserver();
    }
  },
});

app.component("caret-down-icon", CaretDownIcon);
app.component("caret-right-icon", CaretRightIcon);
app.component("spinner", Spinner);

app.use(store).use(router).mount("#app");
