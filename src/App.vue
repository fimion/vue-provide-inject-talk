<template lang="pug">
	.local-eg-theme-vue
		.eg-slideshow
			v-slide
				.center.frontpage
					h1 Reactive Provide/Inject
					h4 State Management for Component Libraries
			v-slide(:steps="2")
				h2.center Who Am I?
				eg-transition(enter="fadeIn")
					.eg-slide-content(v-if="step >= 2")
						p Alex Riviere
						p Full Stack Web Developer at Exerve, Inc.
						p Primarily code in Python and Javascript
			v-slide
				h4.center Inter-Component State Management
				ul.eg-slide-content
					li Props/Emit
					li External Store (Vuex)
					li this.$root/this.$parent (Not advised)
					li Provide/Inject
			v-slide
				h4.center $props/$emit
				.center
					img(src="./assets/props-emit-talking.png")
			v-slide
				h4.center provide/inject
				.center
					img(src="./assets/provide-inject-talking.png")
			v-slide
				h4.center Simple Provide/Inject
				label Template
				eg-code-block(lang="html")
					include:escape-vuejs ./components/SimpleProvide/template.html
				label Script
				eg-code-block(lang="js")
					include ./components/SimpleProvide/script.js
			v-slide
				h4.center Simple Provide/Inject
				label Template
				eg-code-block(lang="html")
					include:escape-vuejs ./components/SimpleInject/template.html
				label Script
				eg-code-block(lang="js")
					include ./components/SimpleInject/script.js
			v-slide
				h4.center Simple Provide/Inject
				p
					simple-provide
			v-slide
				h4.center Promise Provide
				label Template
				eg-code-block(lang="html")
					include:escape-vuejs ./components/PromiseProvide/template.html
				label Script
				eg-code-block(lang="js")
					include ./components/PromiseProvide/script.js
</template>

<script>
  import eagle from 'eagle.js'
  import SimpleProvide from './components/SimpleProvide'
	import PromiseProvide from './components/PromiseProvide'
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
    delimiters: ["[[", "]]"],
    data() {
      return {
        //count:"{{count}}",
      }
    },
    infos: {
      title: "Reactive Provide/Inject: State Management for Component Libraries",
      description: "Thrown together very quickly for Connect.Tech",
    },
    components: {
      'v-slide': TransitionedSlide,
      SimpleProvide,
			PromiseProvide,
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

	.local-eg-theme-vue {
		.eg-slideshow {
			background-color: #eee;

			h1, h2, h3, h4, p, li, .button, input, label {
				font-family: "Source Sans Pro", Arial, sans-serif;
			}
			.eg-code-block{
				margin-top: 20px;
			}
			h1,h2,h3,h4{
				margin-block-start: 0.5em;
				margin-block-end: 0.5em;
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
			.code-box {
				box-shadow: 0 0 0.25em 0.25em #ddd
			}
			.eg-code-comment {
				font-weight: bold;
				color: #dd4321
			}
			.eg-modal {
				background-color: rgba(0,0,0,0.9);
				color: white;
				h1, h2, h3, h4 {
					font-weight: bold;
				}
				img {
					box-shadow: 0 0 0.2em 0.2em #888
				}
			}
			input {
				background-color: rgba(255,255,255,0.4);
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

			.embedded-slideshow-container{
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
