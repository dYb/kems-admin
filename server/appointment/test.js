const { countByLessonId, findByLessonId, findByCustomerId, save, update, findOne, remove } = require('./index')
const db = require('../db')

describe.only('Appointment', () => {
  const date = +new Date('2012-12-12')
  const appointment1 = {
    lessonId: '59e9f25c1710400284a20be0',
    customerId: '59e9f22e2037e50758cea28e',
    shopId: '59e74a870d92f22534795ce6',
    date,
    time: 1
  }
  // afterAll(() => {
  //   if (db.collections.appointments) {
  //     return Promise.resolve(db.collections.appointments.drop())
  //   }
  //   return Promise.resolve('')
  // })
  test('save method', async () => {
    const data = await save(appointment1)
    expect(data).toBeTruthy()
    expect(data.date).toBe(date)
  })
  test('update method', async () => {
    const data = await save(appointment1)
    expect(data).toBeTruthy()
    const result1 = await update(data.id, {
      time: 2
    })
    expect(result1.time).toBe(2)
    const result2 = await findOne(data.id)
    expect(result2.time).toBe(2)
  })
  test('remove method', async () => {
    const data = await save(appointment1)
    expect(data).toBeTruthy()
    await remove(data.id)
    const result = await findOne(data.id)
    expect(result).toBeFalsy()
  })
  test('findByLessonId method', async () => {
    const data = await findByLessonId({
      id: appointment1.lessonId,
      startDate: date,
      endDate: date
    })
    expect(data.length).toBeGreaterThan(0)
    const data2 = await findByLessonId({
      id: appointment1.lessonId,
      startDate: date + 1000,
      endDate: date + 1000
    })
    expect(data2.length).toBe(0)
  })
  test('countByLessonId method', async () => {
    const data = await countByLessonId({
      id: appointment1.lessonId,
      startDate: date,
      endDate: date
    })
    expect(data).toBeGreaterThan(0)
    const data2 = await countByLessonId({
      id: appointment1.lessonId,
      startDate: date + 1000,
      endDate: date + 1000
    })
    expect(data2).toBe(0)
  })
  test('findByCustomerId method', async () => {
    const data = await findByCustomerId({
      id: appointment1.customerId,
      startDate: date,
      endDate: date
    })
    expect(data.list.length).toBeGreaterThan(0)
  })
})
