<!-- src/lib/components/Header.svelte  -->

<script>
    let title = "Keziah Hobbs";
    let subtitle = "Voice Actor"
</script>

<header>
	<a href="/" sveltekit:prefetch >
		<div>{title}</div>
        <div>{subtitle}</div>
	</a>
</header>