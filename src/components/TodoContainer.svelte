<script>
  import TodoList from "./TodoList.svelte";
  import TodoCreate from "./TodoCreate.svelte";

  import { getLocalStorage } from "./localStorage.js";

  if (typeof window !== "undefined") {
    localStorage.setItem(
      "todolist",
      JSON.stringify([{ task: "get water", id: 1, complete: false }])
    );
  } else {
    console.log("we are running on the server");
  }
</script>

<div>
  <TodoList />
  <TodoCreate />
</div>
