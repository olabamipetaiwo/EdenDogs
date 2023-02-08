/* eslint-disable no-unused-vars */
import { getAllBreeds, getBreedDogs } from "@/services/DogService";
import {
  FETCH_ALL_BREEDS,
  FETCHING_BREEDS,
  FETCH_ALL_DOGS,
  FETCHING_DOGS,
  FETCH_DOG,
  FETCHING_DOG,
  SET_ERROR,
} from "./types";
import { faker } from "@faker-js/faker";

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

  async fetchBreedDogs({ commit }, payload) {
    const cachedData = checkCache(payload);

    if (cachedData) {
      commit(FETCH_ALL_DOGS, {
        dogs: cachedData,
        activeBreed: payload,
      });
    } else {
      commit(FETCHING_DOGS, true);
      try {
        const result = await getBreedDogs(payload);
        const dogsResponse = result.data.message;

        if (dogsResponse.length > 0) {
          writeToCache(payload, dogsResponse);
          commit(FETCH_ALL_DOGS, {
            dogs: dogsResponse,
            activeBreed: payload,
          });
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

  async fetchSingleDog({ commit }, payload) {
    const cachedData = checkCache(payload.breed);

    if (cachedData) {
      const dogData = {
        name: faker.word.noun(),
        index: payload.dogIndex,
        breed: payload.breed,
        imgUrl: cachedData[payload.dogIndex],
        description: faker.lorem.sentences(20),
        trainability: faker.datatype.boolean(),
        protectiveness: faker.datatype.boolean(),
        energy: faker.datatype.boolean(),
        weight: faker.datatype.float({ min: 10, max: 100, precision: 0.001 }),
        max_life_expectancy: faker.datatype.number(20),
      };
      commit(FETCH_DOG, dogData);
    } else {
      commit(FETCHING_DOG, true);
      try {
        const result = await getBreedDogs(payload.breed);
        const dogsResponse = result.data.message;
        if (dogsResponse.length > 0) {
          writeToCache(payload.breed, dogsResponse);
          const dogData = {
            name: faker.word.noun(),
            index: payload.dogIndex,
            breed: payload.breed,
            imgUrl: dogsResponse[payload.dogIndex],
            description: faker.lorem.sentences(20),
            trainability: faker.datatype.boolean(),
            protectiveness: faker.datatype.boolean(),
            energy: faker.datatype.boolean(),
            weight: faker.datatype.float({
              min: 10,
              max: 100,
              precision: 0.001,
            }),
            max_life_expectancy: faker.datatype.number(20),
          };
          commit(FETCH_DOG, dogData);
        } else {
          commit(SET_ERROR, "No dog available for this selected breed");
        }
      } catch (error) {
        commit(SET_ERROR, "Error Occured fetching Breeds");
        commit(FETCHING_DOG, false);
      }
    }
  },
};
