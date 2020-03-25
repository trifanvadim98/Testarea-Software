<template>
	 <v-card
    class="mx-auto"
    max-width="700"
  >
      <v-card-title class="cyan">
				<v-toolbar-title class="white--text align-end">
				Ordin de creare a Organelor Asociatiilor
				</v-toolbar-title>
				</v-card-title>
			<v-col cols="12" lg="6">
				<v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Data Document"
              hint="MM/DD/YYYY"
              persistent-hint
              
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>
			</v-col>
			<v-col cols="12" lg="7">
								 <v-overflow-btn
     								 class="my-2"
                      v-model="form.organ"
    								 :items="form.items"
     								 label="Denumirea Organului AUAI"
     								 dense
    							></v-overflow-btn>
			</v-col>
			<v-layout>
			<v-col cols="12" md="6" sm="6">
			  			<v-text-field
                v-model="form.firstName"
                data-vv-name="firstName"
                label="First name"
                required
                        ></v-text-field>
			</v-col>
							<v-col cols="12" md="6" sm="6">
								<v-text-field
                v-model="form.lastName"
                data-vv-name="lastName"
                label="Last name"
                required
                        ></v-text-field>
							</v-col>
			</v-layout>
			<v-layout justify-center>
							<v-col cols="12" md="8" lg="6">
								<v-text-field
                v-model="form.idnp"
                data-vv-name="IDNP"
                label="IDNP"
                required
                        ></v-text-field>
							</v-col>
							</v-layout>
							<v-layout> 
								<v-col cols="12" md="4" sm="4">
									<v-text-field
                  v-model="lasting"
									label="Durata mandatului (ani)"
									required
									></v-text-field>
								</v-col>
								<v-col cols="12" md="4" sm="4">
									<v-text-field
                  v-model="start"
									label="Data inceperii mandatului"
									hint="MM/DD/YYYY"
									></v-text-field>
								</v-col>
								<v-col cols="12" md="4" sm="4">
									<v-text-field
                  v-model="finish"
									label="Data finalizarii mandatului"
									hint="MM/DD/YYYY"
									></v-text-field>
								</v-col>
							</v-layout>
							  <v-col cols="12" >
					<v-textarea
              color="cyan"
              v-model="form.comment"
            >
              <template v-slot:label>
                <div>
                 Note
                </div>
              </template>
            </v-textarea>
        </v-col>
    <v-card-actions>
			<v-layout row wrap justify-end>
				<v-col cols="12" md="4" sm="4">
      <v-btn
        color="info"
				outlined
				width="50%"
        @click="writeFormDatesInFirebase"
      >
			ADD +
      </v-btn>
				</v-col>
			</v-layout>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
	data: vm => ({
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
			 form: {
      organ: "",
      firstName: "",
      lastName: "",
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      finish : "0.0.0",
      lasting: "2",
      start: "1.1.1",
      idnp: "b01020192",
      items: [ 'Consiliui de Administrare (CA)','Comisiei de Cenzori (CC)', 'Comisiei de Solutionare a Litigiilor (CSL)'],
      comment: ""
    }
    }),
		
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
    },
    methods: {
      formatDate (date) {
        if (!date) return null
        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null
        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      writeFormDatesInFirebase(){
        this.$firebase.firestore().collection(this.form.organ).doc(this.form.idnp).set({
      comments: this.form.comment,
      createdAt: this.form.dateFormatted,
      finish : this.form.finish,
      lasting: this.form.lasting,
      name: this.form.firstName,
      start: this.form.start,
      surname: this.form.lastName
  })
  .then(function(){
    alert("item aded with succes!!")
  })
  }
    },
  }
</script>