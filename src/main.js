import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import * as firebase from 'firebase';
import { firebaseConfig } from './firebase/firebase_configs';
import vuetify from './plugins/vuetify';
import store from '@/store';
import VueSession from 'vue-session';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
Vue.use(VueSession)
firebase.initializeApp(firebaseConfig, {
  serviceAccountId: 'firebase-adminsdk-lxzwg@qa-labs-35bb1.iam.gserviceaccount.com ',
});
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
