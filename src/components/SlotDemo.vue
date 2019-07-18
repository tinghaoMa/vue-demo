<template>
	<div>
		<h2>SlotDemo</h2>
		<child>
			<template slot-scope='props'>
				<li>作用于插槽 {{props.item}}</li>
			</template>
		</child>
		
	</div>
</template>

<script>
	const child = {
		data: function(){
			return {
				list: [1, 2, 3, 4]
			}
		},
		template: `<div>
				    <ul>
						<slot 
						v-for='item of list'
						:item=item
						>
						</slot>
				    </ul>	
			      </div>`
	}

	export default {
		name: 'SlotDemo',
		components: {
			child
		}
	}
</script>

<style>

</style>
