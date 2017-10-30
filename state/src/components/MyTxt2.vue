<template>
  <div>
     <input type="text" v-model="msg" @input="input" />
  </div>
</template>

<script>
export default {
 
  data () {
    return {
      msg: ''
    }
  },
  computed:{
  	  xx(){
  	  	 return this.$store.state.keyword;
  	  }
  },
  watch:{
     xx(n){
     	  this.msg=n;
     }
  },
  methods:{
  	  input(){
  	  	 this.$store.commit("changeKeyword",this.msg);
  	  	 this.$store.commit("changeVis",true);
  	  }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
