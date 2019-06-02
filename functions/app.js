const express = require('express')
const app = express()
const history = require('connect-history-api-fallback') 
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
// const apiRouter = require('./router/api')
const serverless = require('serverless-http')

const router = express.Router()
const request = require('request-promise-native')
const endpoint = {
  tags(page) {
    return `https://qiita.com/api/v2/tags?sort=count&per_page=100&page=${page}`
  } 
}

function getPageNumFromUrl(url) {
  return Number(/page=([0-9]+)/.exec(url)[1])
}

async function getTags(page) {
  const url = endpoint.tags(page)
  const data = await getData(url)
  return data
}

function getData(url) {
  return request({
    url,
    resolveWithFullResponse: true,
    headers: {
      'Authorization': 'Bearer 36f3b4f8e1d04d623b46e18a5c2cd3b09fcb2714'
    }
  }).then(res => {
    const nextPage = getPageNumFromUrl(parseLink(res.headers.link).next)
    return {
      body: res.body,
      nextPage
    }
  })
}

function parseLink(links) {
  return links.split(',').reduce((obj, link) => {
    const [url, name] = link.trim().replace(/([<>"]|(rel=))/g, '').split('; ')
    obj[name] = url
    return obj
  }, {})
}

router.get('/', async (req, res) => {
  const {target, page} = req.query
  let data = {}
  switch(target) {
  case 'tag':
    data = await getTags(page)
  }
  res.send(JSON.stringify(data))
})

const serve = path => express.static(resolve(path), {
  maxAge: 0
})

app.use('/.netlify/functions/app/api', router)
app.use(history())
app.use('/.netlify/functions/app/data', serve('functions/data'))
app.use('/', serve('./public'))

exports.handler = serverless(app)