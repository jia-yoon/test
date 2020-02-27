<template>
<nav><v-app-bar dense app>
    <!-- toolbar_left -->
      <v-toolbar-title>
          <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
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
          <template v-slot:extension>
        <!-- <v-tabs v-model="item" centered color="dark" grow>
        <v-tab-item v-for="(item,i) in items" :key="i" :to="item.to">
         <v-tab-item-content v-text="item.text"></v-tab-item-content>
        </v-tab-item>
        </v-tabs> -->
        <v-tabs color="dark" centered grow>
           <v-tab>Item One</v-tab>
          <v-tab>Item Two</v-tab>
          <v-tab>Item Three</v-tab>
        </v-tabs>
      </template>
    </v-app-bar></nav>
</template>

<script>
export default {
  data () {
    return {

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
