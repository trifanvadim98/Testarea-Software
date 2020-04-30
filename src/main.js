import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import * as firebase from 'firebase';
import vuetify from './plugins/vuetify';
import store from '@/store';
import VueSession from 'vue-session';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
Vue.use(VueSession)
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
