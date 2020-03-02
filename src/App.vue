<template>
  <v-app class="grey lighten-4">
    <Nav />
       <v-content>
             <vue-progress-bar></vue-progress-bar>
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

    }
  },
  methods: {

  }
}
</script>
