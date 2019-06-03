<template>
  <v-app>
    <v-toolbar
      height="70"
      fixed
      app
    >
      <div>
        <v-btn flat to="/tag">1.投稿数で昇順に並べる / 2.投稿数上位タグと組あせて使われるタグを収集</v-btn>
        <v-btn flat to="/chinese">3.中国語のタグ</v-btn>
      </div>
    </v-toolbar>
    <v-content>
    <v-container>
      <router-view></router-view>
    </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('getTag')
    this.$store.dispatch('getChineseTag')
  }
}
</script>

