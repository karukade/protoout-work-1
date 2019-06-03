import {
  UPDATE_LIST,
  RESET_LIST
} from './mutation-type'


const endpoint = 'https://distracted-khorana-1d850c.netlify.com/.netlify/functions/app/api/'


async function getTag({commit, state}) {
  const reqUrl = `${endpoint}?target=tag&page=${state.tag.nextPage}`
  fetch(reqUrl).then(response => response.json()).then(({body, nextPage}) => {
    commit(UPDATE_LIST, {data: JSON.parse(body), nextPage, target: 'tag'})
  })
}

export default {
  getTag
}