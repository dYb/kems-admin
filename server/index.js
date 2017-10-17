const { resolve } = require('path')
const { readFile } = require('fs')
const Koa = require('koa')
const { promisify } = require('util')
const mongoose = require('mongoose')

const app = new Koa()

mongoose.connect('mongodb://root:netease163@10.173.32.7:27017/admin?replicaSet=mg163-1363', {
  useMongoClient: true
})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  console.log('opened')
})

app.use(async ctx => {
  const filePath = resolve(__dirname, '../public', 'index.html')
  ctx.body = await promisify(readFile)(filePath, 'utf8')
})

app.listen(3000)
