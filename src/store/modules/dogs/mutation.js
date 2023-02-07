import {
  FETCH_ALL_BREEDS,
  FETCHING_BREEDS,
  FETCH_ALL_DOGS,
  FETCHING_DOGS,
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
    state.allDogs = payload;
    state.fetchingDogs = false;
    state.error = null;
  },

  [FETCHING_BREEDS](state, payload) {
    state.fetchingBreeds = payload;
  },
  [FETCHING_DOGS](state, payload) {
    state.fetchingDogs = payload;
  },
  [SET_ERROR](state, error) {
    state.error = error;
  },
  [CLEAR_ERROR](state) {
    state.error = null;
  },
};
