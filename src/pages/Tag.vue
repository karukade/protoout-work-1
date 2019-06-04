<template>
  <div>
    <v-progress-circular
      v-if="isLoading"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6>
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
                    <div @click.once="setId(item.id)" class="subheading blue--text">Tag</div>
                  </template>
                  <relate-tags :load="itemIds.includes(item.id)" :language="item.id"/>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-divider class="mt-3 mb-3"></v-divider>
            </div>
          </v-list>
        </v-flex>
        <v-flex xs6>
          <v-list>
            <div v-for="(item, index) in folowersList" :key="index">
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
              <v-divider class="mt-3 mb-3"></v-divider>
            </div>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
</div>
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
      relateTag: ['Python', 'JavaScript', 'Ruby', 'PHP', 'Rails', 'iOS'],
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
        return this.list.sort((a, b) => {
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
