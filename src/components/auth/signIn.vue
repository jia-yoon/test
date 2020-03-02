<template>
  <v-card color="transparent" height="500" flat>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-card-title primary-title>
        <span class="title">aaa</span>
        <v-spacer></v-spacer>
        <span class="caption">
          ccc&nbsp;
          <a >bbb</a>
        </span>
      </v-card-title>
      <v-card-actions>
        <v-btn color="primary" block @click="signInWithGoogle">
          <v-icon>mdi-google</v-icon>
          <v-divider vertical class="mx-3"></v-divider>
          Google sign In        </v-btn>
      </v-card-actions>
      <v-container grid-list-md fluid>
        <v-layout row wrap>
          <v-flex xs5>
            <v-divider class="mt-2"></v-divider>
          </v-flex>
          <v-flex xs2>
            ddd
          </v-flex>
          <v-flex xs5>
            <v-divider class="mt-2"></v-divider>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-text>
        <v-text-field label="eee"></v-text-field>
        <v-text-field label="ggg"></v-text-field>
        <div class="recaptcha-terms-text">i don't need this</div>
      </v-card-text>

      <v-card-actions>
        <v-checkbox
          label="fff"
        ></v-checkbox>
        <v-spacer></v-spacer>
        <v-btn color="primary">
          hhh     </v-btn>
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
<style scoped>
.recaptcha-terms-text {
    font-size: 12px;
    font-weight: 200;
    color: #637282
}
</style>
