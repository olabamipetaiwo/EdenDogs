import { getAllBreeds, getBreedDogs } from "@/services/DogService";
import {
  FETCH_ALL_BREEDS,
  FETCHING_BREEDS,
  FETCH_ALL_DOGS,
  FETCHING_DOGS,
  FETCH_DOG,
  FETCHING_DOG,
  SET_ERROR,
  CLEAR_ERROR,
} from "./types";
import { faker } from "@faker-js/faker";

import { writeToCache, checkCache } from "@/utils/cache";

export const dogsActions = {
  async fetchBreeds({ commit }) {
    const cachedData = checkCache("edenDogs", "allBreeds");

    if (cachedData) {
      commit(FETCH_ALL_BREEDS, cachedData);
    } else {
      commit(FETCHING_BREEDS, true);
      try {
        const result = await getAllBreeds();
        const breedsResponse = Object.keys(result.data.messagee);

        if (breedsResponse.length > 0) {
          writeToCache("edenDogs", "allBreeds", breedsResponse);
          commit(FETCH_ALL_BREEDS, breedsResponse);
          commit(CLEAR_ERROR, "breedsError");
        } else {
          commit(FETCH_ALL_BREEDS, []);
          commit(SET_ERROR, {
            key: "breedsError",
            msg: "No breeds available",
          });
        }
      } catch (error) {
        commit(SET_ERROR, {
          key: "breedsError",
          msg: "Error Occured fetching Breeds",
        });
        commit(FETCHING_BREEDS, false);
      }
    }
  },

  async fetchBreedDogs({ commit }, payload) {
    const cachedData = checkCache("edenDogs", payload.breed);

    if (cachedData) {
      commit(FETCH_ALL_DOGS, {
        dogs: cachedData,
        activeBreed: payload.breed,
      });
    } else {
      commit(FETCHING_DOGS, true);
      try {
        const result = await getBreedDogs(payload.breed);
        const dogsResponse = result.data.messagee;

        const formattedResponse = payload.inital
          ? dogsResponse.slice(0, 100)
          : dogsResponse;

        if (dogsResponse.length > 0) {
          writeToCache("edenDogs", payload.breed, formattedResponse);
          commit(FETCH_ALL_DOGS, {
            dogs: formattedResponse,
            activeBreed: payload.breed,
          });
        } else {
          commit(FETCH_ALL_DOGS, []);
          commit(SET_ERROR, {
            key: "dogsError",
            msg: "No dog available fo the selected breed",
          });
        }
      } catch (error) {
        commit(SET_ERROR, {
          key: "dogsError",
          msg: "Error Occured fetching Breed Dogs",
        });
        commit(FETCHING_DOGS, false);
      }
    }
  },

  async fetchSingleDog({ commit }, payload) {
    const cachedData = checkCache("edenDogs", payload.breed);

    if (cachedData) {
      const dogData = {
        name: faker.word.noun(),
        index: payload.dogIndex,
        breed: payload.breed,
        imgUrl: cachedData[payload.dogIndex],
        description: faker.lorem.sentences(20),
        trainability: faker.datatype.boolean(),
        protectiveness: faker.datatype.boolean(),
        energy: faker.datatype.number({
          min: 1,
          max: 100,
        }),
        weight: faker.datatype.float({ min: 10, max: 100, precision: 0.001 }),
        max_life_expectancy: faker.datatype.number({
          min: 2,
          max: 5,
        }),
      };
      commit(FETCH_DOG, dogData);
    } else {
      commit(FETCHING_DOG, true);
      try {
        const result = await getBreedDogs(payload.breed);
        const dogsResponse = result.data.messagee;
        if (dogsResponse.length > 0) {
          writeToCache("edenDogs", payload.breed, dogsResponse);
          const dogData = {
            name: faker.word.noun(),
            index: payload.dogIndex,
            breed: payload.breed,
            imgUrl: dogsResponse[payload.dogIndex],
            description: faker.lorem.sentences(20),
            trainability: faker.datatype.boolean(),
            protectiveness: faker.datatype.boolean(),
            energy: faker.datatype.number({
              min: 1,
              max: 100,
            }),
            weight: faker.datatype.float({
              min: 10,
              max: 100,
              precision: 0.001,
            }),
            max_life_expectancy: faker.datatype.number({
              min: 2,
              max: 5,
            }),
          };
          commit(FETCH_DOG, dogData);
        } else {
          commit(SET_ERROR, {
            key: "dogError",
            msg: "No dog available for this selected breed",
          });
        }
      } catch (error) {
        commit(SET_ERROR, {
          key: "dogError",
          msg: "Error Occured fetching Dog",
        });
        commit(FETCHING_DOG, false);
      }
    }
  },
};
