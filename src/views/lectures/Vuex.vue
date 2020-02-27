<template>
    <div>
        <v-btn color="success" @click="set">set</v-btn>
    </div>
</template>

<script>
export default {
  methods: {
    set () {
      this.$store.commit('setTitle', 'are you changed?')
      // vuex페이지에서 set버튼 클릭시 set내용대로 바뀐다 (drawer의 상단내용)
    }
  }
}
</script>
