<template>
  <div id="app">
    <view-box>
    	 <x-header :left-options="{showBack: false}">
    	 	<span slot="left">微信</span>
    	 	<a slot="right">搜索</a>
    	 	<a slot="right">添加</a>
    	 </x-header>
    </view-box>
  </div>
</template>

<script>
import {ViewBox,XHeader } from "vux"
export default {
  name: 'app',
  components:{
  	ViewBox,XHeader 
  }
}
</script>

<style lang="less">
	@import '~vux/src/styles/reset.less';
	html,body{
		margin: 0;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		
	}
	#app{
		height: 100%;
	}

</style>
