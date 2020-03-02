<template>
<nav>
    <v-app-bar dense>
      <router-link class="tohome" to="/">
        <v-toolbar-title>
          <span class="headline color--text">JARI</span>
          <span class="font-weight-light overline grey--text">  for OTSK</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-btn icon>
      <v-icon>mdi-account-search</v-icon>
      </v-btn>
      <!-- <v-card-actions>
       <v-btn color="pink accent-3" text @click="signInWithGoogle">
           Sign In   </v-btn>
      </v-card-actions> -->
       <v-card-actions>
       <v-btn color="pink accent-3" text @click="signOut">
           Sign Out   </v-btn>
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
        { tab: 'About', to: '/about' },
        { tab: 'Card', to: '/lectures/card' }
      ]
    }
  },
  methods: {
    // async signInWithGoogle () {
    //   const provider = new this.$firebase.auth.GoogleAuthProvider()
    //   this.$firebase.auth().languageCode = 'en'
    //   const r = await this.$firebase.auth().signInWithPopup(provider)
    //   console.log(r)
    // },
    async signOut () {
      const r = await this.$firebase.auth().signOut()
      console.log(r)
    }
  }
}
</script>

<style>
.tohome {
  color: inherit;
  text-decoration: inherit;
}
.color--text {
  color: #212121;
}
</style>
