<ul>
	<li><a href='/'>Home</a></li>

	<li><a href='/demo'>Demo</a></li>

	<li><a href='/about'>Resum&eacute;</a></li>
</ul>

<style lang="scss">
	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-content: flex-end;
        list-style-type: none;
        margin-right: 1em;
        font-size: 1em;
		margin: 0;
		padding: 0.5em 1em;

        li {
            margin: 0.125em 0;
        }
	}

	a {
		&:link,
		&:visited,
		&:active {
			text-decoration: none;
			color: var(--secondary);
        }		
		&:hover {
			color: white;
		}
	}
</style>
