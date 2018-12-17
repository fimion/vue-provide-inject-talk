import VNumberInput from '../VNumberInput'
import VPlusButton from '../VPlusButton'
import VMinusButton from '../VMinusButton'
export default {
  name:"v-quantity",
  props:{
    value:{
      type:Number,
      required:true,
    }
  },
  components:{VNumberInput,VPlusButton,VMinusButton},
  methods:{
    getValue:function(){
      return this.value
    },
    setValue:function(data){
      this.$emit('input',data)
    },
    incrementValue:function(amount){
      this.setValue(this.value + amount)
    }
  },
  provide:function(){
    return {
      '$_set':this.setValue,
      '$_get':this.getValue,
      '$_increment':this.incrementValue,
    }
  }
}