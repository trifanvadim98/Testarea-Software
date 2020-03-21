<template>
  <v-app>
    <v-content>
      <MainView @signedOut="checkAuthentification" v-if="user"/>
      <LoginView @logedIn="checkAuthentification" v-else />
    </v-content>
  </v-app>
</template>

<script>
import * as firebase from 'firebase'
import MainView from './components/MainView';
import LoginView from './views/login';

export default {
  name: 'App',

  components: {
    MainView,
    LoginView
  },

  data: () => ({
    user : Boolean
  }),
   mounted(){
        this.checkAuthentification()
    },
    methods:{
      checkAuthentification(){
        this.user = firebase.auth().currentUser
      }
    }
  
  
};
</script>
