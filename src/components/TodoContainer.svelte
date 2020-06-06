<script>
  import TodoList from "./TodoList.svelte";
  import { writable, get } from "svelte/store";
  import { todoListData } from "./todoData.js";
  import {createRandomNumber} from './createRandomNumber.js';

  let tasks = [];
  let task = '';

  try {
    tasks = JSON.parse(localStorage.getItem('todoListData')) || [];
  } catch(err){
    tasks = [];
  }

  const addTask = () => {
    console.log(task)
    tasks = tasks.concat({
      id: createRandomNumber(1000),
      task,
      complete: false
    })
  }

  $: try {
		localStorage.setItem('todoListData', JSON.stringify(tasks));
	} catch (err) {
		console.log(err)
	}
</script>

<div>
  <TodoList todos={tasks} />
  <form on:submit|preventDefault={addTask}>
    <label for="new-todo">Add a todo:</label>
    <input type="text" id="new-todo" bind:value={task}/>
    <button type="submit">Add</button>
  </form>
</div>
