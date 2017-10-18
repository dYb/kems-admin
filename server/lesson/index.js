const Lesson = require('./model')

const groupAction = require('../group')
const shopAction = require('../shop')

exports.save = async (shop) => {
  const group = await groupAction.save()
  let s = shop
  if (!s) {
    s = await shopAction.save(group)
  }
  const lesson = new Lesson({
    name: 'hello',
    price: 1000,
    amount: 10,
    status: 1,
    cover: 'cover',
    digest: 'digest',
    level: 3,
    city: 'beijing',
    shop: {
      id: s.id,
      name: s.name
    }
  })
  return lesson.save()
}
exports.findAll = async ({
  name, city, status, shopId,
  page = 1, size = 20,
  startTime = 0, endTime = Date.now()
}) => {
  /* eslint-disable newline-per-chained-call */

  let query1 = Lesson.find()
  let query2 = Lesson.count()
  if (name) {
    query1 = query1.where('name').equals(name)
    query2 = query2.where('name').equals(name)
  }
  if (city) {
    query1 = query1.where('city').equals(city)
    query2 = query2.where('city').equals(city)
  }
  if (status) {
    query1 = query1.where('status').equals(status)
    query2 = query2.where('status').equals(status)
  }
  if (shopId) {
    query1 = query1.where('shop.id').equals(shopId)
    query2 = query2.where('shop.id').equals(shopId)
  }

  const list = await query1
    .where('createTime').gt(startTime).lt(endTime)
    .skip((page - 1) * size)
    .limit(+size)
  const total = await query2
  /* eslint-enable newline-per-chained-call */
  return Promise.resolve({
    list,
    page: {
      total,
      current: page
    }
  })
}

exports.findOne = (id) => {
  return Lesson.findOne({
    _id: id
  })
}

exports.update = (id, doc) => {
  return Lesson.findByIdAndUpdate(id, doc, {
    new: true
  })
}
exports.remove = (id) => {
  return Lesson.findByIdAndRemove(id)
}
