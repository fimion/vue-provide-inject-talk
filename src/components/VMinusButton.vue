<template>
  <v-increment-button v-on="$listeners"
                      :amount="-1">
    <slot>-</slot>
  </v-increment-button>
</template>
<script>
  import VIncrementButton from './VIncrementButton'
  export default {
    name: "v-minus-button",
    components:{
      VIncrementButton,
    }
  }
</script>