<template>
	<div>
		<h2>DynamicComponent 动态组件</h2>
		<component :is="type"></component>
		<button @click="handleBtnClick">Change</button>
	</div>
</template>

<script>
	const ChildOne = {
		template: '<div>我是动态组件1号</div>'
	}

	const ChildTwo = {
		template: '<div>我是动态组件2号</div>'
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
