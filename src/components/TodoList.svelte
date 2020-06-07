<script>
  export let todos;

  console.log(todos);
  const onChangeChecked = () => {
    console.log("test on change");
    if (typeof window !== "undefined") {
      localStorage.setItem("todoListData", JSON.stringify(todos));
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
    {#if todos}
      {#each todos as todo, i}
        <div class="todo-wrapper {todo.complete ? 'hide-complete' : null}">
          <input
            class="todo-input"
            type="checkbox"
            id={`todo-${todo.id}`}
            value={todo.task}
            bind:checked={todo.complete}
            on:change={onChangeChecked} />
          <label
            class="todo-label {todo.complete ? 'todo-complete' : null}"
            for={`todo-${todo.id}`}>
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
