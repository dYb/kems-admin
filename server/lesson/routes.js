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
      status: 'fail',
      message: err.message
    }
  }
})
router.post('/lesson', async (ctx) => {
  try {
    await lessonAction.save(ctx.request.body)
    ctx.body = {
      status: 'success',
      message: '创建成功'
    }
  } catch (err) {
    ctx.body = {
      status: 'fail',
      message: err.message
    }
  }
})

router.put('/lesson', async (ctx) => {
  try {
    await lessonAction.update(ctx.request.body)
    ctx.body = {
      status: 'success',
      message: '修改成功'
    }
  } catch (err) {
    ctx.body = {
      status: 'fail',
      message: err.message
    }
  }
})


router.del('/lesson', async (ctx) => {
  try {
    await lessonAction.remove(ctx.query.id)
    ctx.body = {
      status: 'success',
      message: '删除成功'
    }
  } catch (err) {
    ctx.body = {
      status: 'fail',
      message: err.message
    }
  }
})

module.exports = router
