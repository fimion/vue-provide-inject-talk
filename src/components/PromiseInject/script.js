export default {
  name: "promise-inject",
  data: function () {
    return {
      thing: 'I am waiting on a promise!'
    }
  },
  methods: {
    changeThing: function (response) {
      this.thing = response
    }
  },
  inject: ['promise'],
  mounted: function () {
    this.promise.then(this.changeThing)
  }
}