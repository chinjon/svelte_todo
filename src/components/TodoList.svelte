<script>
  export let todos;

  const testOnChange = () => {
    console.log('test on change')
    if (typeof window !== "undefined") {
      localStorage.setItem('todoListData', JSON.stringify(todos));
    }
  }
</script>

<style>
  .todo-item,
  .todo-label {
    display: inline;
  }
</style>

<div>
  {#if todos !== undefined}
    {#if todos}
      {#each todos as todo, i}
        <div class="todo-wrapper">
          <input
            class="todo-item"
            type="checkbox"
            id={`todo-${todo.id}`}
            value={todo.task}
            bind:checked={todo.complete}
            on:change={testOnChange} />
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
