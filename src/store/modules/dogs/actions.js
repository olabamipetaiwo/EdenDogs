/* eslint-disable no-unused-vars */
import {
  getAllBreeds,
  getBreedDogs,
  getRandomDogs,
} from "@/services/DogService";
import {
  FETCH_ALL_BREEDS,
  FETCHING_BREEDS,
  FETCH_ALL_DOGS,
  FETCHING_DOGS,
  SET_ERROR,
} from "./types";

import { writeToCache, checkCache } from "@/utils/cache";

export const dogsActions = {
  async fetchBreeds({ commit }) {
    commit(FETCHING_BREEDS, true);
    try {
      const result = await getAllBreeds();
      const breedsResponse = Object.keys(result.data.message);

      if (breedsResponse.length > 0) {
        commit(FETCH_ALL_BREEDS, breedsResponse);
      } else {
        commit(FETCH_ALL_BREEDS, []);
        commit(SET_ERROR, "No breeds available");
      }
    } catch (error) {
      commit(SET_ERROR, "Error Occured fetching Breeds");
      commit(FETCHING_BREEDS, false);
    }
  },

  async fetchRandomDogs({ commit }) {
    commit(FETCHING_DOGS, true);
    try {
      const result = await getRandomDogs();
      const breedsResponse = result.data.message;

      if (breedsResponse.length > 0) {
        commit(FETCH_ALL_DOGS, breedsResponse.slice(0, 10));
      } else {
        commit(FETCH_ALL_DOGS, []);
        commit(SET_ERROR, "No breeds availabale");
      }
    } catch (error) {
      commit(SET_ERROR, "Error Occured fetching Breeds");
      commit(FETCHING_DOGS, false);
    }
  },

  async fetchBreedDogs({ commit }, payload) {
    const cachedData = checkCache(payload);

    if (cachedData) {
      commit(FETCH_ALL_DOGS, cachedData);
    } else {
      commit(FETCHING_DOGS, true);
      try {
        const result = await getBreedDogs(payload);
        const dogsResponse = result.data.message;

        if (dogsResponse.length > 0) {
          writeToCache(payload, dogsResponse);
          commit(FETCH_ALL_DOGS, dogsResponse);
        } else {
          commit(FETCH_ALL_DOGS, []);
          commit(SET_ERROR, "No dog available fo teh selected breed");
        }
      } catch (error) {
        commit(SET_ERROR, "Error Occured fetching Breeds");
        commit(FETCHING_DOGS, false);
      }
    }
  },
};
