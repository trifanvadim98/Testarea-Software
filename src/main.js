import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import * as firebase from 'firebase';
import { firebaseConfig } from './firebase/firebase_configs';
import vuetify from './plugins/vuetify';
import store from '@/store'

firebase.initializeApp(firebaseConfig);
firebase.analytics();
Vue.prototype.$firebase = firebase;
Vue.config.productionTip = false;
export default router;

new Vue({
  router,
  store,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')
