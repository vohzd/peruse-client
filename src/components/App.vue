<template>
	<div>
		<h2>app works</h2>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "app"
	}
</script>

<style >

	html {
		margin: 0;
		padding: 0;
	}

	body {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: 'Armata', sans-serif;
		color: #886d5d;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
}

	h1, h2, h3, h4, h5, h6, p, ul, li {
		margin: 0;
		padding: 0;
	}

	a {
		color: #e0b49a;
		text-decoration: none;
	}

	a:hover{
		color: #81553b;
	}


</style>
