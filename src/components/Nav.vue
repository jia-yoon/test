<template>
<nav>
    <v-app-bar dense>
      <router-link class="toHome" to="/">
        <v-toolbar-title>
          <span class="headline color--text">JARI</span>
          <span class="font-weight-light overline grey--text">  for OTSK</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

         <router-link class="toSign" to="/sign">
       <v-btn text color="pink accent-3" subtitle-2 v-if="!($store.state.user)">
           sign in
             </v-btn></router-link>

      <v-toolbar-items v-if="$store.state.user">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
        <v-avatar :size="32" color="grey lighten-4">
        <img :src="$store.state.user.photoURL" alt="avatar">
        </v-avatar>
            </v-btn>
          </template>
          <v-card width="320">
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex xs4>
                  <v-avatar :size="96" color="grey lighten-4">
        <img :src="$store.state.user.photoURL" alt="avatar">
        </v-avatar>
                </v-flex>
                <v-flex xs8>
                  <v-card-text>
                    <span class="font-weight-bold">{{$store.state.user.displayName}}</span> <br>
                    <span class="font-weight-thin">{{$store.state.user.email}}</span>
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-container>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="" @click="$firebase.auth().signOut()">sign out</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-toolbar-items>

      <template v-slot:extension v-if="$store.state.user">
      <v-tabs v-model="tab" background-color="transparent" color="pink accent-3" grow>
      <v-tab v-for="item in items" :key="item.tab" :to="item.to">
        {{ item.tab }}
      </v-tab>
    </v-tabs>
      </template>
    </v-app-bar>
    </nav>
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
    async signOut () {
      const r = await this.$firebase.auth().signOut()
      console.log(r)
    }
  }
}
</script>

<style>
.toHome {
  color: inherit;
  text-decoration: inherit;
}
.toSign {
  color: inherit;
  text-decoration: inherit;
}
.color--text {
  color: #212121;
}
</style>
