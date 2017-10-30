<template>
  <div>
     <input type="text" v-model="msg" @input="input" />
  </div>
</template>

<script>
export default {
  props:["pdata"],
  data () {
    return {
      msg: ''
    }
  },
  watch:{
  	pdata(n){
  		 this.msg=n;
  	}
  },
  methods:{
  	  input(){
  	  	   this.$emit("txtchange",this.msg);
  	  	   this.$emit("visi",true);
  	  	  
  	  }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
