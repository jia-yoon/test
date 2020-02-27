<template>
  <!-- <v-card>
    <v-card-title>Sign in</v-card-title>
    <v-card-text>
      <v-text-field
        label="email"
        v-model="email"
      ></v-text-field>
      <v-text-field
        label="password"
        v-model="password"
        type="password"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="signInWithGoogle">
        <v-icon>mdi-google</v-icon>
        Sign In   </v-btn>
         <v-btn color="primary" @click="signInWithGoogle">
        <v-icon>mdi-log-out</v-icon>
        Sign Out    </v-btn>
    </v-card-actions>
  </v-card> -->
    <v-container grid-list-md>
    <v-layout row wrap align-center justify-center>
      <v-flex xs12 sm5 class="hidden-xs-only">
        <v-img src="https://images.unsplash.com/photo-1559056961-1f4dbbf9d36a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></v-img>
      </v-flex>
       <v-flex xs12 sm5>
         <sign-in></sign-in>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SignIn from '@/components/auth/signIn'
export default {
  components: {
    SignIn
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async signInWithGoogle () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'en'
      await this.$firebase.auth().signInWithPopup(provider)
    },
    async signOut () {
      const r = await this.$firebase.auth().signOut()
      console.log(r)
    }
  }
}
</script>
