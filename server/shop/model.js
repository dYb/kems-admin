const mongoose = require('mongoose')

const { Schema } = mongoose
const schema = new Schema({
  name: String,
  region: String,
  tel: String,
  manager: String,
  managerTel: Number,
  remarks: String,
  group: {
    id: {
      type: Schema.Types.ObjectId,
      required: [true, '必须选择商户']
    },
    name: String
  },
  lessons: [{
    id: Schema.Types.ObjectId,
    name: String
  }]
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
module.exports = mongoose.model('Shop', schema)
