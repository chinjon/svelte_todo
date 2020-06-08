const UNDEFINED = 'undefined';

const getLocalStorage = (key) => {
  if (typeof window !== UNDEFINED) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch(e) {
      console.log(e);
    }
  }
};

const setLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch(e) {
    console.log(e);
  }
}

export default {
  getLocalStorage,
  setLocalStorage
}