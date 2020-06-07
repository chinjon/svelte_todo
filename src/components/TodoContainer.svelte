<script>
  import TodoList from "./TodoList.svelte";
  import { NotificationDisplay, notifier } from "@beyonk/svelte-notifications";

  import todoData from "./utils/todoData.js";
  import { createUuid } from "./utils/createUuid.js";
  import time from "./utils/time.js";

  const UNDEFINED = 'undefined';
  const TODO_LIST_DATA = 'todoListData';
  const TODO_LIST_PREFERENCES = 'todoListPreferences'

  let tasks = [];
  let task = "";
  const defaultPreferences = {
    hideComplete: false
  }
  let preferences;

  try {
    tasks = todoData.getLocalStorage(TODO_LIST_DATA) || [];
    preferences = todoData.getLocalStorage(TODO_LIST_PREFERENCES) || defaultPreferences;
  } catch (err) {
    tasks = [];
  }

  const setPreferences = () => {
    todoData.setLocalStorage(TODO_LIST_PREFERENCES, preferences);
  }


  const clearLocalStorage = () => {
    if (typeof window !== UNDEFINED) {
      localStorage.clear();
      tasks = todoData.getLocalStorage(TODO_LIST_DATA) || [];
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

      task = '';
    } else {
      console.log("New task must not be empty");
      notifier.warning("New task must Not Be Empty!");
    }
  };

  $: try {
    if (typeof window !== UNDEFINED) {
      todoData.setLocalStorage(TODO_LIST_DATA, tasks);
    }
  } catch (err) {
    console.log(err);
  }
</script>

<div>
  <NotificationDisplay />
  <button
    id="clear-todos"
    on:click={clearLocalStorage}
    aria-label="delete all tasks in list">
    Clear Todos
  </button>
  <button
    id="toggle-complete"
    on:click={() => {
      preferences.hideComplete = preferences.hideComplete ? false : true;
      setPreferences();
    }}
    aria-label="hide tasks marked as complete">
    Toggle Complete
  </button>
  <TodoList todos={tasks} hideComplete={preferences.hideComplete} />
  <form on:submit|preventDefault={addTask}>
    <label for="new-task">Add a task item:</label>
    <input type="text" id="new-task" bind:value={task} />
    <button type="submit" aria-label="add task to task list">Add</button>
  </form>
</div>
