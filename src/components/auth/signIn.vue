<template>
    <v-card color="transparent" height="500">
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-card-title>
                <span class="title">Log In</span>
                <v-spacer></v-spacer>
                <span class="caption">or
                <a>Sign up</a>
                </span>
            </v-card-title>
            <v-card-actions>
              <v-btn color="primary" block @click="signInWithGoogle">
                  <v-icon>mdi-google</v-icon>
                  <v-divider class="mx-3"></v-divider>
                  Sign in with Google
              </v-btn>
            </v-card-actions>
            <v-container grid-list-md fluid>
                <v-layout row wrap>
                    <v-flex xs5>
                        <v-divider class="mt-2"></v-divider>
                    </v-flex>
                    <v-flex xs2>
                        or
                    </v-flex>
                    <v-flex xs5>
                        <v-divider class="mt-2"></v-divider>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-card-text>
                <v-text-field label="e-mail"></v-text-field>
                 <v-text-field label="password"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-checkbox label="keep session open"></v-checkbox>
                <v-spacer></v-spacer>
                <v-btn color="primary">Log in</v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script>
export default {
  data () {
    return {
      valid: false
    }
  },
  methods: {
    async signInWithGoogle () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'en'
      await this.$firebase.auth().signInWithPopup(provider)
    }
  }
}
</script>
