<template lang="pug">
  .local-eg-theme-vue
    .eg-slideshow
      v-slide.flex-center
        .center.frontpage
          h1 Reactive Provide/Inject
          h4 State Management for Component Libraries
      v-slide(:steps="2")
        h2.center Who Am I?
        eg-transition(enter="fadeIn")
          .eg-slide-content(v-if="step >= 2")
            ul
              li Alex Riviere
              li Full Stack Web Developer
              li Primarily code in Python and Javascript
      v-slide(:steps="5")
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
      v-slide
        h4.center $props/$emit
        .center
          img(src="./assets/props-emit-talking.png")
      v-slide
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
        h4.center Reactive Provide
        .dual-blocks
          .side
            label Template
            eg-code-block(lang="html")
              include:escape-vuejs ./components/ReactiveProvide/template.html
          .side
            label Script
            eg-code-block(lang="js")
              include ./components/ReactiveProvide/script.js
      v-slide
        h4.center Reactive Inject
        .dual-blocks
          .side
            label Template
            eg-code-block(lang="html")
              include:escape-vuejs ./components/ReactiveInject/template.html
          .side
            label Script
            eg-code-block(lang="js")
              include ./components/ReactiveInject/script.js
      v-slide
        h4.center Reactive Demo
        reactive-provide
      v-slide.flex-center
        h1.center YAY!
        h2.center Let's make a real world example now.

</template>

<script>
  import eagle from 'eagle.js'
  import SimpleProvide from './components/SimpleProvide'
  import PromiseProvide from './components/PromiseProvide'
  import ReactiveProvide from './components/ReactiveProvide'
  import escapeVue from './utils/escape-vue'

  const TransitionedSlide = {
    mixins: [eagle.slide],
    delimiters: ["[[", "]]"],
    props: {
      enter: {default: 'fadeIn'},
      leave: {default: ''}
    }
  }


  export default {
    name: 'app',
    mixins: [eagle.slideshow],
    data() {
      return {
        //count:"{{count}}",
      }
    },
    infos: {
      title: "Reactive Provide/Inject: State Management for Component Libraries",
      description: "December 2018 - Vue.js Atlanta Meetup",
    },
    components: {
      'v-slide': TransitionedSlide,
      SimpleProvide,
      PromiseProvide,
      ReactiveProvide
    },
    methods: {
      escapeVue,
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
        width: 25em;
        max-width: 80%;
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

      .code-box {
        box-shadow: 0 0 0.25em 0.25em #ddd
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

      .button {
        background: none;
        cursor: pointer;
        border: none;
        color: black;
        border-radius: .5em;
        border: 0.1em solid gray;
        padding: 0.2em 0.2em;
        margin-left: 0.5em;
        margin-right: 0.5em;

        text-align: center;
        text-decoration: none;
        margin-top: 1em;
        display: inline-block;
        line-height: 1em
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
