<template>
    <v-card>
        <my-son name = "aaa" @help="listen"></my-son>
        <my-son name = "bbb"></my-son>
        <my-son name = "ccc"></my-son>
        <my-son name = "ddd"></my-son>
        <my-daughter></my-daughter>
        <v-card-text>
            <v-alert v-model="call" type="success">
                this is a success alert.
            </v-alert>
        </v-card-text>
    </v-card>
</template>

<script>
import MySon from '@/components/mySon'
import MyDaughter from '@/components/myDaughter'

export default {
  components: {
    MySon, MyDaughter
  },
  data () {
    return {
      call: false
    }
  },
  methods: {
    listen () {
      this.call = true
    }
  }
}
</script>
