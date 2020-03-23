<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login to LAV</v-toolbar-title>
                <v-spacer />
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      target="_blank"
                      v-on="on"
                      to="/registration"
                    >
                      <v-icon>mdi-account-plus-outline</v-icon>
                    </v-btn>
                  </template>
                  <span>Registration</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="E-mail"
                    name="login"
                    v-model="email"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    label="Password"
                    v-model="password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="authentification()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import * as firebase from 'firebase'
  export default {
    name: "login",
    data() {
      return {
      email: "",
      password: "",
      user: Boolean
      }
    },
  methods: {
  authentification: function(){
          const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('signInAction', user)
  }
  }
  }
</script>
<style scoped>
#logintab{
height: 230px;
width: 230px;
}
</style>