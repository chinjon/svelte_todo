<script>
  import todoData from "./utils/todoData.js";
  export let todos;
  export let hideComplete;
  
  const onChangeChecked = () => {
    if (typeof window !== "undefined") {
      todoData.setLocalStorage("todoListData", todos);
    }
  };
</script>

<style>
  .todo-input,
  .todo-label {
    display: inline;
  }

  .todo-complete {
    text-decoration: line-through;
    color: #808080;
  }

  .hide-complete {
    display: none;
  }
</style>

<div>
  {#if todos !== undefined}
    {#if todos.length > 0}
      {#each todos as todo}
        <div class="todo-wrapper {todo.complete && hideComplete ? 'hide-complete' : null}">
          <input
            class="todo-input"
            type="checkbox"
            id={todo.id}
            value={todo.task}
            bind:checked={todo.complete}
            on:change={onChangeChecked} />
          <label
            class="todo-label {todo.complete ? 'todo-complete' : null}"
            for={todo.id}>
            {todo.task}
          </label>
        </div>
      {/each}
    {:else}
      <div>
        <p>Add some todos</p>
      </div>
    {/if}
  {/if}
</div>
