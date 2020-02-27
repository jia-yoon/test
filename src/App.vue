<template>
  <v-app class="grey lighten-4">
    <Nav />

       <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  name: 'App',
  components: { Nav },
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
