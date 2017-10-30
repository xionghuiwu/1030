<template>
  <div id="app">
   		<!--<my-txt :pdata="keyword" @txtchange="change" @visi="visi"></my-txt>
   		<list :list="list" :flag="vis" :key1="keyword" @confirm="ok" @visi="visi"></list>-->
   		<my-txt></my-txt>
   		<list></list>
  </div>
</template>

<script>
import MyTxt from "@/components/MyTxt2"
import List from "@/components/list2"
export default {
	created(){
	   this.$store.dispatch("getBaiduData");
	},
  components:{
  	 MyTxt,List
  }
}
</script>

<style>


</style>
