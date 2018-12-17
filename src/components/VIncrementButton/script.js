export default {
  name:'v-increment-button',
  inject: {
    '$_increment': {
      default: () => function (e) {
        if (typeof this.$listeners.click === 'function') {
          this.$emit('click', e)
        } else {
          throw "v-increment-button needs either "
          + "$_increment provided or a @click listener."
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