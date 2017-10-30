<template>
  <div>
      <ul v-show="flag">
      	 <li v-for="x in mylist" @click="ok(x)">{{x}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    props:["list","key1","flag"],
    computed:{
    	  mylist(){
    	  	   if(this.key1==""){
    	  	   	return [];
    	  	   }
    	  	  return this.list.filter(function(x){
    	  	  	 return   x.indexOf(this.key1)!=-1
    	  	  }.bind(this))
    	  }
    },
    methods:{
    	  ok(x){
    	  	 this.$emit("confirm",x);
    	  	 this.$emit("visi",false);
    	  }
    }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
