import Vue from 'vue'
import App from './App'
import './assets/index.scss';

Vue.config.productionTip = false

import MessageBox from './components/MessageBox';
Vue.use(MessageBox);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
