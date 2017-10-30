import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		list:["aa","ab","ca","dd","dfd","cd"],
		keyword:'d',
		vis:false
	},
	mutations:{
		changekeyword(state,v){
			state.keyword=v;			
		},
		changeVis(state,v){
			state.vis=v;
		}
	}
})
