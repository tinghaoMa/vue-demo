import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import animated from './animate.css' // npm install animate.css --save安装，在引入
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

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

Vue.component('jsx-example', {
  render: function (createElement) {
    return createElement(
      'div' 	
    ,['hello world',
	  this.name
	])
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
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
