<script>
  import TodoList from "./TodoList.svelte";
  import { NotificationDisplay, notifier } from "@beyonk/svelte-notifications";
  
  import { createUuid } from './utils/createUuid.js'
  import time from './utils/time.js';

  let tasks = [];
  let task = "";
  let hideComplete = true;

  const getLocalStorage = () => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("todoListData"));
    }
  };

  try {
    tasks = getLocalStorage() || [];
  } catch (err) {
    tasks = [];
  }

  const clearLocalStorage = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      tasks = getLocalStorage() || [];
    }
  };

  const addTask = () => {
    console.log(task);
    if (task.length > 0) {
      tasks = tasks.concat({
        id: createUuid(),
        task,
        complete: false,
        dataStart: time.createUnixStamp()
      });

      console.log(tasks)

      task = "";
    } else {
      console.log("Must not be empty");
      notifier.warning("Must Not Be Empty!");
    }
  };

  $: try {
    if (typeof window !== "undefined") {
      localStorage.setItem("todoListData", JSON.stringify(tasks));
    }
  } catch (err) {
    console.log(err);
  }
</script>

<div>
  <NotificationDisplay />
  <button id="clear-todos" on:click={clearLocalStorage}>Clear Todos</button>
  <button id="toggle-complete" on:click={() => {hideComplete = hideComplete ? false : true;}}>Toggle Complete</button>
  <TodoList todos={tasks} hideComplete={hideComplete}/>
  <form on:submit|preventDefault={addTask}>
    <label for="new-todo">Add a task item:</label>
    <input type="text" id="new-todo" bind:value={task} />
    <button type="submit">Add</button>
  </form>
</div>
