<template lang="pug">
  .local-eg-theme-vue
    .eg-slideshow
      v-slide.flex-center
        .center.frontpage
          h1 Reactive Provide/Inject
          h4 State Management for Component Libraries
      v-slide(:steps="2" style="margin-top:20vh;")
        h2.center Who Am I?
        eg-transition(enter="fadeIn")
          .eg-slide-content(v-if="step >= 2")
            ul
              li Alex Riviere
              li Full Stack Web Developer
              li Primarily code in Python and JavaScript
      v-slide(:steps="5" style="margin-top:20vh;")
        h4.center How can we pass data between components?
        ul.eg-slide-content
          eg-transition(enter="fadeIn")
            li(v-if="step >= 2") Props/Emit
          eg-transition(enter="fadeIn")
            li(v-if="step >= 3") External Store (Vuex)
          eg-transition(enter="fadeIn")
            li(v-if="step >= 4")  this.$root/this.$parent (Not advised)
          eg-transition(enter="fadeIn")
            li(v-if="step >= 5")  Provide/Inject
      v-slide.flex-center
        h4.center $props/$emit
        .center
          img(src="./assets/props-emit-talking.png")
      v-slide.flex-center
        h4.center provide/inject
        .center
          img(src="./assets/provide-inject-talking.png")
      v-slide
        h4.center Simple Provide
        .dual-blocks
          .side
            label Template
            eg-code-block(lang="html")
              include:escape-vuejs ./components/SimpleProvide/template.html
          .side
            label Script
            eg-code-block(lang="js")
              include ./components/SimpleProvide/script.js
      v-slide
        h4.center Simple Inject
        .dual-blocks
          .side
            label Template
            eg-code-block(lang="html")
              include:escape-vuejs ./components/SimpleInject/template.html
          .side
            label Script
            eg-code-block(lang="js")
              include ./components/SimpleInject/script.js
      v-slide
        h4.center Simple Provide/Inject
        p
          simple-provide
      v-slide
        h4.center Promise Provide
        .dual-blocks
          .side
            label Template
            eg-code-block(lang="html")
              include:escape-vuejs ./components/PromiseProvide/template.html
          .side
            label Script
            eg-code-block(lang="js")
              include ./components/PromiseProvide/script.js
      v-slide
        h4.center Promise Inject
        .dual-blocks
          .side
            label Template
            eg-code-block(lang="html")
              include:escape-vuejs ./components/PromiseInject/template.html
          .side
            label Script
            eg-code-block(lang="js")
              include ./components/PromiseInject/script.js
      v-slide
        h4.center Promise Demo
        promise-provide
      v-slide
        h1.center Let's make it reactive!
      v-slide
        h1.center.compress Reactive Provide
        .dual-blocks
          .side
            label.compress Template
            eg-code-block(lang="html")
              include:escape-vuejs ./components/ReactiveProvide/template.html
          .side
            label.compress Script
            eg-code-block(lang="js")
              include ./components/ReactiveProvide/script.js
      v-slide
        h4.center.compress Reactive Inject
        .dual-blocks
          .side
            label.compress Template
            eg-code-block(lang="html")
              include:escape-vuejs ./components/ReactiveInject/template.html
          .side
            label.compress Script
            eg-code-block(lang="js")
              include ./components/ReactiveInject/script.js
      v-slide
        h4.center Reactive Demo
        reactive-provide
      v-slide(:steps="2")
        h1.center Story Time
        eg-transition(enter="fadeIn")
          h2.center(v-if="step>=2") The Quantity Input
      v-slide.flex-center
        .center
          img(src="./assets/the-boss-man.jpg")
      v-slide.flex-center
        .center
          img(src="./assets/the-innovative-designer.jpg")
      v-slide.flex-center
        .center
          img(src="./assets/the-thoughtful-designer.jpg")
      v-slide.flex-center
        .center
          img(src="./assets/the-hip-programmer.jpg")
      v-slide.flex-center
        ul
          li A Quantity Input
          li Buttons should go on either side
          li Buttons can also end up on one side
          li Base components should be usable on their own.
      v-slide.flex-center
        h1 Quantity Component
      v-slide
        h1.center.compress Quantity
        .dual-blocks
          .side
            label.compress Template
            eg-code-block(lang="html")
              include:escape-vuejs components/FinalProduct/Quantity/template.html
          .side
            label.compress Script
            eg-code-block.compress(lang="js")
              include components/FinalProduct/Quantity/script.js
      v-slide.flex-center
        h1 NumberInput
      v-slide
        h1.center.compress NumberInput
        .dual-blocks
          .side
            label.compress Template
            eg-code-block(lang="html")
              include:escape-vuejs components/FinalProduct/NumberInput/template.html
          .side
            label.compress Script
            eg-code-block.compress(lang="js")
              include components/FinalProduct/NumberInput/script.js
      v-slide.flex-center
        h1 VIncrementButton
      v-slide
        h1.center.compress VIncrementButton
        .dual-blocks
          .side
            label.compress Template
            eg-code-block(lang="html")
              include:escape-vuejs components/FinalProduct/IncrementButton/template.html
          .side
            label.compress Script
            eg-code-block(lang="js")
              include components/FinalProduct/IncrementButton/script.js
      v-slide.flex-center
        h1 PlusButton
        h1 MinusButton
      v-slide
        .dual-blocks
          .side
            label PlusButton
            eg-code-block(lang="vue")
              include:escape-vuejs components/FinalProduct/PlusButton.vue
          .side
            label MinusButton
            eg-code-block(lang="vue")
              include:escape-vuejs components/FinalProduct/MinusButton.vue
      v-slide.flex-center
        h1 Demos
      v-slide
        h4.center Quantity Basic Usage
        .dual-blocks
          .side
            label Code
            eg-code-block(lang="vue")
              include:escape-vuejs ./components/FinalProduct/basic-usage.html
          .side
            label Result
            quantity(v-model="basicCount")
      v-slide
        h4.center Quantity Reconfigurable
        .dual-blocks
          .side
            label Code
            eg-code-block(lang="vue")
              include:escape-vuejs ./components/FinalProduct/reconfigurable.html
          .side
            label Result
            quantity(v-model="reconfigurableCount")
              number-input
              plus-button
              minus-button
      v-slide
        h4.center Direct Calls
        .dual-blocks
          .side
            label Code
            eg-code-block(lang="vue")
              include:escape-vuejs ./components/FinalProduct/direct-call.html
          .side
            label Result
            div
              plus-button(@click="incrementDirectCallCount") Plus!
              number-input(v-model.number="directCallCount")
              minus-button(@click="incrementDirectCallCount") Minus!
      v-slide.flex-center
        h1.center Questions?
        ul
          li
            a(href="https://github.com/fimion/vue-provide-inject-talk/")
              | https://github.com/fimion/vue-provide-inject-talk/
          li
            a(href="https://github.com/fimion/vue-provide-inject-talk/") @fimion
            |   on twitter
          li
            a(href="https://github.com/fimion/vue-provide-inject-talk/") https://alex.party
            |  - My Blog
          li Thanks to Chris Fritz and Josh Justice for their invaluable feedback.

</template>

<script>
  import eagle from 'eagle.js'
  import SimpleProvide from './components/SimpleProvide'
  import PromiseProvide from './components/PromiseProvide'
  import ReactiveProvide from './components/ReactiveProvide'
  import Quantity from './components/FinalProduct/Quantity'
  import NumberInput from './components/FinalProduct/NumberInput'
  import MinusButton from './components/FinalProduct/MinusButton'
  import PlusButton from './components/FinalProduct/PlusButton'
  import escapeVue from './utils/escape-vue'

  const TransitionedSlide = {
    mixins: [eagle.slide],
    delimiters: ["[[", "]]"],
    props: {
      enter: {default: 'fadeIn'},
      leave: {default: 'fadeOut'}
    }
  }


  export default {
    name: 'app',
    mixins: [eagle.slideshow],
    data() {
      return {
        basicCount:0,
        directCallCount:0,
        reconfigurableCount:0,
      }
    },
    mouseNavigation:false,
    infos: {
      title: "Reactive Provide/Inject: State Management for Component Libraries",
      description: "December 2018 - Vue.js Atlanta Meetup",
    },
    components: {
      'v-slide': TransitionedSlide,
      SimpleProvide,
      PromiseProvide,
      ReactiveProvide,
      Quantity,
      NumberInput,
      MinusButton,
      PlusButton,
    },
    methods: {
      escapeVue,
      incrementDirectCallCount(amount){
        this.directCallCount += amount
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  @import '~eagle.js/src/themes/functions';


  body {
    margin: 0;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .local-eg-theme-vue {
    .eg-slideshow {
      background-color: #eee;

      h1, h2, h3, h4, p, li, .button, input, label {
        font-family: "Source Sans Pro", Arial, sans-serif;
      }

      .eg-code-block {
        margin-top: 20px;
        font-size:0.6em;
        pre{
          margin:0;
        }
      }

      h1, h2, h3, h4 {
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
      }

      .eg-slide {
        &.flex-center {
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          align-items: center;
        }
      }

      .eg-slide-content, .subslide {
        width: 80vw;
        margin: 0 auto;

        .eg-triggered-message {
          background: #fbfbfb;
          padding-top: 0.3em;
          padding-bottom: 0.3em;
          padding-left: 0.5em;
          padding-right: 0.5em;
          margin: 1em;
          border: 0.07em solid #bbb;
          border-radius: 0.5em;
          font-size: 0.8em;

          p {
            margin-top: 0 !important;
            margin-bottom: 0 !important;
          }
        }
      }

      .dual-blocks {
        display: flex;
        flex-flow: row nowrap;
        width: 120%;
        margin-left: -10%;

        .side {
          width: 50%;
          margin: 10px;

          label {
            text-align: center;
          }
        }
      }

      li{
        font-size:1.5em;
      }

      .code-box {
        box-shadow: 0 0 0.25em 0.25em #ddd
      }

      .compress{
        font-size:0.55em;
      }

      h1.compress{
        font-size:1em;
        line-height: 1em;
        -webkit-margin-after: 0.1em;
        margin-block-end: 0.1em;
      }
      label.compress{
        font-size: .6em;
      }

      .eg-code-comment {
        font-weight: bold;
        color: #dd4321
      }

      .eg-modal {
        background-color: rgba(0, 0, 0, 0.9);
        color: white;

        h1, h2, h3, h4 {
          font-weight: bold;
        }

        img {
          box-shadow: 0 0 0.2em 0.2em #888
        }
      }

      input {
        background-color: rgba(255, 255, 255, 0.4);
        border: .5px solid #ccc;
        border-radius: 0.2em
      }

      input:focus {
        border: none;
      }

      .button, button {
        background: none;
        cursor: pointer;
        border: none;
        color: black;
        border-radius: .5em;
        border: 0.1em solid gray;
        padding: 0.2em 0.2em;
        margin-left: 0.5em;
        margin-right: 0.5em;
        font-size:1em;
        text-align: center;
        text-decoration: none;
        margin-top: 1em;
        display: inline-block;
        line-height: 1.25em
      }

      .eg-switch {
        margin-right: .5em;
        margin-left: .5em;

        .slider {
          background-color: #ccc;
        }

        .slider.checked {
          background-color: #ffb014;
        }

        .unchecked .label {
          color: #bbbbbb
        }
      }

      .eg-radio {
        margin-right: .5em;
        margin-left: .5em;

        .radio {
          background: none;
          border: 2px solid black;
          border-spacing: 2px;
          z-index: 1;
        }

        .radiodot.checked {
          background-color: #ffb014;
        }
      }

      .embedded-slideshow-container {
        .embedded-slideshow
        .eg-slideshow {
          box-shadow: 0 0 0.25em 0.25em #bbb;
        }
      }

      .shadowbox {
        box-shadow: 0 0 0.25em 0.25em #bbb
      }
    }
  }

  @import '~eagle.js/src/themes/base';

</style>
