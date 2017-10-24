const { resolve } = require('path')
const { readFile } = require('fs')
const { promisify } = require('util')
const Koa = require('koa')

const router = require('./routes')
// require('./db')

const app = new Koa()
app
  .use(router.routes())
  .use(router.allowedMethods())

app.use(async (ctx) => {
  const filePath = resolve(__dirname, '../public', 'index.html')
  ctx.body = await promisify(readFile)(filePath, 'utf8')
})

app.listen(3000)
