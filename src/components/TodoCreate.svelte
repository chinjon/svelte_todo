<script>
  import { todos } from './todos.js'
  import { get } from 'svelte/store';
</script>

<form>
  <label for="new-todo"></label>
  <input type="text" id="new-todo" />
  <button type="submit">Add</button>
</form>