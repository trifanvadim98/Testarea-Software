<template>
    <v-container>
        <v-card>
            <v-layout>
                <v-img src="../assets/images/lav.png" width="500px">
                    <h1 v-if="user">UTM FRANCOPHONIE FCIM {{getUser()}}</h1>
                </v-img>
            </v-layout>
        </v-card>
    </v-container>
    
</template>
<script>
import * as firebase from 'firebase'
import store from "../store";
export default {
    data(){
        return{
            user : Boolean,
            timerCounter: 60
        }
    },
    created(){
        this.user = firebase.auth().currentUser
        console.log("user ="+this.user)
    },
    methods:{
        decrementItem: () =>{
                                this.timerCounter = this.timerCounter -1
                                return this.timerCounter
                            },
        getUser: () => {
            return store.getters.user
        }
    }
}
</script>