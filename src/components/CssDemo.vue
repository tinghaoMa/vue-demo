<style>
	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 3s;
	}

	.fade-leave-to {
		opacity: 0;
	}

	.fade-leave-active {
		transition: opacity 3s;
	}
</style>

<template>
	<div>
		<h2>Vue中的css动画</h2>
		<transition name="fade">
			<div v-if="show">我是过度的动画</div>
		</transition>
		<button @click="handleBtnClick">begin</button>
	</div>
</template>

<script>
	export default {
		name: 'CssDemo',
		data: function() {
			return {
				show: true
			}
		},
		components: {

		},
		methods: {
			handleBtnClick() {
				this.show = !this.show
			}
		}
	}
</script>
