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
		<table>
			<tbody>
				<!-- <row></row>
				<row></row>
				<row></row> -->
				<tr is="row"></tr>
				<tr is="row"></tr>
				<tr is="row"></tr>
			</tbody>
		</table>

		<div ref="hello" @click="handleRefClick">
			hello world ref 引用
		</div>
		<!-- <check-props :content='1'></check-props> -->
		<check-props content='参数正确' name='必传参数' :age='20'></check-props>
		<native-click @click.native='handleNativeClick'></native-click>
		<child-msg content='hello'></child-msg>
		<child-msg content='world'></child-msg>
		<child>
			<p slot="header">Slot 插槽从父组件传递Dom到子组件 HEADER</p>
			<p slot="footer">Slot 插槽从父组件传递Dom到子组件 FOOTER</p>
		</child>
	</div>

</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	const TodoItem = {
		props: ['age'],
		template: '<h3 @click="removeClick">Hello 我是局部组件 click 向父组件传递信息</h3>',
		methods: {
			removeClick() {
				this.$emit('childRemove', '向父组件发射事件 我被删除了')
			}
		}
	}

	const row = {
		template: '<tr><td>this is a row</td></tr>'
	}

	const CheckProps = {
		props: {
			content: [String, Number],
			name: {
				type: String,
				required: true
			},
			city: {
				type: String,
				required: false,
				default: 'default value'
			},
			age: {
				type: Number,
				validator: (value) => {
					return value >= 20
				}
			}
		},
		template: '<div style="color:green"> 父组件向子组件传递属性进行校验: {{content}} 必传参数:{{name}} 默认参数:{{city}} age: 校验参数取值范围</div>'
	}

	const NativeClick = {
		template: '<div style="color:blue;text-align:center">点击直接触发原生事件</div>'
	}

	const ChildMsg = {
		props: {
			content: String
		},
		data: function() {
			return {
				selfContent: this.content
			}
		},
		template: '<div style="color:red;text-align:center" @click="handleChildMsg">组件间传递消息Vue Bus {{selfContent}}</div>',
		methods: {
			handleChildMsg() {
				this.bus.$emit('change', this.selfContent)
			}
		},
		mounted() {
			this.bus.$on('change', (value) => {
				console.log('bus change ' + value)
				this.selfContent = value
			})
		}
	}

	const child = {
		template: `<div>,
					<slot name='header'>
						<h1>默认的HEADER</h1>
					</slot>
					<p>hello slot 内容</p>
					<slot name='footer'></slot>
				   </div>`
	}

	export default {
		name: 'app',
		components: {
			HelloWorld,
			TodoItem,
			row,
			CheckProps,
			NativeClick,
			ChildMsg,
			child
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
			},
			handleRefClick() {
				console.log(this.$refs.hello.innerHTML);
			},
			handleNativeClick() {
				alert('点击组件直接触发父组件原生方法')
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
