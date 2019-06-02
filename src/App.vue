<template>
  <v-app>
    <v-toolbar
      height="70"
      fixed
      app
    >
      <div>
        <v-btn flat to="/tag">Tag</v-btn>
        <v-btn flat to="/json">relate Tags</v-btn>
        <v-btn flat to="/chinese">chinese</v-btn>
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
  }
}
</script>

