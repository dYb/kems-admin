const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/kems', {
  useMongoClient: true
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('Mongodb opened')
})

module.exports = db
// mongoose.connect('mongodb://root:netease163@10.173.32.7:27017/admin?replicaSet=mg163-1363', {
//   useMongoClient: true
// })
// var db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function() {
//   console.log('opened')
// })
