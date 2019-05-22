import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueCodemirror from 'vue-codemirror'

// require styles
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/theme/base16-light.css'

Vue.use(VueCodemirror, {
  options: {
    theme: 'base16-light',
    mode: 'text/javascript',
    lineNumbers: true,
    line: true
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
