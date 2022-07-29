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
	<main><slot /></main>
	<Footer />
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner:wght@400;500&family=Signika+Negative:wght@300;600&display=swap');

	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;

		main {
			overflow-y: auto;

			-webkit-mask-image: linear-gradient(
				to bottom,
				transparent 0.5em,
				red 1.25em,
				red 94%,
				transparent 98%
			);
			mask-image: linear-gradient(to bottom, transparent 0.25, red 1.25, red 95%, transparent 99%);

			padding-top: 1em;
		}
	}
</style>
