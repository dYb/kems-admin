const Router = require('koa-router')
const lesson = require('./lesson/routes')

const router = new Router()
router
  .use(lesson.routes())

module.exports = router
