import ReactiveInject from "../ReactiveInject"

export default {
  data(){
    return {
      thing: "Hello World",
    }
  } ,
  methods: {
    getThing() {
      return this.thing;
    },
    setThing(data) {
      this.thing = data;
    },
  },
  provide () {
    return {
      getThing:this.getThing,
      setThing:this.setThing
    }
  },
  components: {
    ReactiveInject
  },
}