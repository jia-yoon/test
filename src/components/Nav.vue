<template>
<nav>
    <v-app-bar dense>
      <v-toolbar-title fixed>
          <span class="headline">JARI</span>
          <span class="font-weight-light overline grey--text">  for OTSK</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-btn icon>
      <v-icon>mdi-account-search</v-icon>
      </v-btn>
      <v-card-actions>
       <v-btn color="pink accent-3" text @click="signInWithGoogle">
           Sign In   </v-btn>
      </v-card-actions>
      </v-toolbar-items>
      <template v-slot:extension>
      <v-tabs v-model="tab" background-color="transparent" color="pink accent-3" grow>
      <v-tab v-for="item in items" :key="item.tab" :to="item.to">
        {{ item.tab }}
      </v-tab>
    </v-tabs>
      </template>
    </v-app-bar></nav>
</template>

<script>
export default {
  data () {
    return {
      tab: null,
      items: [
        { tab: 'Home', to: '/' },
        { tab: 'Seat', to: '/about2' },
        { tab: 'Card', to: '/lectures/card' },
        { tab: 'About', to: '/about' }
      ]
    }
  },
  methods: {
    async signInWithGoogle () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'en'
      const r = await this.$firebase.auth().signInWithPopup(provider)
      console.log(r)
    }
  }
}
</script>

<style>

</style>
