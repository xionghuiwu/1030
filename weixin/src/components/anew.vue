<template>
	<div>
		<p>anew</p>
		<p>{{x}}</p>
		<p @click="rtn">返回</p>
	</div>
</template>

<script>
	export default {
		computed:{
			x(){
				return this.$route.params.x;
			}
		},
		methods:{
			rtn(){
				return this.$router.go(-1);
			}
		}
	}
</script>

<style>
</style>