module.exports = ({
  promise,
  successMessage = '操作成功',
  errorMessage = '操作失败'
}) => {
  return promise.then().catch((err) => {
    return Promise.resolve({
      status: 'fail',
      message: err.message
    })
  })
}