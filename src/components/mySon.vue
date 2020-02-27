<template>
    <v-card>
        <v-card-title>
        sons : {{ name }}
        </v-card-title>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="call">call</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
  props: ['name'],
  methods: {
    call () {
      this.$emit('help')
    }
  }
}
</script>
