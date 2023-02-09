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
    breedsError: null,
    dogsError: null,
    dogError: null,
  },
  getters: {
    getActiveBreed(state) {
      return state.activeBreed;
    },
  },
  mutations: { ...dogsMutations },
  actions: { ...dogsActions },
};
