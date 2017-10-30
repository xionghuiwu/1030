<template>
	<div>
		<ul>
			<li v-for="x in mylist">{{x}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:["list","key1"],
		computed:{
			mylist(){
				if(this.key1==""){
					return [];
				}
				return this.list.filter(function(x){
					return x.indexOf(this.key1)!=-1
				}.bind(this))
			}
		},
		methods:{
			
		}
	}
</script>

<style>
</style>