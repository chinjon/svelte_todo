<script>
	const todos = [
    {task: "get water", complete: false},
    {task: "get water", complete: false},
    {task: "get water", complete: false},
    {task: "get water", complete: false}
  ]
</script>

<div>
  {#each todos as todo, i}
    <input type="checkbox" id={`todo-${i}`} value={todo.task}>
    <label for={`todo-${i}`}>{todo.task}</label>
  {/each}
</div>