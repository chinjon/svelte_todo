import { writable } from 'svelte/store';
import {createRandomNumber} from './createRandomNumber.js';
  
export let todos = writable([
  {id: createRandomNumber(1000), task: "get water", complete: true},
  {id: createRandomNumber(1000), task: "get water", complete: false},
  {id: createRandomNumber(1000), task: "get water", complete: false},
  {id: createRandomNumber(1000), task: "get water", complete: false}
]);