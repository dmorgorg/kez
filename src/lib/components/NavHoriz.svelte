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
		justify-content: flex-end;
		align-content: center;
		list-style-type: none;
		margin: 0;
		margin-right: 0.5em;
		font-size: 1em;
		padding: 0.5em 0.5em 0 0;
		font-variant: small-caps;

		li {
			margin: 0;
			text-align: right;
			margin-right: 1em;
			margin-bottom: -0.5em;
			color: var(--secondary-light);

			&.active,
			&:hover {
				color: var(--primary);
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
		
	}
</style>
