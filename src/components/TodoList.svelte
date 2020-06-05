<script>
  import { writable, get } from 'svelte/store'
  import { todoListData } from './todoData.js'
  let todoList = get(todoListData)
</script>

<style>
  .todo-item,
  .todo-label {
    display: inline;
  }
</style>

<div>
  {#if todoList !== undefined}
    {#if todoList}
      {#each get(todoListData) as todo, i}
        <div class="todo-wrapper">
          <input
            class="todo-item"
            type="checkbox"
            id={`todo-${todo.id}`}
            value={todo.task}
            bind:checked={todo.complete} />
          <label class="todo-label" for={`todo-${todo.id}`}>{todo.task}</label>
        </div>
      {/each}
    {:else}
      <div>
        <p>Add some todos</p>
      </div>
    {/if}
  {/if}
</div>
