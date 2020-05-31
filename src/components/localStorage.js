const getLocalStorage = (key) => {
  try {
    return localStorage.getItem(key);
  } catch(e) {
    console.log(e);
  }
}

const setLocalStorage = (key) => {
  try {
    localStorage.setItem(key); 
  } catch(e) {
    console.log(e)
  }
}

const updateLocalStorage = () => {

}

const clearLocalStorage = () => {
  
}

export { getLocalStorage, setLocalStorage };