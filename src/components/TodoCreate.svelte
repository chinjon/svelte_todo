<script>
  import { setLocalStorage } from "./localStorage.js";
  import { createRandomNumber } from './createRandomNumber.js';

  export let todoListData;
  let task = "";

  const addTodo = () => {
    if (task.length <= 0) {
      console.log("Task must have a name")
    } else {
      todoListData = [
        ...todoListData,
        { id: createRandomNumber(1000), complete: false, task}
      ];

      console.log(todoListData)

      setLocalStorage("todoListData", JSON.stringify(todoListData))
    }

  }
</script>

<form on:submit|preventDefault={addTodo}>
  <label for="new-todo">Add a todo:</label>
  <input type="text" id="new-todo" bind:value={task} />
  <button type="submit">Add</button>
</form>