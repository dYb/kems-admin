const Customer = require('./model')

const shopAction = require('../shop')

exports.save = async (doc) => {
  const customer = new Customer(doc)
  return customer.save()
}
exports.findAll = async ({
  tel, shopId,
  page = 1, size = 20,
  startTime = 0, endTime = Date.now()
}) => {
  /* eslint-disable newline-per-chained-call */

  let query1 = Customer.find()
  let query2 = Customer.count()
  if (tel) {
    query1 = query1.where('tel').equals(tel)
    query2 = query2.where('tel').equals(tel)
  }
  if (shopId) {
    query1 = query1.where('shopId').equals(shopId)
    query2 = query2.where('shopId').equals(shopId)
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
  return Customer.findOne({
    _id: id
  })
}

exports.update = (id, doc) => {
  return Customer.findByIdAndUpdate(id, doc, {
    new: true
  })
}
exports.remove = (id) => {
  return Customer.findByIdAndRemove(id)
}
