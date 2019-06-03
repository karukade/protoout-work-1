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
      :label="`翻訳`"
    ></v-switch>
    <div v-if="chinese.length > 0" class="mt-5">
      <div v-for="(item, index) in chinese" :key="index" class="list">
        <div :class="translate ? 'subheading' : 'headline'">{{item.text}}</div>
        <div v-if="translate" class="headline mt-2">{{item.translated}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      translate: false
    }
  },
  computed: {
    isLoading() {
      return this.chinese.length === 0
    },
    ...mapState(['chinese'])
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
