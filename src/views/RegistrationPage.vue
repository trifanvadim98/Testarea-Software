<template>
	<v-container>
		<v-layout>
			<v-flex xs12 sm5 offset-sm3>
        <v-card class="elevation-5" color="grey lighten-4">
          <v-flex xs12>
            <v-card class="elevation-12">
              <v-toolbar class="cyan" height="80px">
                <v-layout row justify-content-end>
                  <v-card-title>
                    <router-link :to="{ name: 'login' }">
                      <v-btn dark icon>
                        <v-icon class="icon">mdi-chevron-left</v-icon>
                      </v-btn>
                    </router-link>
                    <v-toolbar-title
                      class="text"
                      font-weight-medium.font-italic
                      text-uppercase
                      >Create an Account</v-toolbar-title
                    >
                  </v-card-title>
                </v-layout>
              </v-toolbar>
              <v-progress-linear
                v-if="loading"
                :indeterminate="true"
                height="3px"
                class="auth__progress-bar"
              ></v-progress-linear>
							<v-card-text>
								<v-container>
									<v-form ref="form" :autocomplete="false">
										<v-layout row wrap justify-space-between>
											 	<v-flex xs12 md12>
														<v-flex xs12 md12>
                       				 <v-text-field
                         					 v-model="form.firstName"
                         					 v-validate="{ min: 2, max: 25 }"
                         					 :disablef="loading"
                         					 :counter="25"
                         					 data-vv-name="firstName"
                         					 label="First name"
                         					 required
                        			></v-text-field>
                      	</v-flex>
													<v-flex xs12 md12>
                      				<v-text-field
                      				  v-model="form.lastName"
                      				  v-validate="{ min: 2, max: 25 }"
                      				  :disablef="loading"
                      				  :counter="25"
                      				  data-vv-name="lastName"
                      				  label="Last name"
                      				  required
                      				></v-text-field>
                    			</v-flex>
											 </v-flex>
										</v-layout>
										 		<v-layout row>
                  						<v-text-field
                  						  v-model="form.username"
                  						  v-validate="{ min: 5, max: 25 }"
                  						  :disablef="loading"
                  						  :counter="25"
                  						  data-vv-name="username"
                  						  label="Username"
                  						  required
                  						></v-text-field>
                					</v-layout>
													<v-layout row>
                  							<v-text-field
                  							  v-model="form.password"
                  							  v-validate="'password_complexity'"
                  							  :append-icon="itShowPassword ? 'visibility_off' : 'visibility'"
                  							  :type="itShowPassword ? 'text' : 'password'"
                  							  :disablef="loading"
                  							  :counter="32"
                  							  data-vv-name="password"
                  							  label="Password"
                  							  @click:append="itShowPassword = !itShowPassword"
                  							></v-text-field>
                					</v-layout>
													 <v-layout row>
                  							<v-text-field
                  							  v-model="form.confirmpassword"
                  							  :append-icon=" itShowConfirmPassword ? 'visibility_off' : 'visibility'"
                  							  :type="itShowConfirmPassword ? 'text' : 'password'"
                  							  :disablef="loading"
                  							  :counter="32"
                  							  data-vv-name="confirmpassword"
                  							  label="Confirm Password"
                  							  required
                  							  :rules="[comparePassword]"
                  							  @click:append="itShowConfirmPassword = !itShowConfirmPassword"
                  							></v-text-field>
                							</v-layout>
																		 <v-container grid-list-md text-xs-center>
                  												<v-layout row wrap justify-end>
                  												  <v-flex xs12 lg4 xl2>
                  												    <v-btn
                  												      block
                  												      color="info"
                  												      :loading="loading"
                  												      :disabled="loading"
                  												      @click="onSubmit"
                  												    >
                  												      SignUp
                  												    </v-btn>
                  												  </v-flex>
                  												</v-layout>
                											</v-container>
									</v-form>
								</v-container>
							</v-card-text>
            </v-card>
          </v-flex>
        </v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	 data: () => ({

		 form: {
      firstName: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: ""
		},
		loading: false,
    notification: false,
    notificationMessage: "",
    itShowPassword: false,
    itShowConfirmPassword: false							
	 }),
	   methods: {
    async onSubmit() {
      this.loading = true;
      try {
        await this.$store.dispatch("auth/register", {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          username: this.form.username,
          email: this.form.email,
          password: this.form.password
        });
        this.$router.push({ name: "home" });
      } catch (e) {
        this.showNotification(e);
      }
      this.loading = false;
    },
    showNotification(e) {
      this.notification = true;
      this.notificationMessage = e;
    }
  },
	 computed: {
    comparePassword() {
      return this.form.password !== this.form.confirmpassword
        ? "Password do not match"
        : "";
		},
		 showNotification(e) {
      this.notification = true;
      this.notificationMessage = e;
    }
  },
}
</script>

<style>
.icon{
	text-decoration: none;
}
.text {
	color: white;
}
</style>