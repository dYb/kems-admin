const { find, save } = require('./index')

const db = require('../db')

describe('arrayContaining', () => {
  beforeAll(() => {
    if (db.collections.lessons) {
      return db.collections.lessons.drop()
    }
    return Promise.resolve('')
  })
  afterAll(() => {
    if (db.collections.lessons) {
      return db.collections.lessons.drop()
    }
    return Promise.resolve('')
  })

  test('save method', async () => {
    const data = await save()
    expect(data).toBeTruthy()
    expect(data.name).toBe('hello')
  })

  test('find method', async () => {
    const data = await find()
    expect(data).toBeTruthy()
    expect(data.length).toEqual(1)
  })
})
