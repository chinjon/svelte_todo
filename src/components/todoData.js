import { writable } from 'svelte/store';

import { getLocalStorage, setLocalStorage } from "./localStorage.js";
export let todoListData;

if (typeof window !== "undefined") {
  if (getLocalStorage("todoListData")) {
    console.log(JSON.parse(getLocalStorage("todoListData")))
    todoListData = writable(JSON.parse(getLocalStorage("todoListData")))
    console.log(todoListData)
  } else {
    todoListData = setLocalStorage("todoListData", JSON.stringify([]));
  }
} else {
  console.log("we are running on the server");
}