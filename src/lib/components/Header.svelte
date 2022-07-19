<!-- src/lib/components/Header.svelte  -->

<script>
    import Nav from "$lib/components/Nav.svelte";
	let title = 'Keziah Hobbs';
	let subtitle = 'Voice Actor';
</script>

<header>
	<a class="left" href="/" sveltekit:prefetch>
		<div class="title">{title}</div>
		<div class="subtitle">{subtitle}</div>
        
	</a>
    <Nav />
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: start;
		align-items: center;
		font-size: 150%;
		background-color: var(--primary);
		font-variant: small-caps;
		/* border-bottom: 5px solid var(--secondary-dark); */
		/* padding: 1em 0.25em; */
		margin-bottom: 1em;
        color: var(--secondary);
        text-shadow: 0 0 5px #000000;

        a {
			&:link {
				text-decoration: none;
				color: black;
				color: var(--secondary);
                font-weight: bold;
			}

			&:visited {
				color: black;
				color: var(--secondary);
			}
        }

        .left {
            flex: 1;
        }

        .title {
            color: var(--secondary);
            font-size: 200%;
            margin-left: 1em;
            
        }
        .subtitle {
            color: var(--secondary-dark);
            font-size: 150%;
            margin-left: 1.35em;
        }
	}
</style>
