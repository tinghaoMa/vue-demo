<style>
	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}

		50% {
			transform: scale(1.5);
		}

		100% {
			transform: scale(1);
		}
	}

	.active {
		transition-origin: left center;
		animation: bounce-in 1s;
	}

	.leave {
		transition-origin: left center;
		animation: bounce-in 1s reverse;
	}

	/* .fade-enter-active {
		transition-origin: left center;
		animation: bounce-in 1s;
	}

	.fade-leave-active {
		transition-origin: left center;
		animation: bounce-in 1s reverse;
	} */


	/* 	.fade-enter {
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
	} */
</style>

<template>
	<div>
		<h2>Vue中的css动画 && Animated.css库使用</h2>
		<!-- 		<transition name="fade">
			<div v-if="show">我是过度的动画</div>
		</transition> -->
		<transition name="fade" 
			enter-active-class='animated swing' 
			leave-active-class='animated shake'>
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
