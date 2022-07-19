<script>
   import '$lib/styles/app.scss'; 
   import Header from '$lib/components/Header.svelte'
</script>

<svelte:head>
	<title>keziah</title>
</svelte:head>



<div class="container">
    <Header />
    <slot />
    footer
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
	}
</style>