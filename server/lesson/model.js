const mongoose = require('mongoose')

const { Schema } = mongoose
const schema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  price: Number,
  amount: Number,
  status: Number,
  cover: String,
  digest: String,
  level: Number,
  city: String,
  shop: {
    id: Schema.Types.ObjectId,
    name: String
  },
  expires: Date
})
module.exports = mongoose.model('Lesson', schema)
