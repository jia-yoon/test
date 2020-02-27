<template>
  <v-app>
    <div>
    <v-app-bar color="#F50057" dense>
      <v-toolbar-title class="title">JARI</v-toolbar-title>
      <v-toolbar-title class="font-weight-light, overline"> for OTSK</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>undecided</v-toolbar-title>
      <v-btn icon>
      <v-icon>mdi-account-search</v-icon>
      </v-btn>
      <v-toolbar-items v-if="$store.state.user">
        <v-btn icon @click="signOut">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar-items>
          <template v-slot:extension>
        <v-tabs v-model="tab" centered color="dark" grow>
          <v-tab>About</v-tab>
          <v-tab>About</v-tab>
          <v-tab>Card</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    </div>

    <v-content>
       <vue-progress-bar></vue-progress-bar>
       <v-container grid-list-md>
         <v-layout row wrap align-center justify-center>
         <v-card color="transparent" flat v-if="!$isFirebaseAuth">
           <v-card-text class="text-xs-center">
             <v-progress-circular indeterminate color="primary"></v-progress-circular>
           </v-card-text>
           </v-card>
         </v-layout>
       </v-container>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      // drawer: false,
      item: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock', to: '/' },
        { text: 'Audience', icon: 'mdi-account', to: '/about' },
        { text: 'Conversions', icon: 'mdi-flag', to: '/lectures/card' }
      ]
    }
  },
  methods: {
    async signOut () {
      const r = await this.$firebase.auth().signOut()
      console.log(r)
      this.$Progress.start()
    }
  }
}
</script>
