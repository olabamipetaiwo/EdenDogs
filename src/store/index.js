import { createStore } from "vuex";
import dogs from "./modules/dogs";

export default createStore({
  modules: {
    dogs,
  },
});
