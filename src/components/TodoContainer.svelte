<script>
  import TodoList from "./TodoList.svelte";
  import TodoCreate from "./TodoCreate.svelte";

  import { getLocalStorage, setLocalStorage } from "./localStorage.js";
  let todoListData;

  if (typeof window !== "undefined") {
    todoListData = getLocalStorage("todolist");
    if (!todoListData) {
      setLocalStorage("todolist", JSON.stringify([]));
    } else {
      todoListData = [{id: 345, task: "get water", complete: true}]
    }
  } else {
    console.log("we are running on the server");
  }
</script>

<div>
  <TodoList {todoListData} />
  <TodoCreate />
</div>
