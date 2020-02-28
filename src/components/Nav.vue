<template>
<nav>
    <v-app-bar dense>
      <v-toolbar-title fixed>
          <span class="headline">JARI</span>
          <span class="font-weight-light overline grey--text">  for OTSK</span>
          </v-toolbar-title>
      <v-tabs v-model="tab" background-color="transparent" color="pink accent-3" centered>
      <v-tab v-for="item in items" :key="item.tab" :to="item.to">
        {{ item.tab }}
      </v-tab>
    </v-tabs>
      <v-toolbar-items>
      <!-- <v-spacer></v-spacer> -->
      <v-btn icon>
      <v-icon>mdi-account-search</v-icon>
      </v-btn>
      <v-card-actions>
        <v-spacer></v-spacer>
       <v-btn color="pink accent-3" text @click="signInWithGoogle">
           Sign In   </v-btn>
      </v-card-actions>
      </v-toolbar-items>
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
