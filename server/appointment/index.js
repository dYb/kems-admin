const Appointment = require('./model')

exports.save = async (doc) => {
  const appointment = new Appointment(doc)
  return appointment.save()
}

exports.findByLessonId = async ({
  id,
  startDate, endDate,
}) => {
  /* eslint-disable newline-per-chained-call */
  const query = Appointment.find({ lessonId: id })
  if (startDate) {
    query.where('date').gte(startDate)
  }
  if (endDate) {
    query.where('date').lte(endDate)
  }
  const list = await query
  /* eslint-enable newline-per-chained-call */
  return Promise.resolve(list)
  /* eslint-enable newline-per-chained-call */
}

exports.countByLessonId = async ({
  id,
  startDate, endDate,
}) => {
  /* eslint-disable newline-per-chained-call */
  const query = Appointment.count({ lessonId: id })
  if (startDate) {
    query.where('date').gte(startDate)
  }
  if (endDate) {
    query.where('date').lte(endDate)
  }
  const number = await query
  /* eslint-enable newline-per-chained-call */
  return Promise.resolve(number)
  /* eslint-enable newline-per-chained-call */
}
exports.findByCustomerId = async ({
  id,
  page = 1, size = 20,
  startDate, endDate,
}) => {
  /* eslint-disable newline-per-chained-call */
  const query1 = Appointment.find({ customerId: id })
  const query2 = Appointment.count({ customerId: id })
  if (startDate) {
    query1.where('date').gte(startDate)
    query2.where('date').gte(startDate)
  }
  if (endDate) {
    query1.where('date').lte(endDate)
    query2.where('date').lte(endDate)
  }
  const list = await query1
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
  /* eslint-enable newline-per-chained-call */
}
exports.findAll = async ({
  tel, shopId,
  page = 1, size = 20,
  startTime = 0, endTime = Date.now()
}) => {
  /* eslint-disable newline-per-chained-call */

  let query1 = Appointment.find()
  let query2 = Appointment.count()
  if (tel) {
    query1 = query1.where('tel').equals(tel)
    query2 = query2.where('tel').equals(tel)
  }
  if (shopId) {
    query1 = query1.where('shopId').equals(shopId)
    query2 = query2.where('shopId').equals(shopId)
  }
  const list = await query1
    .where('registerTime').gt(startTime).lt(endTime)
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
  return Appointment.findOne({
    _id: id
  })
}

exports.update = (id, doc) => {
  return Appointment.findByIdAndUpdate(id, doc, {
    new: true
  })
}
exports.remove = (id) => {
  return Appointment.findByIdAndRemove(id)
}
