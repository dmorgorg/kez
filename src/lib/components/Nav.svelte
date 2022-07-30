<script>
	import { page } from '$app/stores';
</script>

<ul>
	<li class:active={$page.url.pathname === '/'}><a href='/'>Home</a></li>
	<li class:active={$page.url.pathname === '/demo'}><a href='/demo'>Demo</a></li>
	<li class:active={$page.url.pathname === '/resume'}><a href='/resume'>Resum&eacute;</a></li>
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
			color: var(--secondary);

			&.active,
			&:hover{
				color: white;
			}
        }
	}

	a {
		&:link,
		&:visited,
		&:active {
			text-decoration: none;
			color: inherit;
        }		
		/* &:hover {
			color: white;
		} */
	}
</style>
