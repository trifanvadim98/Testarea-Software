<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-if="drawer"
      app
      right
    >
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

         <v-list-item link to="/list">
          <v-list-item-action>
            <v-icon>mdi-format-list-bulleted-square</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>List</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{ name: 'form' }">
          <v-list-item-action>
            <v-icon>mdi-briefcase-plus</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Add Formulair</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="{ name: 'registration' }">
          <v-list-item-action>
            <v-icon>mdi-account-plus-outline</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Authentification</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-book-open-variant</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Contacts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="logout">
          <v-list-item-action>
            <v-icon>mdi-logout-variant</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="cyan"
      dark
    >
      <v-spacer />

      <v-toolbar-title>Application</v-toolbar-title>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-content style="padding: 6px 6px 0px 0px;">
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer
      color="cyan"
      app
    >
      <v-spacer />

      <span class="white--text">&copy;  Reserved by LAV in 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import * as firebase from 'firebase'

  export default {
    name: 'MainView',
    props: {
      source: String,
    },
    data: () => ({
      drawer: true,
    }),
    methods:{
      logout(){
        firebase.auth().signOut().then(function() {
         this.emitEvent()}).catch(function(error) {
    this.emitEvent()
  });
      },
      emitEvent(){
          this.$emit('signedOut')
      }
    }
  }
</script>
<style scoped>
#main-router-view{
  margin-top: 30px;
  padding: 0%;
}
</style>