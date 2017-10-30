<template>
  <div id="app">
  	<header>
  		
  			<span>微信</span>
  			<span>○</span>
  			<span class="tianjia right">＋</span>
  		
  	</header>
  	<section>
  		
  	</section>
  	<footer>
  		<router-link class="foo" to="/weixin">微信</router-link>
   		<router-link class="foo" to="/weixin">通信录</router-link>
   		<router-link class="foo" to="/Hello">发现</router-link>
   		<router-link class="foo" to="/Hello">我的</router-link>
  	</footer>  
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
right{ float: right; }
html,body{ width: 100%; height: 100%;}
body{
	margin: 0;
	padding: 0;
	position: relative;
	padding-top: 50px;
	padding-bottom:50px;
	box-sizing: border-box;
	
}
#app header{
	width: 100%;
	height: 50px;
	line-height: 50px;
	background: #000;
	font-size: 16px;
	display: flex;
	color: #FFFFFF;
	position: absolute;
	top: 0;
}
#app header span{
	flex: 1;	
}
#app header:nth-child(1) >span{	padding-left: 10px;}


#app section{
	width: 100%;
	height: 100%;
	overflow: hidden;
}
#app footer{
	width: 100%;
	height: 50px;
	line-height: 50px;
	background: #fff;
	border-top:1px solid #CCCCCC;
	font-size: 16px;
	display: flex;
	position: absolute;
	bottom: 0;
	text-align: center;
}
#app footer .foo{
	flex: 1;
	color: #ccc;
}
</style>
