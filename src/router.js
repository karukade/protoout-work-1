import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'hash',
    routes:[
      {path: '/', redirect: {name: 'tag'}},
      {path: '/tag', name: 'tag', component: () => import('./pages/Tag.vue')},
      {path: '/json', name: 'json', component: () => import('./pages/JsonViewer.vue')},
      {path: '/chinese', name: 'chinese', component: () => import('./pages/ChineseTag.vue')}
    ]
  })
}
