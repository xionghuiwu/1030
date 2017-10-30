<template>
  <div id="app">
		<view-box>
			<x-header title=""></x-header>
			<!--<br>
    	<x-header :left-options="{showBack: false}">do not show Back</x-header>
    	<br>
    	<x-header :left-options="{backText: '微信'}"></x-header>
    	<br>
    	<x-header :right-options="{showMore: true}" @on-click-more="showMenus = true">with more menu</x-header>
    	<br>
	    <x-header>with right link<a slot="right">Feedback</a></x-header>
	    <br>
	    <x-header :left-options="{backText:'微信'}">long long long long long long long text<a slot="right">Feedback</a></x-header>
	    <br>
	    <x-header>with left slot<a slot="left">Close</a></x-header>
	    <br>
	    <x-header>
	      <span>overwrite-left</span>
	      <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
	    </x-header>-->
			<tab :line-width="1" custom-bar-width="60px">
	      <tab-item selected>已发货</tab-item>
	      <tab-item>未发货</tab-item>
	      <tab-item>全部订单</tab-item>
	    </tab>
			
			<tabbar>
	      <tabbar-item badge="99">
	        <img slot="icon" src="assets/logo.png">
	        <span slot="label">微信</span>
	      </tabbar-item>
	      <tabbar-item show-dot>
	        <img slot="icon" src="">
	        <span slot="label">通讯录</span>
	      </tabbar-item>
	      <tabbar-item selected link="/component/demo">
	        <img slot="icon" src="">
	        <span slot="label">发现</span>
	      </tabbar-item>
	      <tabbar-item badge="2">
	        <img slot="icon" src="">
	        <span slot="label">我</span>
	      </tabbar-item>
	    </tabbar>
		</view-box>		
  </div>
</template>

<script>
import { ViewBox,XHeader,Tabbar, TabbarItem ,Tab, TabItem,Swiper    } from "vux"
export default {
  name: 'app',
  components:{
  	ViewBox,XHeader,Tabbar, TabbarItem,Tab, TabItem,Swiper
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
