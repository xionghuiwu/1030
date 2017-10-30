import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Weixin from '@/components/weixin'
import Anew from '@/components/anew'
import Imge from '@/components/imge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },{
    	path: '/Weixin',
    	component: Weixin
    },{
    	path:"*",
    	redirect:{"name":'Hello'}
    },{
    	path:"/Anew/:x",
    	component: Anew
    },{
    	path:"/Imge/:abc",
    	component: Imge
    }
  ]
})
