import PromiseInject from "../PromiseInject"

export default {
  data(){
    return {
      thing:"Hello World",
    }
  },
  methods:{
    handlePromise:function(resolve, reject){
      this.$on('button-push', resolve)
    },
    buttonClick:function(){
      this.$emit('button-push', this.thing)
    }
  },
  components:{
    PromiseInject
  },
  provide:function(){
    return {
      promise: new Promise(this.handlePromise)
    }
  }
}