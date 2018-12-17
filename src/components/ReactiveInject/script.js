export default {
  data() {
    return {}
  },
  computed: {
    thing: {
      get: function () {
        return this.getThing()
      },
      set: function (d) {
        this.setThing(d)
      },
    }
  },
  inject: ["getThing", "setThing"],
}