<script>
   import '$lib/styles/app.scss'; 
   import Header from '$lib/components/Header.svelte'
   import Footer from '$lib/components/Footer.svelte'
</script>

<svelte:head>
	<title>keziah</title>
</svelte:head>



<div class="container">
    <Header />
    <div><slot /></div>
    <Footer />
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;

        div {
            width: 60%;
            margin: 0 auto;
        }
	}
    
</style>