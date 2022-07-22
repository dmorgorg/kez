<script>
	import '$lib/styles/app.scss';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>keziah</title>
</svelte:head>

<div class="container">
	<div><slot /></div>
	<Footer />
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;

		div {
			overflow-y: auto;
		}
	}
</style>