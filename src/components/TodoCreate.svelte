<script>
  import { writable, get } from 'svelte/store'
  import { setLocalStorage } from "./localStorage.js";
  import { createRandomNumber } from './createRandomNumber.js';
  import { todoListData } from './todoData.js'

  let task = "";
  let list = get(todoListData);

  const addTodo = () => {
    if (task.length <= 0) {
      console.log("Task must have a name")
    } else {
      list = [
        ...list,
        { id: createRandomNumber(1000), complete: false, task}
      ];

      console.log(list)

      setLocalStorage("todoListData", JSON.stringify(list))
    }

  }
</script>

<form on:submit|preventDefault={addTodo}>
  <label for="new-todo">Add a todo:</label>
  <input type="text" id="new-todo" bind:value={task} />
  <button type="submit">Add</button>
</form>