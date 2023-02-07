const writeToCache = (key, data) => {
  const cacheExists = localStorage.getItem("edenDogs");
  if (cacheExists) {
    const cacheData = readFromLocal("edenDogs");
    cacheData[key] = data;
    localStorage.setItem("edenDogs", JSON.stringify(cacheData));
  } else {
    const cache = {
      [key]: data,
    };
    localStorage.setItem("edenDogs", JSON.stringify(cache));
  }
};

const readFromLocal = (key) => {
  return keyExistsInLocal(key) ? JSON.parse(localStorage.getItem(key)) : null;
};

const keyExistsInLocal = (key) => {
  return localStorage.getItem(key) ? true : false;
};

const keyExistsInCache = (key) => {
  const cacheData = readFromLocal("edenDogs");
  return Object.prototype.hasOwnProperty.call(cacheData, key);
};

const checkCache = (key) => {
  return keyExistsInLocal("edenDogs") && keyExistsInCache(key)
    ? getCachedData(key)
    : null;
};

const getCachedData = (key) => {
  const cacheData = readFromLocal("edenDogs");
  return cacheData[key];
};

export { writeToCache, checkCache };
