<script>
  import TodoList from "./TodoList.svelte";
  import {createRandomNumber} from './createRandomNumber.js';
  import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'

  let tasks = [];
  let task = '';

  try {
    if (typeof window !== "undefined") {
      tasks = JSON.parse(localStorage.getItem('todoListData')) || [];
    }
  } catch(err){
    tasks = [];
  }

  const addTask = () => {
    console.log(task)
    if (task.length > 0) {
      tasks = tasks.concat({
        id: createRandomNumber(1000),
        task,
        complete: false
      });
    } else {
      console.log('Must not be empty')
      notifier.warning('Must Not Be Empty!')
    }
  }

  $: try {
    if (typeof window !== "undefined") {
      localStorage.setItem('todoListData', JSON.stringify(tasks));
    }
	} catch (err) {
		console.log(err)
	}
</script>

<div>
<NotificationDisplay />
  <TodoList todos={tasks} />
  <form on:submit|preventDefault={addTask}>
    <label for="new-todo">Add a todo:</label>
    <input type="text" id="new-todo" bind:value={task}/>
    <button type="submit">Add</button>
  </form>
</div>
