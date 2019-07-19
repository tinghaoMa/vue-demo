<template>
	<div>
		<home-header></home-header>
		<div>name = {{name}} age ={{age}}</div>
	</div>

</template>

<script>
	import HomeHeader from './components/Header.vue'
	import axios from 'axios'

	export default {
		name: 'Home',
		components: {
			HomeHeader
		},
		data: () => {
			return {
				name: 'body content',
				age: 0
			}
		},
		methods: {
			getHomeInfo() {
				axios.get('http://rap2api.taobao.org/app/mock/94657/getHomeInfo').then(res => {
					const {
						data
					} = res
					console.log('axios 请求');
					console.log(data);
					this.name = data.data.name
					this.age = data.data.age
				})
				fetch('http://rap2api.taobao.org/app/mock/94657/getHomeInfo')
					.then(function(response) {
						return response.json()
					}).then(function(myJson) {
						console.log('fetch 请求');
						console.log(myJson);
					});

			}
		},
		mounted() {
			this.getHomeInfo()
		}
	}
</script>

<style>

</style>
