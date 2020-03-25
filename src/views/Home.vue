<template>
<v-container>
	<v-card>
	<v-layout>
<v-img src="../assets/images/lav.png" width="500px">
<h1 v-if="user">UTM FRANCOPHONIE FCIM</h1>
</v-img>
	</v-layout>
	</v-card>
	</v-container>
    
</template>
<script>
import * as firebase from 'firebase'
export default {
    data(){
        return{
						user : Boolean,
        }
    },
    created(){
        this.user = firebase.auth().currentUser
    }
}
</script>
