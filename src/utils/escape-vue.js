const jstransformer = require('jstransformer');
const escapeVuejs = jstransformer(require('jstransformer-escape-vuejs'))

export default function(text){

  return escapeVuejs.render(text).body
}