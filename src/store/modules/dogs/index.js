import { dogsActions } from "./actions";
import dogsMutations from "./mutation";

export default {
  namespaced: true,
  state: {
    allBreeds: [],
    allDogs: [],
    fetchingBreeds: false,
    fetchingDogs: false,
    error: null,
  },
  getters: {
    getAllBreedsLength(state) {
      return state.allBreeds.length;
    },
  },
  mutations: { ...dogsMutations },
  actions: { ...dogsActions },
};
