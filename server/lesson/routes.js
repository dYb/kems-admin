const Router = require('koa-router')
const lessonAction = require('./index')

const router = new Router()
router.get('/lesson/:id', async (ctx) => {
  const lessonId = ctx.params.id

  ctx.body = await lessonAction.findOne(lessonId)
})
router.get('/lesson', async (ctx) => {
  try {
    ctx.body = await lessonAction.findAll(ctx.query)
  } catch (err) {
    ctx.body = {
      message: err.message
    }
  }
})

module.exports = router
