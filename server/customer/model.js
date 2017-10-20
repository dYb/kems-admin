const mongoose = require('mongoose')

const { Schema } = mongoose
const schema = new Schema({
  account: String,
  name: String,
  fat: Number,
  height: Number,
  weight: Number,
  sex: Number,
  tel: String,
  email: String,
  region: String,
  wechat: String,
  profession: String,
  totalBalance: Number,
  totalLessons: Number,
  remainedLessons: Number,
  lastAppointment: Date,
  lastTraining: Date,
  registerTime: { type: Number, default: Date.now },
  shopId: {
    type: Schema.Types.ObjectId,
    required: [true, '顾客必须选择门店']
  },
  remarks: String
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
module.exports = mongoose.model('Customer', schema)

