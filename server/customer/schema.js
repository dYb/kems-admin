const mongoose = require('mongoose')

const { Schema } = mongoose
exports.customerSchema = new Schema({
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
  registerTime: { type: Date, default: Date.now() },
  remarks: String
})
