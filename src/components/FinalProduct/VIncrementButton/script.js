export default {
  name: 'v-increment-button',
  inject: {
    '$_increment_button': {
      default: function() {
        if (typeof this.$listeners.click === 'function') {
          return function (e) {
            this.$emit('click', e)
          }
        } else {
          throw new Error("VIncrementButton needs either "
              + "$_increment_button() provided or an @click listener.")
        }
      }
    }
  },
  props: {
    amount: {
      type: Number,
      required: true,
    }
  },
}