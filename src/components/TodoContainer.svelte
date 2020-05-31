<script>
  import TodoList from "./TodoList.svelte";
  import TodoCreate from "./TodoCreate.svelte";
  // define your stores
  import { writable } from './localStorageStore'

  export const preferences = writable('preferences', {
    theme: 'dark',
    pane: '50%',
  })

  import { getLocalStorage, setLocalStorage } from "./localStorage.js";
  let todoListData;

  if (typeof window !== "undefined") {
    todoListData = JSON.parse(getLocalStorage("todolist"));
    if (!todoListData) {
      setLocalStorage("todolist", JSON.stringify([]));
    } else {
      todoListData = JSON.parse(getLocalStorage("todolist"))
    }
  } else {
    console.log("we are running on the server");
  }
</script>

<div>
  <TodoList {todoListData} />
  <TodoCreate {todoListData}/>
</div>
