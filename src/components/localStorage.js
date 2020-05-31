const getLocalStorage = (key) => {
  try {
    return localStorage.getItem(key);
  } catch(e) {
    console.log(e);
  }
}

const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value); 
  } catch(e) {
    console.log(e)
  }
}

const updateLocalStorage = () => {

}

const clearLocalStorage = () => {
  
}

export { getLocalStorage, setLocalStorage };