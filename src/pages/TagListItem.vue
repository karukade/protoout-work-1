<template>
  <v-flex xs6>
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
    <v-expansion-panel v-if="hasTag" :style="{boxShadow: 'none'}">
      <v-expansion-panel-content>
        <template v-slot:header>
          <div @click.once="load()" class="subheading blue--text">Tag</div>
        </template>
        <relate-tags :load="loadTags" :language="item.id"/>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-flex>
</template>

<script>
import RelateTags from './RelateTags.vue'
export default {
  props: ['item', 'hasTag'],
  components: {
    'relate-tags': RelateTags
  },
  data() {
    return {
      loadTags: false
    }
  },
  methods: {
    load() {
      this.loadTags = true
    }
  }
}
</script>

