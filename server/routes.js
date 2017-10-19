const Router = require('koa-router')
const lesson = require('./lesson/routes')
const customer = require('./customer/routes')

const router = new Router()
router
  .use(lesson.routes())
  .use(customer.routes())

module.exports = router
