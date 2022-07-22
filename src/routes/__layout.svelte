<script>
	import '$lib/styles/app.scss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>keziah</title>
</svelte:head>

<div class="container">
	<Header />
	<div><slot /></div>
	<Footer />
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner:wght@400;500&family=Signika+Negative:wght@300;600&display=swap');

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
