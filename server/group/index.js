const Group = require('./model')

exports.save = () => {
  const group = new Group({
    name: '朝外SOHO店',
    manager: 'Manager',
    managerTel: '1212121212'
  })
  return group.save()
}
