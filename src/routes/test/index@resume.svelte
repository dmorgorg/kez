<script>
	let title = 'Keziah Hobbs';
	let subtitle = 'Voice Actor';
</script>

<main>
	<header>
		<a href="/"><img src="/images/kat.jpg" alt="kat" /></a>
		<div class="right-matter">
			<section>
				<h1>Executive Summary</h1>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem animi nihil facilis?
			</section>
			<section>
				<h1>Contact</h1>
				Email:<a class="mail" href="mailto:k@keziah.ca">k@keziah.ca</a>
			</section>
		</div>
		<aside>
			<p>
				<a class="title" href="/" sveltekit:prefetch>
					<h1>{title}</h1>
				</a>
			</p>
			<p>{subtitle}</p>
		</aside>
	</header>
	<div class="horizontal-bar" />
	<div class="colored-box">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam minus cum itaque magni eveniet corporis sequi? At, ex! Nesciunt vel suscipit fugiat fugit doloribus, quod aspernatur! Delectus, quod blanditiis.</div>
</main>

<style lang="scss">
	main {
		width: 42.5em;
		height: 50em;
		box-shadow: 0 0 5px 3px var(--secondary-light);
		border-radius: 5px 2em 5px 5px;
		margin: 1em auto;

		header {
			height: 15em;
			background-color: var(--primary);
			border-radius: 5px 2em 0 0;
			display: flex;
			position: relative;

			aside {
				position: absolute;
				top: 6em;
				left: 0;
				writing-mode: vertical-rl;
				color: var(--secondary-light);
				transform: rotate(180deg);
				font-variant: small-caps;

				p {
					/* font-size: 150%; */
					padding: 0;
					margin: 0;

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
						font-size: 120%;
						margin-right: -1em;
						color: var(--secondary);
					}
				}
			}

			img {
				margin-left: 5em;
				height: 100%;
			}

			.right-matter {
				padding: 1em;
				margin: 0 2em;
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				color: var(--secondary-light);

				h1 {
					margin: 0;
					padding: 0;
					font-variant: small-caps;
				}

				a.mail {
					color: var(--secondary-light);
					font-family: 'Courier New', Courier, monospace;
					text-decoration: none;
				}
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
	}
</style>
