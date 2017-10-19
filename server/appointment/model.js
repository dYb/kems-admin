const mongoose = require('mongoose')

const { Schema } = mongoose
const schema = new Schema({
  name: String,
  price: Number,
  amount: Number,
  status: Number,
  cover: String,
  digest: String,
  level: Number,
  city: String,
  createTime: { type: Date, default: Date.now },
  shop: {
    id: {
      type: Schema.Types.ObjectId,
      required: [true, '必须选择商户']
    },
    name: String
  },
  expiry: Number
})
schema.virtual('id').get(function () {
  return this._id.toHexString()
})

schema.set('toJSON', {
  virtuals: true,
  transform(doc, result) {
    /* eslint-disable no-param-reassign */
    delete result._id
    delete result.__v
    /* eslint-enable no-param-reassign */
  }
})
module.exports = mongoose.model('Lesson', schema)
