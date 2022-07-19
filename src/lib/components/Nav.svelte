<ul>
	<li><a href='/'>Home</a></li>

	<li><a href='/demo'>Demo</a></li>

	<li><a href='/about'>About</a></li>
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

        li {
            margin: 0.125em 0;
        }
	}

	a {
		&:link {
			text-decoration: none;
			color: black;
			color: var(--secondary);
        }

		&:visited {
			color: black;
			color: var(--secondary);
		}
	}
</style>
