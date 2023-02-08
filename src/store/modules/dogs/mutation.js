import {
  FETCH_ALL_BREEDS,
  FETCHING_BREEDS,
  FETCH_ALL_DOGS,
  FETCHING_DOGS,
  FETCHING_DOG,
  FETCH_DOG,
  SET_ERROR,
  CLEAR_ERROR,
} from "./types";

export default {
  [FETCH_ALL_BREEDS](state, payload) {
    state.allBreeds = payload;
    state.fetchingBreeds = false;
    state.error = null;
  },
  [FETCH_ALL_DOGS](state, payload) {
    state.allDogs = payload.dogs;
    state.fetchingDogs = false;
    state.activeBreed = payload.activeBreed;
    state.error = null;
  },
  [FETCH_DOG](state, payload) {
    state.activeDog = payload;
    state.fetchingDog = false;
    state.error = null;
  },
  [FETCHING_BREEDS](state, payload) {
    state.fetchingBreeds = payload;
  },
  [FETCHING_DOGS](state, payload) {
    state.fetchingDogs = payload;
  },
  [FETCHING_DOG](state, payload) {
    state.fetchingDog = payload;
  },
  [SET_ERROR](state, error) {
    state.error = error;
  },
  [CLEAR_ERROR](state) {
    state.error = null;
  },
};
