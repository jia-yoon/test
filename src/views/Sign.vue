<template>

    <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="#E0E0E0"
                flat
              >
                <v-toolbar-title class="subtitle-2">To register your seat, please sign in !</v-toolbar-title>
                <!-- <v-spacer />
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      :href="source"
                      icon
                      large
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-code-tags</v-icon>
                    </v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      icon
                      large
                      href="https://codepen.io/johnjleider/pen/pMvGQO"
                      target="_blank"
                      v-on="on"
                    >
                      <v-icon>mdi-codepen</v-icon>
                    </v-btn>
                  </template>
                  <span>Codepen</span>
                </v-tooltip> -->
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-card-actions>
                  <v-icon>mdi-account</v-icon>
                  <v-text-field
                    label="E-mail"
                    :rules="emailRules"
                    name="login"
                    type="text"
                    required
                  />
                  </v-card-actions>
                  <v-card-actions>
                    <v-icon>mdi-lock</v-icon>
                  <v-text-field
                    id="password"
                    label="Password"
                    :rules="passwordRules"
                    name="password"
                    type="password"
                  />
                  </v-card-actions>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-checkbox label="keep this session"></v-checkbox>
                <v-spacer />
                <v-btn color="primary" :disabled="!valid" @click="signInWithEmailAndPassword">Sign in</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>

export default {
  // props: {
  //   source: String
  // },
  data () {
    return {
      valid: false,
      lazy: false,
      form: {
        email: '',
        password: ''
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ]
    }
  },
  methods: {
    async signInWithEmailAndPassword () {
      if (!this.$refs.form.validate()) return this.$toasted.global.error('Please complete the form.')
      await this.$firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
    }
  }
}
</script>
