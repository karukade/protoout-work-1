<template>
  <div>
    <v-progress-circular
      v-if="isLoading"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <div v-if="list.length > 0" class="mt-5">
      <div v-for="(item, index) in list" :key="index" class="q-tag" :style="{fontSize: `${Number(item.count) * 0.1}px`}"><span class="blue--text" :style="{fontSize: '0.2em', color: '#888', display: 'block'}">{{item.count}}</span>{{item.tag}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['language', 'load'],
  data() {
    return {
      list: [],
      isLoading: false,
      isLoaded: false
    }
  },
  mounted() {
    this.read()
  },
  methods: {
    read() {
      this.isLoading = true
      const jsonUrl = `http://localhost:3000/data/tagCounted-${this.language}.json`
      fetch(jsonUrl).then(res => res.json()).then(data => {
        this.list = data
        this.isLoading = false
        this.isLoaded = true
      })
    }
  }
}
</script>

<style scoped>
  .q-tag {
    display: inline-block;
    padding: 10px;
    margin: 8px;
    background-color: #ededde;
    border-radius: 8px;
    font-weight: bold;
  }
</style>

