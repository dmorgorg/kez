<ul>
	<li><a href='/'>Home</a></li>

	<li><a href='/demo'>Demo</a></li>

	<li><a href='/resume'>Resum&eacute;</a></li>
</ul>

<style lang="scss">
	ul {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-content: flex-end;
        list-style-type: none;
		margin: 0;
        margin-right: 0.5em;
        font-size: 1em;
		/* margin: 0; */
		padding: 0.5em 1em;

        li {
            margin: 0;
			text-align: right;
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
