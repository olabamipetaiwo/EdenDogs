/* eslint-disable no-unused-vars */

const CACHE_VALIDITY_IN_SECONDS = 60 * 60; //1 Hour;

const getTimestampInSeconds = () => {
  return Math.floor(Date.now() / 1000);
};

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
    localStorage.setItem("cacheInit", getTimestampInSeconds());
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
  return cacheData
    ? Object.prototype.hasOwnProperty.call(cacheData, key)
    : false;
};

const checkCache = (cacheKey, key) => {
  return keyExistsInLocal(cacheKey) &&
    keyExistsInCache(cacheKey, key) &&
    cacheIsValid(key)
    ? getCachedData(cacheKey, key)
    : null;
};

const cacheIsValid = (key) => {
  const _cacheInit = Number(localStorage.getItem("cacheInit"));
  const _now = getTimestampInSeconds();
  const MAX_AGE = _cacheInit + CACHE_VALIDITY_IN_SECONDS;
  const check = _now > MAX_AGE;

  if (check) {
    console.log("cache not valid");
    return false;
  } else {
    console.log("cacheis  valid");
    return true;
  }
};

const getCachedData = (cacheKey, key) => {
  const cacheData = readFromLocal(cacheKey);
  return cacheData[key];
};

const cleanCache = () => {
  localStorage.clear();
};

export { writeToCache, checkCache, cleanCache, keyExistsInLocal };
