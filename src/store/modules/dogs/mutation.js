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
    state.breedsError = null;
    state.fetchingBreeds = false;
    state.allBreeds = payload;
  },
  [FETCH_ALL_DOGS](state, payload) {
    state.dogsError = null;
    state.fetchingDogs = false;
    state.activeBreed = payload.activeBreed;
    state.allDogs = payload.dogs;
  },
  [FETCH_DOG](state, payload) {
    state.dogError = null;
    state.fetchingDog = false;
    state.activeDog = payload;
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
    state[error.key] = error.msg;
  },
  [CLEAR_ERROR](state, error) {
    state[error] = null;
  },
};
