<template>
	<div>
		<h2>DynamicComponent 动态组件</h2>
		<h3>v-once指令保存在内存里面提高性能</h3>
		<!-- <component :is="type"></component> -->
		<child-one v-if="type ==='ChildOne'"></child-one>
		<child-two v-if="type ==='ChildTwo'"></child-two>
		<button @click="handleBtnClick">Change</button>
	</div>
</template>

<script>
	const ChildOne = {
		template: '<div v-once>我是动态组件1号</div>'
	}

	const ChildTwo = {
		template: '<div v-once>我是动态组件2号</div>'
	}

	export default {
		name: 'DynamicComponent',
		data: function() {
			return {
				type: 'ChildOne'
			}
		},
		components: {
			ChildOne,
			ChildTwo,
		},
		methods: {
			handleBtnClick() {
				this.type = this.type === 'ChildOne' ? 'ChildTwo' : 'ChildOne'
				console.log(this.type)
			}
		}
	}
</script>

<style>

</style>
