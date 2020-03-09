import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import { config } from './firebase/firebase_configs'

firebase.initializeApp(config);
firebase.analytics();
Vue.prototype.$firebase = firebase;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
