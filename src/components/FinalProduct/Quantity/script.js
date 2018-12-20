import NumberInput from '../NumberInput'
import PlusButton from '../PlusButton'
import MinusButton from '../MinusButton'
export default {
  name:"quantity",
  props:{
    value:{
      type:Number,
      required:true,
    }
  },
  components:{NumberInput,PlusButton,MinusButton},
  methods:{
    getValue:function(){
      return this.value
    },
    setValue:function(data){
      this.$emit('input',parseInt(data))
    },
    incrementValue:function(amount){
      this.setValue(this.value + amount)
    }
  },
  provide:function(){
    return {
      '$_input_set':this.setValue,
      '$_input_get':this.getValue,
      '$_increment_button':this.incrementValue,
    }
  }
}