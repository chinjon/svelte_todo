<script>
  import todoData from "./utils/todoData.js";
  import time from "./utils/time.js";
  export let todos;
  export let hideComplete;
  
  const onChangeChecked = (event) => {
    const taskIndex = event.target.getAttribute("index");

    if (event.target.checked) {
      todos[taskIndex].dateEnd = time.createUnixStamp();
    } else {
      todos[taskIndex].dateEnd = '';
    }

    if (typeof window !== "undefined") {
      todoData.setLocalStorage("todoListData", todos);
    }
  };

  const deleteTask = (event) => {
    console.log('delete');
  }
</script>

<style>
  .todo-input,
  .todo-label {
    display: inline-block;
  }

  .todo-label {
    width: 85%;
  }

  .todo-input {
    font-size: 16px;
  }

  .todo-complete {
    text-decoration: line-through;
    color: #808080;
  }

  .hide-complete {
    display: none;
  }

  .delete-icon {
    width: 12px;
  }
</style>

<div>
  {#if todos !== undefined}
    {#if todos.length > 0}
      {#each todos as todo, i}
        <div class="todo-wrapper {todo.complete && hideComplete ? 'hide-complete' : null}">
          <input
            class="todo-input"
            type="checkbox"
            id={todo.id}
            index={i}
            value={todo.task}
            bind:checked={todo.complete}
            on:change={onChangeChecked} />
          <label
            class="todo-label {todo.complete ? 'todo-complete' : null}"
            for={todo.id}>
            {todo.task}
          </label>
          <img on:click={deleteTask} src="close-icon.svg" class="delete-icon" alt="delete task icon"/>
        </div>
      {/each}
    {:else}
      <div>
        <p>Add some todos</p>
      </div>
    {/if}
  {/if}
</div>
