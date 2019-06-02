<template>
  <v-list>
    <div v-for="(item, index) in list" :key="index">
      <v-list-tile class="grow">
        <v-list-tile-avatar>
          <img :src="item.icon_url" />
        </v-list-tile-avatar>
        <div class="headline">{{item.id}}</div>
      </v-list-tile>
      <div class="mt-1 mb-1" :style="{backgroundColor: '#6db9ff', width: `${Number(item.items_count) * 0.01}px`, padding: '20px'}">
        <div>items</div>
        <div class="headline">{{item.items_count}}</div>
      </div>
      <div class="mt-1 mb-1" :style="{backgroundColor: '#7ad5da', width: `${Number(item.followers_count) * 0.01}px`, padding: '20px'}">
        <div>followers</div>
        <div class="headline">{{item.followers_count}}</div>
      </div>
      <v-expansion-panel v-if="relateTag.includes(item.id)" :style="{boxShadow: 'none'}">
        <v-expansion-panel-content>
          <template v-slot:header>
            <div class="subheading blue--text">Tag</div>
          </template>
          <relate-tags :language="item.id"/>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-divider class="mt-3 mb-3"></v-divider>
    </div>
  </v-list>
</template>

<script>
import { mapState } from 'vuex'
import RelateTags from './RelateTags.vue'
export default {
  name: 'tag',
  components: {
    'relate-tags': RelateTags
  },
  data() {
    return {
      relateTag: ['Python', 'JavaScript', 'Ruby', 'PHP', 'Rails', 'iOS']
    }
  },
  computed: {
    ...mapState({
      list: state => state.tag.lists,
      nextPage: state => state.tag.nextPage
    })
  }
}
</script>

<style scoped>
  .q-white > *{
    color: #fff
  }
</style>
