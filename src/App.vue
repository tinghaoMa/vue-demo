<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<h1 v-if="awesome">Vue is awesome!</h1>
		<h1 v-else @click="handleClick('hi')">Oh no 😢</h1>
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
		<input type="checkbox" id="checkbox" v-model="checked">
		<label for="checkbox">{{ checked }}</label>
		<div>{{content}}</div>
		<button-counter :content="hello"></button-counter>
		<todo-item @childRemove="childRemove"></todo-item>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	const TodoItem={
		props:['age'],
		template:'<h3 @click="removeClick">Hello 我是局部组件 click 向父组件传递信息</h3>',
		methods:{
			removeClick(){
				this.$emit('childRemove')
			}
		}
	}

	export default {
		name: 'app',
		components: {
			HelloWorld,
			TodoItem
		},
		data() {
			return {
				awesome: false,
				type: 'B',
				checked: false,
				content: '默认值',
				hello:'我是全局组件'
			}
		},
		methods: {
			handleClick(event) {
				alert('handleClick param = ' + event)
			},
			childRemove(){
				console.log('子组件向父组件传递信息  childRemove');
			}
		},
		mounted() {
			console.log('App.vue mouted');
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
