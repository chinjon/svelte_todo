<script>
  import TodoList from "./TodoList.svelte";
  import { NotificationDisplay, notifier } from "@beyonk/svelte-notifications";
  
  import todoData from './utils/todoData.js';
  import { createUuid } from './utils/createUuid.js';
  import time from './utils/time.js';

  let tasks = [];
  let task = "";
  let hideComplete = false;

  try {
    tasks = todoData.getLocalStorage('todoListData') || [];
  } catch (err) {
    tasks = [];
  }

  const clearLocalStorage = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
      tasks = todoData.getLocalStorage('todoListData') || [];
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

      console.log('task added')
      task = "";
    } else {
      console.log("New task must not be empty");
      notifier.warning("New task must Not Be Empty!");
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
  <button id="clear-todos" on:click={clearLocalStorage} aria-label="delete all tasks in list">Clear Todos</button>
  <button id="toggle-complete" on:click={() => {hideComplete = hideComplete ? false : true;}} aria-label="hide tasks marked as complete">Toggle Complete</button>
  <TodoList todos={tasks} hideComplete={hideComplete}/>
  <form on:submit|preventDefault={addTask}>
    <label for="new-task">Add a task item:</label>
    <input type="text" id="new-task" bind:value={task} />
    <button type="submit" aria-label="add task to task list">Add</button>
  </form>
</div>
