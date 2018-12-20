import ReactiveInject from "../ReactiveInject"

export default {
  data() {
    return {
      parentMessage: "Hello World",
    }
  },
  methods: {
    getParentMessage() {
      return this.parentMessage;
    },
    setParentMessage(data) {
      this.parentMessage = data;
    },
  },
  provide() {
    return {
      getParentMessage: this.getParentMessage,
      setParentMessage: this.setParentMessage
    }
  },
  components: {
    ReactiveInject
  },
}