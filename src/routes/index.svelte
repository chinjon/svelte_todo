<script>
	import TodoContainer from '../components/TodoContainer.svelte';
	import Notifications from 'svelte-notifications';
</script>

<style>

</style>

<svelte:head>
	<title>Todos</title>
</svelte:head>
<Notifications>
	<div>
		<TodoContainer />
	</div>
</Notifications>