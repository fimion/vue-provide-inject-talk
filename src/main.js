import Vue from 'vue'
import App from './App.vue'

import Eagle, { Options } from 'eagle.js'
import 'eagle.js/dist/eagle.css'
import 'highlight.js/styles/darkula.css';
import 'animate.css'
import hljs from 'highlight.js'


Vue.use(Eagle)

Options.hljs = hljs
Vue.config.productionTip = false



new Vue({
  delimiters:["[[","]]"],
  render: h => h(App)
}).$mount('#app')
