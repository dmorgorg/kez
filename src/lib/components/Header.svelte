<!-- src/lib/components/Header.svelte  -->
<script>
	import Nav from '$lib/components/Nav.svelte';
	let title = 'Keziah Hobbs';
	let subtitle = 'Voice Actor';
</script>

<header>
	<div class="leftmatter">
		<a class="title" href="/" sveltekit:prefetch>
			{title}
		</a>
		<div class="subtitle">{subtitle}</div>
	</div>

	<Nav />
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--primary);
		font-variant: small-caps;
		color: var(--secondary);
		text-shadow: 0 0 5px black;
		margin-bottom: 1em;
		font-family: 'Signika Negative', sans-serif;
	

		.leftmatter {
			margin-left: 1em;
		}

		a {
			&:link,
			&:visited,
			&:active {				
					color: var(--secondary);
					font-weight: bold;
					font-size: 200%;
					text-decoration: none;				
			}
			&:hover {
				color: white;
			}
		}

		.title {
			font-family: 'Signika Negative', sans-serif;
		}
	}
</style>
