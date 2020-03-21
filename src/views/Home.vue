<template>
    <h1 v-if="user">UTM FRANCOPHONIE FCIM</h1>
</template>
<script>
import * as firebase from 'firebase'
export default {
    data(){
        return{
            user : Boolean
        }
    },
    created(){
        this.user = firebase.auth().currentUser
    }
}
</script>