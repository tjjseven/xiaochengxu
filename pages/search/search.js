// pages/search/search.js
const util = require('../../utils/util.js')
const URL = 'https://douban.uieee.com/v2/movie'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchMsg: {},
    loading: false
  },
  // 搜索事件
  handleSearch: function (e) {
    this.data.loading = false;
    if (!e.detail.value) {
      return;
    }
    if(!this.data.loading){
      wx.showLoading({
        title: '加载中',
      })
    }
    console.log(e.detail.value)
    util.ajaxItem(URL, 'search', e.detail.value).then(res=>{
      console.log(res)
      this.setData({
        searchMsg: res,
        loading: true
      })
      wx.hideLoading()
    }).catch(err=>{
      // 失败
      wx.hideLoading()
      console.log(err.errMsg)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置nav
    wx.setNavigationBarTitle({ title: '搜索' })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})