<main>
	<section>
		<section>
			<h1>Animation</h1>
			<h1>Advertising</h1>
			<h1>Loop Group</h1>
			<h1>Voice Over</h1>
			<h1>Corporate</h1>
		</section>
		<div class="image"><img src="/images/kat.jpg" alt="kat" /></div>
	</section>

	<blockquote>
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi culpa quos in minima nihil
		fugiat."
	</blockquote>
</main>

<style lang="scss">
	blockquote {
		margin-left: 2em;
		background-color: var(--secondary-light);
		padding: 1em;
		/* font-style: italic; */
		border-left: 0.25em solid var(--primary);
		margin-top: 2em;
		color: black;
		font-family: 'Edu TAS Beginner';
	}

	.image {
		width: 40%;
		margin-right: 2em;
	}

	img {
		width: 100%;
		height: auto;
	}

	.image {
		width: 50%;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-content: center;
		margin: 0 1em;
		padding-top: 1.5em;
		/* padding: 0 calc(50vw - 15em); */

		-webkit-mask-image: linear-gradient(
			to bottom,
			transparent 0,
			red 5%,
			red 95%,
			transparent 100%
		);
		mask-image: linear-gradient(to bottom, transparent 1%, red 5%, red 95%, transparent 99%);

		section {
			/* border: 2px solid red; */

			section { 
				/* border: 2px solid blue; */
				flex: 1;
			}
		}
	}

	section {
		display: flex;
		justify-content: space-between;
		align-content: space-around;

		section {
			display: flex;
			flex-direction: column;
		}
	}
</style>
