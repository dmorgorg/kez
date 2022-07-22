<script>
	let title = 'Keziah Hobbs';
	let subtitle = 'Voice Actor';
</script>

<header>
	<img src="/images/kat.jpg" alt="kat" />
	<aside>
		<p>
			<a class="title" href="/" sveltekit:prefetch>
				{title}
			</a>
		</p>

		<p>{subtitle}</p>
	</aside>
</header>

<div class="horizontal-bar"></div>

<div class="colored-box">
	content
</div>

<style lang="scss">
	header {
		height: 15em;
		background-color: var(--primary);
		font-variant: small-caps;
		line-height: 0.1em;
		display: flex;

		aside {
			position: absolute;
			top: 6em;
			left: 1em;
			writing-mode: vertical-rl;
			color: var(--secondary-light);
			transform: rotate(180deg);

			p {
				font-size: 150%;

				a {
					&:link,
					&:visited,
					&:active {
						color: var(--secondary);
						font-weight: bold;
						text-decoration: none;
					}
					&:hover {
						color: white;
					}
				}

				& + p {
					font-size: 100%;
					margin-top: 0;
					padding-top: 0;
					color: var(--secondary);
				}
			}
		}
		img {
			margin-left: 5em;
		}
	}
	.horizontal-bar {
		height: 1em;
		margin: 0 1em 1em 1em;
		border-bottom: 0.2em solid var(--primary);
	}
	.colored-box {
		width: 45%;
		margin: 0 1em;
		padding: 1em;
		background-color: var(--secondary-light);
		font-size: 80%;
	}
</style>
