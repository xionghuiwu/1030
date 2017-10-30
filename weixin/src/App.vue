<template>
  <div id="app">
		<view-box>
			<x-header title="use prop:title"></x-header>
		</view-box>
  </div>
</template>

<script>
import {ViewBox,XHeader } from "vux"
export default {
	name:'app',
	components:{
		ViewBox,XHeader 
	}		
}
</script>

<style lang="less">
	html,body{
		@import '~vux/src/styles/reset.less';
		margin: 0;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
	}
	#app{
		height: 100%;
	}

</style>
