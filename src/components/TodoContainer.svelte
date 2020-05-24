<script>
  import TodoList from './TodoList.svelte';
  import TodoCreate from './TodoCreate.svelte';

  import {getLocalStorage} from './localStorage.js';

  getLocalStorage()
</script>

<div>
  <TodoList />
  <TodoCreate />
</div>