const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const ajax = (api, path, params) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${api}/${path}`,
      data: Object.assign({}, params),
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}

const ajaxItem = (api, path, search = '', page = 1, count = 20) => {
  const params = { start: (page - 1) * count, count: count }
  return ajax(api, path, search ? Object.assign(params, { q: search }) : params)
    .then(res => res.data)
}

const setStorage = (key, value) => {
  return new Promise((resolve, reject) => {
    wx.setStorage({ key: key, data: value, success: resolve, fail: reject })
  })
}

const getStorage = (key) => {
  return new Promise((resolve, reject) => {
    wx.getStorage({ key: key, success: resolve, fail: reject })
  })
}
module.exports = {
  formatTime: formatTime,
  ajax: ajax,
  ajaxItem: ajaxItem,
  setStorage: setStorage,
  getStorage: getStorage
}
