<script>
  import TodoList from "./TodoList.svelte";
  import TodoCreate from "./TodoCreate.svelte";
  // define your stores

  import { getLocalStorage, setLocalStorage } from "./localStorage.js";
  let todoListData;

  if (typeof window !== "undefined") {
    if (getLocalStorage("todoListData")) {
      todoListData = JSON.parse(getLocalStorage("todoListData"))
    }
  } else {
    console.log("we are running on the server");
  }
</script>

<div>
  <TodoList {todoListData} bind:value={todoListData}/>
  <TodoCreate {todoListData}/>
</div>
