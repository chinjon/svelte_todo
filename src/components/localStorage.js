const getLocalStorage = (key) => {
  try {
    return localStorage.getItem(key);
  } catch(e) {
    console.log(e);
  }
}

const setLocalStorage = () => {
  
}

const updateLocalStorage = () => {

}

const clearLocalStorage = () => {
  
}

export { getLocalStorage };