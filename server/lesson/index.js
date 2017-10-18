const Lesson = require('./model')

exports.save = () => {
  const lesson = new Lesson({
    name: 'hello',
    price: 1000,
    amount: 10,
    status: 1,
    cover: 'cover',
    digest: 'digest',
    level: 3,
    city: 'beijing'
  })
  return lesson.save()
}
exports.find = () => {
  return Lesson.find({
    name: 'hello'
  })
}
