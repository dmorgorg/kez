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

<style lang='scss'>
	blockquote {
		margin-left: 2em;
		background-color: var(--secondary-light);
		padding: 1em;
		font-style: italic;
		border-left: 0.25em solid var(--primary);
		margin-top: 5em;
		color: black;
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
        margin: 0 3em;
        padding: 0 calc(50vw - 19em);
		border: 1px solid green;
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
