import Vue from 'vue/dist/vue.js'
import App from './App.vue'

Vue.config.productionTip = false

// 定义一个名为 button-counter 的新组件
Vue.component('ButtonCounter', {
	props:['content'],
	data: function() {
		return {
			count: 0,
		}
	},
	template: '<button v-on:click="count++">You clicked me {{ count }} times.{{content}}</button>'
})


new Vue({
	el: '#app',
	render: h => h(App)
})
