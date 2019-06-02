const express = require('express')
const app = express()
// const history = require('connect-history-api-fallback') 
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const apiRouter = require('./router/api')
const serverless = require('serverless-http')


// const serve = path => express.static(resolve(path), {
//   maxAge: 0
// })

app.use('/api', apiRouter)
// app.use(history())
// app.use('/data', serve('./data'))
// app.use('/', serve('./public'))

exports.handler = serverless(app)