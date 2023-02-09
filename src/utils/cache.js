const CACHE_VALIDITY_IN_SECONDS = 60 * 60; //1 Hour;
// const CACHE_VALIDITY_IN_SECONDS = 15; //1 Hour;

const getTimestampInSeconds = () => {
  return Math.floor(Date.now() / 1000);
};

const writeToCache = (cacheKey, key, data) => {
  const cacheExists = localStorage.getItem(cacheKey);
  if (cacheExists) {
    const cacheData = readFromLocal(cacheKey);
    cacheData[key] = data;
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    saveCacheTimestamps(key);
  } else {
    const cache = {
      [key]: data,
    };
    localStorage.setItem(cacheKey, JSON.stringify(cache));
    saveCacheTimestamps(key);
  }
};

const saveCacheTimestamps = (key) => {
  if (localStorage.getItem("cacheInit")) {
    const existingTimeStamps = JSON.parse(localStorage.getItem("cacheInit"));
    existingTimeStamps[key] = getTimestampInSeconds();
    localStorage.setItem("cacheInit", JSON.stringify(existingTimeStamps));
  } else {
    const cacheTimestamps = {
      [key]: getTimestampInSeconds(),
    };
    localStorage.setItem("cacheInit", JSON.stringify(cacheTimestamps));
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
  let response;

  if (localStorage.getItem("cacheInit")) {
    if (keyExistsInCache("cacheInit", key)) {
      const cacheStamps = readFromLocal("cacheInit");
      const _cacheInit = Number(cacheStamps[key]);
      const MAX_AGE = _cacheInit + CACHE_VALIDITY_IN_SECONDS;
      const _now = getTimestampInSeconds();
      const check = _now > MAX_AGE;
      if (check) {
        response = false;
      } else {
        response = true;
      }
    } else {
      const existingTimeStamps = JSON.parse(localStorage.getItem("cacheInit"));
      existingTimeStamps[key] = getTimestampInSeconds();
      localStorage.setItem("cacheInit", JSON.stringify(existingTimeStamps));
      response = true;
    }
  } else {
    saveCacheTimestamps(key);
    response = false;
  }

  return response;
};

const getCachedData = (cacheKey, key) => {
  const cacheData = readFromLocal(cacheKey);
  return cacheData[key];
};

const cleanCache = () => {
  localStorage.clear();
};

export { writeToCache, checkCache, cleanCache, keyExistsInLocal };
