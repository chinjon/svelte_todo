<script>
  import { todos } from './todos.js'
  import { get } from 'svelte/store';
  import { createRandomNumber } from './createRandomNumber.js';

  let todoList = get(todos);
  let task = "";

  const addTodo = () => {
    todoList = [
      ...todoList,
      { id: createRandomNumber(1000), complete: false, task}
    ];

    todos.update(existing => todoList)
    console.log(get(todos))
  }
</script>

<form on:submit|preventDefault={addTodo}>
  <label for="new-todo">Add a todo:</label>
  <input type="text" id="new-todo" bind:value={task} />
  <button type="submit">Add</button>
</form>