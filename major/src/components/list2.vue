<template>
	<div>
		<ul v-show="flag">
			<li v-for="x in mylist" @click="ok(x)">{{x}}</li>
		</ul>
	</div>
</template>

<script>
	export default {		
		
		computed:{
			flag(){
				return this.$store.state.vis;
			},
			mylist(){
				if(this.$store.state.keyword==""){
					return [];
				}
				return this.$store.state.list.filter(function(x){
					return x.indexOf(this.$store.state.keyword)!=-1
				}.bind(this))
			}
		},
		methods:{
			ok(x){
				this.$store.commit("changeKeyword",x);
				this.$store.commit("changeVis",false);
			}
		}
	}
</script>

<style>
</style>