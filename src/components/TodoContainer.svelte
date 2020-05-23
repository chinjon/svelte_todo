<script>
	const todos = [
    {task: "get water", complete: false},
    {task: "get water", complete: false},
    {task: "get water", complete: false},
    {task: "get water", complete: false}
  ]
</script>

<style>
.todo-item,
.todo-label {
  display: inline;
}
</style>

<div>
  {#each todos as todo, i}
    <div class="todo-wrapper">
      <input class="todo-item" type="checkbox" id={`todo-${i}`} value={todo.task}>
      <label class="todo-label" for={`todo-${i}`}>{todo.task}</label>
    </div>
  {/each}
</div>