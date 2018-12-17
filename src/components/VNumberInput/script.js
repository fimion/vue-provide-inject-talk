export default {
  props: {
    value: {
      type: Number,
      required: false,
      default: undefined,
    }
  },
  inject: {
    '$_get': {
      default: function () {
        return function () {
          return this.value
        }
      },
    },
    '$_set': {
      default: function () {
        return function (data) {
          this.$emit('input', parseInt(data))
        }
      }
    }
  },
}