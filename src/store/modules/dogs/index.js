import { dogsActions } from "./actions";
import dogsMutations from "./mutation";

export default {
  namespaced: true,
  state: {
    allBreeds: [],
    allDogs: [],
    fetchingBreeds: false,
    fetchingDogs: false,
    fetchingDog: false,
    activeBreed: null,
    activeDog: null,
    error: null,
  },
  getters: {
    getActiveBreed(state) {
      return state.activeBreed;
    },
  },
  mutations: { ...dogsMutations },
  actions: { ...dogsActions },
};
