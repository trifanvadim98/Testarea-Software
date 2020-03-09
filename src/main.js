import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import { firebaseConfig } from './firebase/firebase_configs'
import vuetify from './plugins/vuetify';

firebase.initializeApp(firebaseConfig);
firebase.analytics();
Vue.prototype.$firebase = firebase;
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
