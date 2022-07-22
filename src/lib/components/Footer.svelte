<!-- src/lib/components/Footer.svelte  -->
<script>
	let copy = 'keziah hobbs';
	let year = '2022';
</script>

<footer>&copy; {copy} &nbsp;{year}</footer>

<style lang="scss">
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
        color: var(--primary);
        font-weight: bold;
		/* background-color: var(--primary); */
        padding: 0.25em;
		/* border-top: 3px solid var(--secondary); */
		/* margin-top: 1em; */
	}
</style>