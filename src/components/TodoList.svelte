<script>
  import {todos} from './todos.js';
</script>

<style>
.todo-item,
.todo-label {
  display: inline;
}
</style>

<div>
  {#each $todos as todo, i}
    <div class="todo-wrapper">
      <input 
        class="todo-item" 
        type="checkbox" 
        id={`todo-${todo.id}`} 
        value={todo.task} 
        bind:checked={todo.complete}
      />
      <label class="todo-label" for={`todo-${i}`}>{todo.task}</label>
    </div>
  {/each}
</div>