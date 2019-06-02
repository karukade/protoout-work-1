<template>
  <div>
    <div class="q-drag-area" @dragover="dragOver" @drop="drop">Drop json</div>
    <v-progress-circular
      v-if="isLoading"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <div v-if="list.length > 0" class="mt-5">
      <div v-for="(item, index) in list" :key="index" class="q-tag" :style="{fontSize: `${Number(item.count) * 0.2}px`}"><span class="blue--text" :style="{fontSize: '0.2em', color: '#888', display: 'block'}">{{item.count}}</span>{{item.tag}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      isLoading: false
    }
  },
  methods: {
    dragOver(e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy';
    },
    drop(e) {
      this.isLoading = true
      e.stopPropagation()
      e.preventDefault()
      const file = e.dataTransfer.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        this.list = JSON.parse(e.target.result)
        this.isLoading = false
      }
      reader.readAsText(file)
    }
  }
}
</script>

<style scoped>
  .q-drag-area {
    height: 100px;
    background-color: #ededed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #666
  }
  .q-tag {
    display: inline-block;
    padding: 10px;
    margin: 8px;
    background-color: #ededde;
    border-radius: 8px;
    font-weight: bold;
  }
</style>

