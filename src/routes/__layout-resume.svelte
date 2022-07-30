<script>
	import '$lib/styles/app.scss';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>keziah: resum&eacute;</title>
</svelte:head>

<div class="container">
	<slot />
	<Footer />
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
	}
</style>
