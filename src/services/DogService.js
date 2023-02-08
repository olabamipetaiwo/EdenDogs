import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const dogsURL = {
  GET_ALL_BREEDS: "https://dog.ceo/api/breeds/list/all",
  GET_BREED_DOGS: "https://dog.ceo/api/breed",
};

export const getAllBreeds = async () => {
  return apiClient.get(dogsURL.GET_ALL_BREEDS);
};

export const getBreedDogs = async (breed) => {
  return apiClient.get(`${dogsURL.GET_BREED_DOGS}/${breed}/images`);
};
