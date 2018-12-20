<template>
  <increment-button v-on="$listeners"
                      v-bind="$attrs"
                      :amount="-1">
    <slot>-</slot>
  </increment-button>
</template>
<script>
  import IncrementButton from './IncrementButton'
  export default {
    name: "minus-button",
    components:{
      IncrementButton,
    }
  }
</script>