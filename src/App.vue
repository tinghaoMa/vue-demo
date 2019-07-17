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
		<div v-text="str"></div>
		<div v-html="str"></div>
		<div>{{fullName}}</div>
		<h3 :class="{activated : isActivated}" @click="handleChangeColor">样式绑定class</h3>
		<h3 :class="[activatedArray]" @click="handleChangeColorArray">数组绑定class</h3>
		<h3 :style="styleObj" @click="handleChangeColorStyle">style绑定样式</h3>
		<h3 :style="[styleObj,{fontSize:'20px'}]" @click="handleChangeColorStyle">style数组绑定样式</h3>
		<div>
			<template>
				<h2>template 是不会被渲染的</h2>
			</template>
		</div>
		<div v-for="(item,key,index) of people" :key="index">
			value = {{item}}---key = {{key}}--index={{index}}
		</div>
	</div>

</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	const TodoItem = {
		props: ['age'],
		template: '<h3 @click="removeClick">Hello 我是局部组件 click 向父组件传递信息</h3>',
		methods: {
			removeClick() {
				this.$emit('childRemove', '我被删除了')
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
				hello: '我是全局组件',
				str: '<h1>v-text v-html</h1>',
				firstName: 'Ma',
				lastName: 'tinghao',
				isActivated: false,
				activatedArray: "",
				styleObj: {
					color: 'blue'
				},
				people: {
					name: 'mth',
					age: 18,
					city: 'BeiJing'
				}
			}
		},
		computed: {
			fullName: {
				get: function() {
					return this.firstName + ' ' + this.lastName
				},
				set: function(param) {
					console.log(`param =${param}`)
					var aar = param.split(' ')
					this.firstName = aar[0]
					this.lastName = aar[1]
				}
			}
		},
		methods: {
			handleClick(event) {
				alert('handleClick param = ' + event)
			},
			childRemove(msg) {
				console.log('子组件向父组件传递信息  childRemove ' + msg);
			},
			handleChangeColor() {
				this.isActivated = !this.isActivated
			},
			handleChangeColorArray() {
				this.activatedArray = this.activatedArray === "activatedArray" ? '' : 'activatedArray'
			},
			handleChangeColorStyle() {
				this.styleObj.color = this.styleObj.color === 'blue' ? 'green' : 'blue'
			}

		},
		mounted() {
			console.log('App.vue mouted');
		},
		beforeUpdate() {
			console.log('beforeUpdate');
		},
		updated() {
			console.log('updated');
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

	.activated {
		color: red;
	}

	.activatedArray {
		color: green;
	}
</style>
