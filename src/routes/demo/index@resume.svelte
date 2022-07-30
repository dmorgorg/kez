<div class="container">
	<div class="resume" style="--aspect-ratio:8.5/11;">
		<div class="firstChild">
			aspect test Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe nam dolorem, error
			sapiente illo, culpa earum maiores nostrum distinctio, velit beatae harum corporis autem?
			Expedita consequuntur voluptate mollitia? Dicta, veritatis!
		</div>
	</div>
</div>

<style lang="scss">
	/* https://css-tricks.com/aspect-ratio-boxes/ */
	.container {
		padding-top: 1em;
		padding-bottom: 1em;
	}
	.resume {
		/* border: 1px solid blue; */
		box-shadow: 0 0 15px 1px var(--secondary-light);
		max-width: 42.5em;
		width: 60%;
		margin: 0 auto;
		border-radius: 5px 2.5em 5px 5px;
	}

	[style*='--aspect-ratio'] > :first-child {
		width: 100%;
	}

	[style*='--aspect-ratio'] > img {
		height: auto;
	}

	@supports (--custom: property) {
		[style*='--aspect-ratio'] {
			position: relative;
		}

		[style*='--aspect-ratio']::before {
			content: '';
			display: block;
			padding-bottom: calc(100% / (var(--aspect-ratio)));
		}
		/* without creating a first child div, text is at bottom of resume panel */
		[style*='--aspect-ratio'] > :first-child {
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
		}
        
	}
    .firstChild {
        padding: 1em;
    }
</style>
