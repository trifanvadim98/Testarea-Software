<template>
  <v-card
    class="mx-auto"
  >
  <FilterComponent @CA="getCouncils('Consiliui de Administrare (CA)')" 
    @CC="getCouncils('Comisiei de Cenzori (CC)')" 
    @CSL="getCouncils('Comisiei de Solutionare a Litigiilor (CSL)')"/>
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.idnp"
          @click="x = true"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.idnp"></v-list-item-title>
            <v-list-item-subtitle v-html="item.info.name"></v-list-item-subtitle>
            <v-list-item-action-text v-html="item.info.comments"></v-list-item-action-text>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
  import FilterComponent from "../components/filter"
  export default {
    name: 'list',
    components: {
      FilterComponent
    },
    data: () => ({
      x: false,
      items: null
    }),
    methods: {
      getCouncils(collectionTarget){
        console.log("before firebase")
        var data = []
    this.$firebase.firestore().collection(collectionTarget)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots 
            console.log(doc.id, " => ", doc.data());
            let x = {idnp: doc.id, info: doc.data()}
            data.push(x)
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    this.items = data
    }
    }
  }
</script>