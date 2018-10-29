//index.js
const util = require('../../utils/util.js')
const URL = 'https://douban.uieee.com/v2/movie'
//获取应用实例
var app = getApp()
// console.log(app)
Page({
  data: {
    inMovie: {},
    soonMovie: {},
    imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000
    },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  // 缓存数据
  getCache() {
    return new Promise(resolve => {
      util.getStorage('last_index_data')
        .then(res => {
          const { inMovie, expires } = res.data
          // console.log(res)
          // 有缓存，判断是否过期
          if (inMovie && expires > Date.now()) {
            return resolve(res.data)
          }
          // 已经过期
          console.log('uncached')
          return resolve(null)
        })
        .catch(e => resolve(null))
    })
  },
  onTabItemTap: function (item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // 页面初始化 options为页面跳转所带来的参数
  onLoad: function (options) {
    // wx.showTabBarRedDot({ index: 1 })
    // wx.setTabBarBadge({ index: 1, text: 'as' })
    // wx.showActionSheet({ itemList: ['1','2','3'] })
    this.getCache()
      .then(cache => {
        if (cache) {
          console.log('cache')
          // console.log(cache.inMovie)
          return this.setData({ inMovie: cache.inMovie, loading: false })
        }
        util.ajax(URL, 'in_theaters').then(res=>{
          console.log(res.data)
          // this.setData({inMovie: res.data})
          util.setStorage('last_index_data', {
            inMovie: res.data,
            expires: Date.now() + 1 * 24 * 60 * 60 * 1000
          })
        })
      })
    // util.ajax(URL, 'coming_soon').then(res => {
    //   console.log(res.data)
    //   this.setData({soonMovie: res.data})
    // })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
