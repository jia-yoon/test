<template>
  <v-carousel
    cycle
    height="auto"
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      slides: [
        {
          src: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
        },
        {
          src: 'https://images.unsplash.com/photo-1510681916233-314f497f3301?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        },
        {
          src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1307&q=80'
        },
        {
          src: 'https://images.unsplash.com/photo-1564002439900-b78bfeb9786f?ixlib=rb-1.2.1&auto=format&fit=crop&w=998&q=80'
        }
      ]
    }
  }
}
</script>
