export default {
  props: {
    value: {
      type: Number,
      required: false,
      default: undefined,
    }
  },
  inject: {
    '$_input_get': {
      default: function () {
        return function () {
          return this.value
        }
      },
    },
    '$_input_set': {
      default: function () {
        if(typeof this.$listeners.input == 'function'){
          return function (data) {
            this.$emit('input', parseInt(data))
          }
        }else{
          throw new Error("VNumberInput requires either "+
          "$_input_set() provided or an @input handler")
        }
      }
    }
  },
}