import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router'
import animated from './animate.css' // npm install animate.css --save安装，在引入
import './assets/styles/reset.css'

Vue.config.productionTip = false

Vue.prototype.bus = new Vue()
// 使用Animate.css
Vue.use(animated)

// 定义一个名为 button-counter 的新组件
Vue.component('ButtonCounter', {
	props: ['content'],
	data: function() {
		return {
			count: 0,
		}
	},
	template: '<button v-on:click="count++">You clicked me {{ count }} times.{{content}}</button>'
})


const vm = new Vue({
	el: '#app',
	router,
	render: h => h(App),
	beforeCreate() {
		console.log('beforeCreate');
	},
	created() {
		console.log('created');
	},
	beforeMount() {
		console.log(this.$el);
		console.log('beforeMount');
	},
	mounted() {
		console.log(this.$el);
		console.log('mounted');
	},
	beforeDestroy() {
		console.log('beforeDestory');
	},
	destroyed() {
		console.log('destroyed');
	},
	beforeUpdate() {
		console.log('beforeUpdate');
	},
	updated() {
		console.log('updated');
	}

})

window.vm = vm
