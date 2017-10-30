<template>
	<div>
		<p>imge</p>
		<p>{{abc}}</p>
		<button @click="fan">←</button>
		
	</div>
</template>

<script>
	export default {
		computed:{
			abc(){
				return this.$route.params.abc;
			}
		},
		methods:{
			fan(){
				return this.$router.go(-1);
			}
		}
	}
</script>

<style>
	div{
		margin: 0;
		padding: 0;
		position: relative;
	}
	button{
		position: absolute;
		top: 0;
		left: 0;
	}
</style>