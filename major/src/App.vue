<template>
  <div id="app">
    <my-txt></my-txt>
    <list></list>
  </div>
</template>

<script>
import MyTxt from "@/components/MyTxt2"
import List from "@/components/list2"

export default {
	
  components:{
  	MyTxt,List
  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
