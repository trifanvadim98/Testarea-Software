<template>
  <v-app>
    <v-content>
      <MainView/>
    </v-content>
  </v-app>
</template>

<script>
import MainView from './components/MainView';

export default {
  name: 'App',

  components: {
    MainView,
  },

  data: () => ({
    //
  }),
};
</script>
