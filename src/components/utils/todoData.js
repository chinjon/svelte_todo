const UNDEFINED = 'undefined';

const getLocalStorage = (key) => {
  if (typeof window !== UNDEFINED) {
    return JSON.parse(localStorage.getItem(key));
  }
};

const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

export default {
  getLocalStorage,
  setLocalStorage
}