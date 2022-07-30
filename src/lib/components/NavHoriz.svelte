<ul>
	<li><a href="/">Home</a></li>

	<li><a href="/demo">Demo</a></li>

	<li><a href="/resume">Resum&eacute;</a></li>
</ul>

<style lang="scss">
	ul {
		display: flex;
		justify-content: flex-end;
		align-content: center;
		list-style-type: none;
		margin: 0;
		margin-right: 0.5em;
		font-size: 1em;
		padding: 0.5em 0.5em 0 0;

		li {
			margin: 0;
			text-align: right;
			margin-right: 1em;
			margin-bottom: -0.5em;
		}
	}

	a {
		&:link,
		&:visited,
		&:active {
			text-decoration: none;
			color: var(--secondary-light);
		}
		&:hover {
			color: var(--primary);
			/* text-shadow: 0 0 10px var(--secondary-light); */
		}
	}
</style>
