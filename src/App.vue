<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<h1 v-if="awesome">Vue is awesome!</h1>
		<h1 v-else>Oh no 😢</h1>
		<div v-if="Math.random() > 0.5">
			Now you see me
		</div>
		<div v-else>
			Now you don't
		</div>
		<div v-if="type === 'A'">
			A
		</div>
		<div v-else-if="type === 'B'">
			B
		</div>
		<div v-else-if="type === 'C'">
			C
		</div>
		<div v-else>
			Not A/B/C
		</div>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'

	export default {
		name: 'app',
		components: {
			HelloWorld
		},
		data() {
			return {
				awesome: false,
				type:'B'
			}
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
