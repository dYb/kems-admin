const { resolve } = require('path')
const { readFile } = require('fs')
const { promisify } = require('util')
const Koa = require('koa')
const koaBody = require('koa-bodyparser')
const Router = require('koa-router')

require('./db')
const { save, find } = require('./lesson')

const router = new Router()
router.get('/save', async (ctx) => {
  const value = await save()
  ctx.body = value
})

router.get('/find', async (ctx) => {
  const value = await find()
  ctx.body = value
})

const app = new Koa()

app
  .use(koaBody())
  .use(router.routes())
  .use(router.allowedMethods())

app.use(async (ctx) => {
  const filePath = resolve(__dirname, '../public', 'index.html')
  ctx.body = await promisify(readFile)(filePath, 'utf8')
})

app.listen(3000)
