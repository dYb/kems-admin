const { findAll, save, update, findOne, remove } = require('./index')
const db = require('../db')

describe.only('Customers', () => {
  const customerData = {
    name: 'ybduan',
    shopId: '59e74f26ac379e42e409d0d9'
  }
  afterAll(() => {
    if (db.collections.customers) {
      return Promise.resolve(db.collections.customers.drop())
    }
    return Promise.resolve('')
  })
  test('findAll method', async () => {
    await Promise.all([save(customerData), save(customerData), save(customerData), save(customerData)])
    const result = await findAll({ size: 1, page: 2 })
    expect(result.list.length).toBe(1)
    expect(result.page).toEqual({
      total: 4,
      current: 2
    })
  })
  test('save method', async () => {
    const data = await save(customerData)
    expect(data).toBeTruthy()
    expect(data.name).toBe('ybduan')
  })
  test('update method', async () => {
    const data = await save(customerData)
    expect(data).toBeTruthy()
    const result1 = await update(data.id, {
      name: 'world'
    })
    expect(result1.name).toBe('world')
    const result2 = await findOne(data.id)
    expect(result2.name).toBe('world')
  })
  test('remove method', async () => {
    const data = await save(customerData)
    expect(data).toBeTruthy()
    await remove(data.id)
    const result = await findOne(data.id)
    expect(result).toBeFalsy()
  })
})
