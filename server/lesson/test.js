const { findAll, save, update, findOne, remove } = require('./index')
const db = require('../db')

describe.skip('Lessons', () => {
  beforeAll(() => {
    if (db.collections.lessons) {
      return db.collections.lessons.drop()
    }
    return Promise.resolve('')
  })
  test('findAll method', async () => {
    const lesson = await save()
    await Promise.all([save(lesson.shop), save(lesson.shop), save(lesson.shop), save(lesson.shop)])
    const result = await findAll({ size: 1, page: 2 })
    expect(result.list.length).toBe(1)
    expect(result.page).toEqual({
      total: 5,
      current: 2
    })
  })
  test('save method', async () => {
    const data = await save()
    expect(data).toBeTruthy()
    expect(data.name).toBe('hello')
  })
  test('update method', async () => {
    const data = await save()
    expect(data).toBeTruthy()
    const result1 = await update(data.id, {
      name: 'world'
    })
    expect(result1.name).toBe('world')
    const result2 = await findOne(data.id)
    expect(result2.name).toBe('world')
    expect(result2.price).toBe(1000)
  })
  test('remove method', async () => {
    const data = await save()
    expect(data).toBeTruthy()
    await remove(data.id)
    const result = await findOne(data.id)
    expect(result).toBeFalsy()
  })
})
