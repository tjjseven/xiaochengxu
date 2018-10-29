// pages/ranking/ranking.js
const util = require('../../utils/util.js')
const URL = 'https://douban.uieee.com/v2/movie'
Page({
  data:{
    ranking: {},
    page: 1,
    ajaxFlag: false
  },
  // 下拉刷新
  onPullDownRefresh: function(){
    console.log("下拉刷新");
    // 停止刷新
    wx.stopPullDownRefresh()
  },
  // 上拉触底
  onReachBottom: function(){
    console.log("上拉触底");
    this.data.page++;
    util.ajaxItem(URL, 'top250', '', this.data.page).then(res => {
      console.log(res.subjects)
      var loadMsg = this.data.ranking.concat(res.subjects)
      this.setData({
        ranking: loadMsg
      })
      
    }).catch(err => {
      console.log(err)
    })
  },
  // 页面初始化 options为页面跳转所带来的参数
  onLoad:function(options){
      wx.showLoading({
        title: '加载中',
      })
    // 设置nav
    wx.setNavigationBarTitle({ title: 'TOP250' })
    // ajax top250
    util.ajax(URL, 'top250').then(res => {
      console.log(res.data)
      this.setData({ 
        ranking: res.data.subjects,
        ajaxFlag: true 
        })
      // 隐藏加载loading
      wx.hideLoading()
    }).catch(err => {
      // 失败
      wx.hideLoading()
      console.log(err.errMsg)
    })
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