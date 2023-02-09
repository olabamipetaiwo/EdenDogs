const writeToCache = (cacheKey, key, data) => {
  const cacheExists = localStorage.getItem(cacheKey);
  if (cacheExists) {
    const cacheData = readFromLocal(cacheKey);
    cacheData[key] = data;
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
  } else {
    const cache = {
      [key]: data,
    };
    localStorage.setItem(cacheKey, JSON.stringify(cache));
  }
};

const readFromLocal = (key) => {
  return keyExistsInLocal(key) ? JSON.parse(localStorage.getItem(key)) : null;
};

const keyExistsInLocal = (key) => {
  return localStorage.getItem(key) ? true : false;
};

const keyExistsInCache = (cacheKey, key) => {
  const cacheData = readFromLocal(cacheKey);
  return Object.prototype.hasOwnProperty.call(cacheData, key);
};

const checkCache = (cacheKey, key) => {
  return keyExistsInLocal(cacheKey) && keyExistsInCache(key)
    ? getCachedData(key)
    : null;
};

const getCachedData = (cacheKey, key) => {
  const cacheData = readFromLocal(cacheKey);
  return cacheData[key];
};

const cleanCache = () => {
  localStorage.clear();
};

export { writeToCache, checkCache, cleanCache };
