import {
  UPDATE_LIST,
  RESET_LIST,
  UPDATE_CHINESE_LIST
} from './mutation-type'

export default {
  [UPDATE_LIST](state, {data, nextPage, target}) {
    state[target].lists = state[target].lists.concat(data)
    state[target].nextPage = nextPage
  },
  [RESET_LIST](state, {target}) {
    state[target].data = []
    state[target].nextPage = 1
  },
  [UPDATE_CHINESE_LIST](state, {list}) {
    state.chinese = list
  }
}