(function(t){function n(n){for(var i,a,o=n[0],l=n[1],c=n[2],v=0,p=[];v<o.length;v++)a=o[v],s[a]&&p.push(s[a][0]),s[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(n);while(p.length)p.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],i=!0,o=1;o<e.length;o++){var l=e[o];0!==s[l]&&(i=!1)}i&&(r.splice(n--,1),t=a(a.s=e[0]))}return t}var i={},s={app:0},r=[];function a(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=i,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)a.d(e,i,function(n){return t[n]}.bind(null,i));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/vue-provide-inject-talk/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=n,o=o.slice();for(var c=0;c<o.length;c++)n(o[c]);var u=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0203":function(t,n,e){"use strict";var i=e("e150"),s=e.n(i);s.a},"0803":function(t,n,e){t.exports=e.p+"img/props-emit-talking.ff84359f.png"},"0823":function(t,n,e){"use strict";var i=e("8c00"),s=e.n(i);s.a},1465:function(t,n,e){},"1a83":function(t,n,e){},2673:function(t,n,e){t.exports=e.p+"img/the-innovative-designer.f1b033c2.jpg"},2856:function(t,n,e){},"3cee":function(t,n,e){"use strict";var i=e("1a83"),s=e.n(i);s.a},4779:function(t,n,e){t.exports=e.p+"img/the-hip-programmer.4172768a.jpg"},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var i=e("2b0e"),s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"local-eg-theme-vue"},[i("div",{staticClass:"eg-slideshow"},[i("v-slide",{staticClass:"flex-center"},[i("div",{staticClass:"center frontpage"},[i("h1",[t._v("Reactive Provide/Inject")]),i("h4",[t._v("State Management for Component Libraries")])])]),i("v-slide",{attrs:{steps:2}},[i("h2",{staticClass:"center"},[t._v("Who Am I?")]),i("eg-transition",{attrs:{enter:"fadeIn"}},[t.step>=2?i("div",{staticClass:"eg-slide-content"},[i("ul",[i("li",[t._v("Alex Riviere")]),i("li",[t._v("Full Stack Web Developer")]),i("li",[t._v("Primarily code in Python and Javascript")])])]):t._e()])],1),i("v-slide",{attrs:{steps:5}},[i("h4",{staticClass:"center"},[t._v("How can we pass data between components?")]),i("ul",{staticClass:"eg-slide-content"},[i("eg-transition",{attrs:{enter:"fadeIn"}},[t.step>=2?i("li",[t._v("Props/Emit")]):t._e()]),i("eg-transition",{attrs:{enter:"fadeIn"}},[t.step>=3?i("li",[t._v("External Store (Vuex)")]):t._e()]),i("eg-transition",{attrs:{enter:"fadeIn"}},[t.step>=4?i("li",[t._v(" this.$root/this.$parent (Not advised)")]):t._e()]),i("eg-transition",{attrs:{enter:"fadeIn"}},[t.step>=5?i("li",[t._v(" Provide/Inject")]):t._e()])],1)]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("$props/$emit")]),i("div",{staticClass:"center"},[i("img",{attrs:{src:e("0803")}})])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("provide/inject")]),i("div",{staticClass:"center"},[i("img",{attrs:{src:e("7f97")}})])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("Simple Provide")]),i("div",{staticClass:"dual-blocks"},[i("div",{staticClass:"side"},[i("label",[t._v("Template")]),i("eg-code-block",{attrs:{lang:"html"}},[t._v('<div>\r\n  <p>This is the count:</p>\r\n  <p>​{​{count​}​}</p>\r\n  <simple-inject/>\r\n  <button @click="count++"\r\n          class="button">\r\n    Increment!\r\n  </button>\r\n</div>')])],1),i("div",{staticClass:"side"},[i("label",[t._v("Script")]),i("eg-code-block",{attrs:{lang:"js"}},[t._v("import SimpleInject from '../SimpleInject'\n\nexport default {\n  name: 'simple-provide',\n  data(){\n    return {\n      count: 1,\n    }\n  },\n  provide(){\n    return {'count': this.count}\n  },\n  components: {\n    SimpleInject\n  }\n}")])],1)])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("Simple Inject")]),i("div",{staticClass:"dual-blocks"},[i("div",{staticClass:"side"},[i("label",[t._v("Template")]),i("eg-code-block",{attrs:{lang:"html"}},[t._v("<div>\r\n    <p>This is the injected count:</p>\r\n    <p>​{​{count​}​}</p>\r\n</div>")])],1),i("div",{staticClass:"side"},[i("label",[t._v("Script")]),i("eg-code-block",{attrs:{lang:"js"}},[t._v("export default {\n  name: \"simple-inject\",\n  inject: ['count'],\n}")])],1)])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("Simple Provide/Inject")]),i("p",[i("simple-provide")],1)]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("Promise Provide")]),i("div",{staticClass:"dual-blocks"},[i("div",{staticClass:"side"},[i("label",[t._v("Template")]),i("eg-code-block",{attrs:{lang:"html"}},[t._v('<div>\r\n  <p>​{​{thing​}​}</p>\r\n  <p>^ This is Thing</p>\r\n  <p><input type="text"\r\n            v-model="thing"></p>\r\n  <p><button class="button"\r\n          @click="buttonClick">\r\n    Modify Nested Component\r\n  </button></p>\r\n  <promise-inject/>\r\n</div>')])],1),i("div",{staticClass:"side"},[i("label",[t._v("Script")]),i("eg-code-block",{attrs:{lang:"js"}},[t._v("import PromiseInject from \"../PromiseInject\"\n\nexport default {\n  data() {\n    return {\n      thing: \"Hello World\",\n    }\n  },\n  methods: {\n    handlePromise: function (resolve, reject) {\n      this.$on('button-push', resolve)\n    },\n    buttonClick: function () {\n      this.$emit('button-push', this.thing)\n    }\n  },\n  components: {\n    PromiseInject\n  },\n  provide: function () {\n    return {\n      promise: new Promise(this.handlePromise)\n    }\n  }\n}")])],1)])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("Promise Inject")]),i("div",{staticClass:"dual-blocks"},[i("div",{staticClass:"side"},[i("label",[t._v("Template")]),i("eg-code-block",{attrs:{lang:"html"}},[t._v("<div>\r\n  <p>I'm a nested component!</p>\r\n  <p>​{​{thing​}​}</p>\r\n</div>")])],1),i("div",{staticClass:"side"},[i("label",[t._v("Script")]),i("eg-code-block",{attrs:{lang:"js"}},[t._v("export default {\n  name: \"promise-inject\",\n  data: function () {\n    return {\n      thing: 'I am waiting on a promise!'\n    }\n  },\n  methods: {\n    changeThing: function (response) {\n      this.thing = response\n    }\n  },\n  inject: ['promise'],\n  mounted: function () {\n    this.promise.then(this.changeThing)\n  }\n}")])],1)])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("Promise Demo")]),i("promise-provide")],1),i("v-slide",[i("h1",{staticClass:"center"},[t._v("Let's make it reactive!")])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("Reactive Provide")]),i("div",{staticClass:"dual-blocks"},[i("div",{staticClass:"side"},[i("label",[t._v("Template")]),i("eg-code-block",{attrs:{lang:"html"}},[t._v('<div>\r\n  <p>​{​{thing​}​}</p>\r\n  <p>^ This is Thing</p>\r\n  <input type="text"\r\n         v-model="thing">\r\n  <reactive-inject/>\r\n</div>')])],1),i("div",{staticClass:"side"},[i("label",[t._v("Script")]),i("eg-code-block",{attrs:{lang:"js"}},[t._v('import ReactiveInject from "../ReactiveInject"\n\nexport default {\n  data() {\n    return {\n      thing: "Hello World",\n    }\n  },\n  methods: {\n    getThing() {\n      return this.thing;\n    },\n    setThing(data) {\n      this.thing = data;\n    },\n  },\n  provide() {\n    return {\n      getThing: this.getThing,\n      setThing: this.setThing\n    }\n  },\n  components: {\n    ReactiveInject\n  },\n}')])],1)])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("Reactive Inject")]),i("div",{staticClass:"dual-blocks"},[i("div",{staticClass:"side"},[i("label",[t._v("Template")]),i("eg-code-block",{attrs:{lang:"html"}},[t._v('<div>\r\n  <p>I\'m a nested component!</p>\r\n  <p>\r\n    <code>thing</code>\r\n    being reactive after injection:\r\n  </p>\r\n  <p>​{​{thing​}​}</p>\r\n  <p>\r\n    We can also set\r\n    <code>thing</code>\r\n    from this component\r\n  </p>\r\n  <p>\r\n    <input type="text"\r\n           class="input"\r\n           v-model="thing">\r\n  </p>\r\n</div>')])],1),i("div",{staticClass:"side"},[i("label",[t._v("Script")]),i("eg-code-block",{attrs:{lang:"js"}},[t._v('export default {\n  data() {\n    return {}\n  },\n  computed: {\n    thing: {\n      get: function () {\n        return this.getThing()\n      },\n      set: function (d) {\n        this.setThing(d)\n      },\n    }\n  },\n  inject: ["getThing", "setThing"],\n}')])],1)])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("Reactive Demo")]),i("reactive-provide")],1),i("v-slide",{attrs:{steps:2}},[i("h1",{staticClass:"center"},[t._v("Story Time")]),i("eg-transition",{attrs:{enter:"fadeIn"}},[t.step>=2?i("h2",{staticClass:"center"},[t._v("The Quantity Input")]):t._e()])],1),i("v-slide",{staticClass:"flex-center"},[i("div",{staticClass:"center"},[i("img",{attrs:{src:e("7dc7")}})])]),i("v-slide",{staticClass:"flex-center"},[i("div",{staticClass:"center"},[i("img",{attrs:{src:e("2673")}})])]),i("v-slide",{staticClass:"flex-center"},[i("div",{staticClass:"center"},[i("img",{attrs:{src:e("a16d")}})])]),i("v-slide",{staticClass:"flex-center"},[i("div",{staticClass:"center"},[i("img",{attrs:{src:e("4779")}})])]),i("v-slide",{staticClass:"flex-center"},[i("ul",[i("li",[t._v("A Quantity Input")]),i("li",[t._v("Buttons should go on either side")]),i("li",[t._v("Buttons can also end up on one side")]),i("li",[t._v("Base components should be usable on their own.")])])]),i("v-slide",{staticClass:"flex-center"},[i("h1",[t._v("VQuantity")])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("VQuantity")]),i("div",{staticClass:"dual-blocks"},[i("div",{staticClass:"side"},[i("label",[t._v("Template")]),i("eg-code-block",{attrs:{lang:"html"}},[t._v("<div>\r\n  <slot>\r\n    <v-minus-button />\r\n    <v-number-input />\r\n    <v-plus-button />\r\n  </slot>\r\n</div>")])],1),i("div",{staticClass:"side"},[i("label",[t._v("Script")]),i("eg-code-block",{staticClass:"compress",attrs:{lang:"js"}},[t._v("import VNumberInput from '../VNumberInput'\nimport VPlusButton from '../VPlusButton'\nimport VMinusButton from '../VMinusButton'\nexport default {\n  name:\"v-quantity\",\n  props:{\n    value:{\n      type:Number,\n      required:true,\n    }\n  },\n  components:{VNumberInput,VPlusButton,VMinusButton},\n  methods:{\n    getValue:function(){\n      return this.value\n    },\n    setValue:function(data){\n      this.$emit('input',parseInt(data))\n    },\n    incrementValue:function(amount){\n      this.setValue(this.value + amount)\n    }\n  },\n  provide:function(){\n    return {\n      '$_input_set':this.setValue,\n      '$_input_get':this.getValue,\n      '$_increment_button':this.incrementValue,\n    }\n  }\n}")])],1)])]),i("v-slide",{staticClass:"flex-center"},[i("h1",[t._v("VNumberInput")])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("VNumberInput")]),i("div",{staticClass:"dual-blocks"},[i("div",{staticClass:"side"},[i("label",[t._v("Template")]),i("eg-code-block",{attrs:{lang:"html"}},[t._v('<input @input="$_input_set($event.target.value)"\r\n       :value="$_input_get()"/>')])],1),i("div",{staticClass:"side"},[i("label",[t._v("Script")]),i("eg-code-block",{staticClass:"compress",attrs:{lang:"js"}},[t._v("export default {\n  props: {\n    value: {\n      type: Number,\n      required: false,\n      default: undefined,\n    }\n  },\n  inject: {\n    '$_input_get': {\n      default: function () {\n        return function () {\n          return this.value\n        }\n      },\n    },\n    '$_input_set': {\n      default: function () {\n        if(typeof this.$listeners.input == 'function'){\n          return function (data) {\n            this.$emit('input', parseInt(data))\n          }\n        }else{\n          throw new Error(\"VNumberInput requires either \"+\n          \"$_input_set() provided or an @input handler\")\n        }\n      }\n    }\n  },\n}")])],1)])]),i("v-slide",{staticClass:"flex-center"},[i("h1",[t._v("VIncrementButton")])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("VIncrementButton")]),i("div",{staticClass:"dual-blocks"},[i("div",{staticClass:"side"},[i("label",[t._v("Template")]),i("eg-code-block",{attrs:{lang:"html"}},[t._v('<button @click="$_increment_button(amount)">\r\n  <slot></slot>\r\n</button>')])],1),i("div",{staticClass:"side"},[i("label",[t._v("Script")]),i("eg-code-block",{staticClass:"compress",attrs:{lang:"js"}},[t._v("export default {\n  name: 'v-increment-button',\n  inject: {\n    '$_increment_button': {\n      default: function() {\n        if (typeof this.$listeners.click === 'function') {\n          return function (e) {\n            this.$emit('click', e)\n          }\n        } else {\n          throw new Error(\"VIncrementButton needs either \"\n              + \"$_increment_button() provided or an @click listener.\")\n        }\n      }\n    }\n  },\n  props: {\n    amount: {\n      type: Number,\n      required: true,\n    }\n  },\n}")])],1)])]),i("v-slide",{staticClass:"flex-center"},[i("h1",[t._v("VPlusButton")]),i("h1",[t._v("VMinusButton")])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("VPlusButton/VMinusButton")]),i("div",{staticClass:"dual-blocks"},[i("div",{staticClass:"side"},[i("label",[t._v("VPlusButton")]),i("eg-code-block",{attrs:{lang:"vue"}},[t._v('<template>\r\n  <v-increment-button v-on="$listeners"\r\n                      v-bind="$attrs"\r\n                      :amount="1">\r\n    <slot>+</slot>\r\n  </v-increment-button>\r\n</template>\r\n<script>\r\n  import VIncrementButton from \'./VIncrementButton\'\r\n  export default ​{\r\n    name: "v-plus-button",\r\n    components:​{\r\n      VIncrementButton,\r\n    ​}\r\n  ​}\r\n<\/script>')])],1),i("div",{staticClass:"side"},[i("label",[t._v("VMinusButton")]),i("eg-code-block",{attrs:{lang:"vue"}},[t._v('<template>\r\n  <v-increment-button v-on="$listeners"\r\n                      v-bind="$attrs"\r\n                      :amount="-1">\r\n    <slot>-</slot>\r\n  </v-increment-button>\r\n</template>\r\n<script>\r\n  import VIncrementButton from \'./VIncrementButton\'\r\n  export default ​{\r\n    name: "v-minus-button",\r\n    components:​{\r\n      VIncrementButton,\r\n    ​}\r\n  ​}\r\n<\/script>')])],1)])]),i("v-slide",{staticClass:"flex-center"},[i("h1",[t._v("Demos")])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("VQuantity Basic Usage")]),i("div",{staticClass:"dual-blocks"},[i("div",{staticClass:"side"},[i("label",[t._v("Code")]),i("eg-code-block",{attrs:{lang:"vue"}},[t._v('<v-quantity v-model.number="count" />\r\n')])],1),i("div",{staticClass:"side"},[i("label",[t._v("Result")]),i("v-quantity",{model:{value:t.basicCount,callback:function(n){t.basicCount=n},expression:"basicCount"}})],1)])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("VQuantity Reconfigurable")]),i("div",{staticClass:"dual-blocks"},[i("div",{staticClass:"side"},[i("label",[t._v("Code")]),i("eg-code-block",{attrs:{lang:"vue"}},[t._v('<v-quantity v-model.number="count">\r\n  <v-number-input />\r\n  <v-plus-button />\r\n  <v-minus-button />\r\n</v-quantity>')])],1),i("div",{staticClass:"side"},[i("label",[t._v("Result")]),i("v-quantity",{model:{value:t.reconfigurableCount,callback:function(n){t.reconfigurableCount=n},expression:"reconfigurableCount"}},[i("v-number-input"),i("v-plus-button"),i("v-minus-button")],1)],1)])]),i("v-slide",[i("h4",{staticClass:"center"},[t._v("Direct Calls")]),i("div",{staticClass:"dual-blocks"},[i("div",{staticClass:"side"},[i("label",[t._v("Code")]),i("eg-code-block",{attrs:{lang:"vue"}},[t._v('<v-plus-button @click="incrementCount" >\r\n  Plus!\r\n</v-plus-button>\r\n<v-number-input v-model.number="count" />\r\n<v-minus-button @click="incrementCount" >\r\n  Minus!\r\n</v-minus-button>')])],1),i("div",{staticClass:"side"},[i("label",[t._v("Result")]),i("div",[i("v-plus-button",{on:{click:t.incrementDirectCallCount}},[t._v("Plus!")]),i("v-number-input",{model:{value:t.directCallCount,callback:function(n){t.directCallCount=t._n(n)},expression:"directCallCount"}}),i("v-minus-button",{on:{click:t.incrementDirectCallCount}},[t._v("Minus!")])],1)])])]),i("v-slide",{staticClass:"flex-center"},[i("h1",{staticClass:"center"},[t._v("Questions?")]),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/fimion/vue-provide-inject-talk/"}},[t._v("https://github.com/fimion/vue-provide-inject-talk/")])]),i("li",[i("a",{attrs:{href:"https://github.com/fimion/vue-provide-inject-talk/"}},[t._v("@fimion")]),t._v("  on twitter")]),i("li",[i("a",{attrs:{href:"https://github.com/fimion/vue-provide-inject-talk/"}},[t._v("https://alex.party")]),t._v(" - My Blog")])])])],1)])},r=[],a=e("d973"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v("This is the count:")]),e("p",[t._v(t._s(t.count))]),e("simple-inject"),e("button",{staticClass:"button",on:{click:function(n){t.count++}}},[t._v("\r\n    Increment!\r\n  ")])],1)},l=[],c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v("This is the injected count:")]),e("p",[t._v(t._s(t.count))])])},u=[],v={name:"simple-inject",inject:["count"]},p=v,d=e("2877"),m=Object(d["a"])(p,c,u,!1,null,null,null);m.options.__file="index.vue";var h=m.exports,f={name:"simple-provide",data:function(){return{count:1}},provide:function(){return{count:this.count}},components:{SimpleInject:h}},_=f,g=(e("0823"),Object(d["a"])(_,o,l,!1,null,"28d2f8af",null));g.options.__file="index.vue";var b=g.exports,C=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v(t._s(t.thing))]),e("p",[t._v("^ This is Thing")]),e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.thing,expression:"thing"}],attrs:{type:"text"},domProps:{value:t.thing},on:{input:function(n){n.target.composing||(t.thing=n.target.value)}}})]),e("p",[e("button",{staticClass:"button",on:{click:t.buttonClick}},[t._v("\r\n    Modify Nested Component\r\n  ")])]),e("promise-inject")],1)},j=[],x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v("I'm a nested component!")]),e("p",[t._v(t._s(t.thing))])])},k=[],$={name:"promise-inject",data:function(){return{thing:"I am waiting on a promise!"}},methods:{changeThing:function(t){this.thing=t}},inject:["promise"],mounted:function(){this.promise.then(this.changeThing)}},I=$,V=(e("e68e"),Object(d["a"])(I,x,k,!1,null,"43a05a70",null));V.options.__file="index.vue";var y=V.exports,T={data:function(){return{thing:"Hello World"}},methods:{handlePromise:function(t,n){this.$on("button-push",t)},buttonClick:function(){this.$emit("button-push",this.thing)}},components:{PromiseInject:y},provide:function(){return{promise:new Promise(this.handlePromise)}}},P=T,B=(e("e06b"),Object(d["a"])(P,C,j,!1,null,"212dbe29",null));B.options.__file="index.vue";var w=B.exports,S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v(t._s(t.thing))]),e("p",[t._v("^ This is Thing")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.thing,expression:"thing"}],attrs:{type:"text"},domProps:{value:t.thing},on:{input:function(n){n.target.composing||(t.thing=n.target.value)}}}),e("reactive-inject")],1)},N=[],O=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("p",[t._v("I'm a nested component!")]),t._m(0),e("p",[t._v(t._s(t.thing))]),t._m(1),e("p",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.thing,expression:"thing"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.thing},on:{input:function(n){n.target.composing||(t.thing=n.target.value)}}})])])},M=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("code",[t._v("thing")]),t._v("\r\n    being reactive after injection:\r\n  ")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[t._v("\r\n    We can also set\r\n    "),e("code",[t._v("thing")]),t._v("\r\n    from this component\r\n  ")])}],E={data:function(){return{}},computed:{thing:{get:function(){return this.getThing()},set:function(t){this.setThing(t)}}},inject:["getThing","setThing"]},q=E,R=(e("5750"),Object(d["a"])(q,O,M,!1,null,"5083d0fa",null));R.options.__file="index.vue";var D=R.exports,Q={data:function(){return{thing:"Hello World"}},methods:{getThing:function(){return this.thing},setThing:function(t){this.thing=t}},provide:function(){return{getThing:this.getThing,setThing:this.setThing}},components:{ReactiveInject:D}},W=Q,A=(e("fc1b"),Object(d["a"])(W,S,N,!1,null,"9ccfad92",null));A.options.__file="index.vue";var H=A.exports,J=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._t("default",[e("v-minus-button"),e("v-number-input"),e("v-plus-button")])],2)},L=[],F=(e("c5f6"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("input",{domProps:{value:t.$_input_get()},on:{input:function(n){t.$_input_set(n.target.value)}}})}),U=[],z={props:{value:{type:Number,required:!1,default:void 0}},inject:{$_input_get:{default:function(){return function(){return this.value}}},$_input_set:{default:function(){if("function"==typeof this.$listeners.input)return function(t){this.$emit("input",parseInt(t))};throw new Error("VNumberInput requires either $_input_set() provided or an @input handler")}}}},G=z,K=(e("d0aa"),Object(d["a"])(G,F,U,!1,null,"603e1504",null));K.options.__file="index.vue";var X=K.exports,Y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-increment-button",t._g(t._b({attrs:{amount:1}},"v-increment-button",t.$attrs,!1),t.$listeners),[t._t("default",[t._v("+")])],2)},Z=[],tt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{on:{click:function(n){t.$_increment_button(t.amount)}}},[t._t("default")],2)},nt=[],et={name:"v-increment-button",inject:{$_increment_button:{default:function(){if("function"===typeof this.$listeners.click)return function(t){this.$emit("click",t)};throw new Error("VIncrementButton needs either $_increment_button() provided or an @click listener.")}}},props:{amount:{type:Number,required:!0}}},it=et,st=it,rt=(e("3cee"),Object(d["a"])(st,tt,nt,!1,null,"e7af0f6a",null));rt.options.__file="index.vue";var at=rt.exports,ot={name:"v-plus-button",components:{VIncrementButton:at}},lt=ot,ct=Object(d["a"])(lt,Y,Z,!1,null,null,null);ct.options.__file="VPlusButton.vue";var ut=ct.exports,vt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-increment-button",t._g(t._b({attrs:{amount:-1}},"v-increment-button",t.$attrs,!1),t.$listeners),[t._t("default",[t._v("-")])],2)},pt=[],dt={name:"v-minus-button",components:{VIncrementButton:at}},mt=dt,ht=Object(d["a"])(mt,vt,pt,!1,null,null,null);ht.options.__file="VMinusButton.vue";var ft=ht.exports,_t={name:"v-quantity",props:{value:{type:Number,required:!0}},components:{VNumberInput:X,VPlusButton:ut,VMinusButton:ft},methods:{getValue:function(){return this.value},setValue:function(t){this.$emit("input",parseInt(t))},incrementValue:function(t){this.setValue(this.value+t)}},provide:function(){return{$_input_set:this.setValue,$_input_get:this.getValue,$_increment_button:this.incrementValue}}},gt=_t,bt=(e("0203"),Object(d["a"])(gt,J,L,!1,null,"d8b94948",null));bt.options.__file="index.vue";var Ct=bt.exports,jt=e("c9c6"),xt=jt(e("aa60")),kt=function(t){return xt.render(t).body},$t={mixins:[a["b"].slide],delimiters:["[[","]]"],props:{enter:{default:"fadeIn"},leave:{default:"fadeOut"}}},It={name:"app",mixins:[a["b"].slideshow],data:function(){return{basicCount:0,directCallCount:0,reconfigurableCount:0}},mouseNavigation:!1,infos:{title:"Reactive Provide/Inject: State Management for Component Libraries",description:"December 2018 - Vue.js Atlanta Meetup"},components:{"v-slide":$t,SimpleProvide:b,PromiseProvide:w,ReactiveProvide:H,VQuantity:Ct,VNumberInput:X,VMinusButton:ft,VPlusButton:ut},methods:{escapeVue:kt,incrementDirectCallCount:function(t){this.directCallCount+=t}}},Vt=It,yt=(e("5c0b"),Object(d["a"])(Vt,s,r,!1,null,null,null));yt.options.__file="App.vue";var Tt=yt.exports,Pt=(e("b159"),e("5b16"),e("77ed"),e("1487")),Bt=e.n(Pt);i["a"].use(a["b"]),a["a"].hljs=Bt.a,i["a"].config.productionTip=!1,new i["a"]({delimiters:["[[","]]"],render:function(t){return t(Tt,{props:{mouseNavigation:!1}})}}).$mount("#app")},5750:function(t,n,e){"use strict";var i=e("7611"),s=e.n(i);s.a},"5c0b":function(t,n,e){"use strict";var i=e("2856"),s=e.n(i);s.a},7611:function(t,n,e){},7693:function(t,n,e){},"7dc7":function(t,n,e){t.exports=e.p+"img/the-boss-man.e8ea2352.jpg"},"7f97":function(t,n,e){t.exports=e.p+"img/provide-inject-talking.b0481414.png"},"840a":function(t,n,e){},"8c00":function(t,n,e){},9954:function(t,n,e){},a16d:function(t,n,e){t.exports=e.p+"img/the-thoughtful-designer.33516215.jpg"},d0aa:function(t,n,e){"use strict";var i=e("840a"),s=e.n(i);s.a},e06b:function(t,n,e){"use strict";var i=e("9954"),s=e.n(i);s.a},e150:function(t,n,e){},e68e:function(t,n,e){"use strict";var i=e("1465"),s=e.n(i);s.a},fc1b:function(t,n,e){"use strict";var i=e("7693"),s=e.n(i);s.a}});
//# sourceMappingURL=app.38f5e211.js.map