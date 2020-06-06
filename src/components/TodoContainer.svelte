<script>
  import TodoList from "./TodoList.svelte";
  import { createRandomNumber } from "./createRandomNumber.js";
  import { NotificationDisplay, notifier } from "@beyonk/svelte-notifications";

  let tasks = [];
  let task = "";

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
        id: createRandomNumber(1000),
        task,
        complete: false
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
  <TodoList todos={tasks} />
  <form on:submit|preventDefault={addTask}>
    <label for="new-todo">Add a task item:</label>
    <input type="text" id="new-todo" bind:value={task} />
    <button type="submit">Add</button>
  </form>
</div>
