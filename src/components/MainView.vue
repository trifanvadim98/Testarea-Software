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

       <v-list-item link :to="{ name: 'login' }">
          <v-list-item-action>
            <v-icon>mdi-login-variant</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account-plus-outline</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Authentification</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
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
  export default {
    name: 'MainView',
    props: {
      source: String,
    },
    data: () => ({
      drawer: true,
    }),
  }
</script>
<style scoped>
#main-router-view{
  margin-top: 30px;
  padding: 0%;
}
</style>