// pages/details.js
const util = require('../../utils/util.js')
const URL = 'https://douban.uieee.com/v2/movie'
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieNum:'',
    movieDet:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      movieNum: options.movieNum
    })
    // 显示加载loading
    wx.showNavigationBarLoading()
    //设置nav
    wx.setNavigationBarTitle({ title: '详情'})
    // 详情
    util.ajax(URL, this.data.movieNum).then(res => {
      // console.log(res.data)
      this.setData({ movieDet: res.data })
      // 隐藏加载loading
      wx.hideNavigationBarLoading()
    })
    // 评论
    // const params = {
    //   start: 0,
    //   count: 10
    // }
    // util.ajax(URL, this.data.movieNum +'/reviews', params).then(res => {
    //   console.log(res.data)
    //   // this.setData({ movieCom: res.data })
    // })
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