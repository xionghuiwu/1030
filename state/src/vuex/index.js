import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from "vue-resource"
Vue.use(Vuex)
Vue.use(VueResource);

export default new Vuex.Store({
	state:{
		list:["aa","cc","dd","dd","cad"],
		keyword:'',
		vis:false
		
	},
	mutations:{
		  changeKeyword(state,v){
		  	  state.keyword=v;
		  },
		  changeVis(state,v){
		  	state.vis=v;
		  },
		  getData(state,v){
		  
		  	state.list=v;
		  }		  
	},
	actions:{		
		 getBaiduData(context){
		 
		 	Vue.http.jsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=s",{
		 		'jsonp':'cb'
		 	}).then(function(data){
		 		
		 		context.commit("getData",data.data.s);
		 	})
		 }
		   
	}
	
})
