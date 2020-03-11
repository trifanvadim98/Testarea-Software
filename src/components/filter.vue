<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    color="teal"
    class="filter-position"
  >
    <v-btn>
      <span>CA</span>
      <v-icon>mdi-brain</v-icon>
    </v-btn>

    <v-btn>
      <span>CC</span>
      <v-icon>mdi-account-multiple-check</v-icon>
    </v-btn>

    <v-btn>
      <span>CSL</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
      name: 'FilterComponent',
    data () {
      return {
        activeBtn: 1,
      }
    },
  }
</script>
<style>
#filter-position{
    margin-top: 230px;
}
</style>