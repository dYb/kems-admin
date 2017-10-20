const Router = require('koa-router')
const appointmentAction = require('./index')

const router = new Router()
router.get('/appointment/:id', async (ctx) => {
  const appointmentId = ctx.params.id

  ctx.body = await appointmentAction.findOne(appointmentId)
})
router.get('/appointment', async (ctx) => {
  try {
    ctx.body = await appointmentAction.findAll(ctx.query)
  } catch (err) {
    ctx.body = {
      status: 'fail',
      message: err.message
    }
  }
})
router.post('/appointment', async (ctx) => {
  try {
    await appointmentAction.save(ctx.request.body)
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

router.put('/appointment', async (ctx) => {
  try {
    await appointmentAction.update(ctx.request.body)
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


router.del('/appointment', async (ctx) => {
  try {
    await appointmentAction.remove(ctx.query.id)
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
