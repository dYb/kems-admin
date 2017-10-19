const Router = require('koa-router')
const bodyParser = require('koa-body')
const customerAction = require('./index')

const router = new Router()
router.get('/customer/:id', async (ctx) => {
  const customerId = ctx.params.id

  ctx.body = await customerAction.findOne(customerId)
})
router.get('/customer', async (ctx) => {
  try {
    ctx.body = await customerAction.findAll(ctx.query)
  } catch (err) {
    ctx.body = {
      status: 'fail',
      message: err.message
    }
  }
})
router.post('/customer', bodyParser({ multipart: true }), async (ctx) => {
  try {
    await customerAction.save(ctx.request.body)
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

router.put('/customer', bodyParser({ multipart: true }), async (ctx) => {
  try {
    await customerAction.update(ctx.request.body)
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


router.del('/customer', async (ctx) => {
  try {
    await customerAction.remove(ctx.query.id)
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
