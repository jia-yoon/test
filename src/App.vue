<template>
  <v-app>
    <div>
    <v-app-bar color="#F50057" dense>
      <v-toolbar-title class="title">JARI</v-toolbar-title>
      <v-toolbar-title class="font-weight-light, overline"> for OTSK</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-btn icon>
      <v-icon>mdi-account-search</v-icon>
      </v-btn>
      <v-card-actions>
        <v-spacer></v-spacer>
       <v-btn color="dark" @click="signInWithGoogle">
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
    </v-app-bar>
    </div>

       <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    //   tab: null,
    //   items: [
    //     { text: 'tab1', to: '/' },
    //     { text: 'tab2', to: '/about' },
    //     { text: 'tab3', to: '/lectures/card' }
    //   ]
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
