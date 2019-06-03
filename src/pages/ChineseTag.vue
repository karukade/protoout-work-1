<template>
  <div>
    <v-progress-circular
      v-if="isLoading"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <v-switch
      v-model="translate"
      :label="`show translate`"
    ></v-switch>
    <div v-if="list.length > 0" class="mt-5">
      <div v-for="(item, index) in list" :key="index" class="list">
        <div :class="translate ? 'subheading' : 'headline'">{{item.text}}</div>
        <div v-if="translate" class="headline mt-2">{{item.translated}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      isLoading: false,
      translate: false
    }
  },
  created() {
    this.read()
  },
  methods: {
    read() {
      this.isLoading = true
      fetch('./data/chinese-result.json').then(res => res.json()).then(data => {
        this.list = data
        this.isLoading = false
      })
    }
  }
}
</script>

<style scoped>
.list {
  display: inline-block;
  padding: 10px;
  margin: 10px;
  background-color: #ededed;
  border-radius: 8px;
}
</style>
