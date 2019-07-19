<template>
	<div class="header">{{name}}</div>
</template>

<script>
	export default {
		name: 'HomeHeader',
		data: () => {
			return {
				name: 'I am Header'
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.header
		color #FF0000
		font-size 20px
</style>
