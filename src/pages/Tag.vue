<template>
  <div>
    <v-progress-circular
      v-if="isLoading"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <v-list>
      <v-container grid-list-md fluid text-xs-center>
        <v-layout row wrap　v-for="(item, index) in list" :key="index">
          <tag-list-item :item="item" :hasTag="relateTag.includes(item.id)" />
          <tag-list-item :item="folowersList[index]" :hasTag="false" />
        </v-layout>
      </v-container>
    </v-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TagListItem from './TagListItem.vue'

export default {
  name: 'tag',
  components: {
    'tag-list-item': TagListItem
  },
  data() {
    return {
      relateTag: ['Python', 'JavaScript', 'Ruby', 'PHP', 'Rails', 'iOS', 'AWS'],
      itemIds: []
    }
  },
  computed: {
    isLoading() {
       return this.list.length === 0
    },
    ...mapState({
      list: state => state.tag.lists,
      folowersList() {
        return [...this.list].sort((a, b) => {
          return Number(b.followers_count) - Number(a.followers_count)
        })
      },
      nextPage: state => state.tag.nextPage
    })
  },
  methods: {
    setId(id) {
      this.itemIds.push(id)
    }
  }
}
</script>

<style scoped>
  .q-white > *{
    color: #fff
  }
</style>
