<template>
<nav>
    <!-- navigation-drawer -->
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list rounded>
      <v-subheader>Menu</v-subheader>
      <v-list-item-group v-model="item" color="pink">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
    <v-app-bar dense app>
    <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
    <!-- toolbar-left -->
      <v-toolbar-title>
          <span class="headline">JARI</span>
          <span class="font-weight-light overline grey--text">  for OTSK</span>
          </v-toolbar-title>
      <v-spacer></v-spacer>
    <!-- toolbar-right -->
      <v-toolbar-items>
      <v-btn icon>
      <v-icon>mdi-account-search</v-icon>
      </v-btn>
      <v-card-actions>
        <v-spacer></v-spacer>
       <v-btn color="dark" text @click="signInWithGoogle">
        <v-icon>mdi-google</v-icon>
           Sign In   </v-btn>
      </v-card-actions>
      </v-toolbar-items>
    </v-app-bar></nav>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      item: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock', to: '/home' },
        { text: 'Audience', icon: 'mdi-account', to: '/about' },
        { text: 'Conversions', icon: 'mdi-flag', to: '/about2' }
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
