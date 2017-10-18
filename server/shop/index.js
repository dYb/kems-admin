const Shop = require('./model')

exports.save = (group) => {
  const shop = new Shop({
    name: '朝外SOHO店',
    region: '北京',
    tel: '010-88888888',
    manager: 'Manager',
    managerTel: '1212121212',
    remarks: '备注',
    group: {
      id: group.id,
      name: group.name
    }
  })
  return shop.save()
}
exports.addLesson = (id, lesson) => {
  return Shop.findByIdAndUpdate(id, {
    lessons: lesson
  })
}
