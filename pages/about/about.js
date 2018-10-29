// pages/about/about.js
var flag = true;
var color;
var app = getApp();
Page({
  data:{
    userInfo: {},
    color: "defaultColor",
    aboutImg: '../../images/s.png'
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  click:function () {
    console.log("定义点击事件");
    if (flag) {
      color = "clickColor";//定义默认颜色
      flag = false;
    } else {
      color = "defaultColor";//定义点击颜色
      flag = true;
    }
    this.setData({
      color
    })
  },

  // 页面初始化 options为页面跳转所带来的参数
  onLoad:function(options){
    var that = this
    console.log(app)
    //设置nav
    // wx.setNavigationBarTitle({ title: '关于' })
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      console.log(userInfo)
    })
  },

  // 页面渲染完成
  onReady:function(){
  
  },

  // 页面显示
  onShow:function(){
    
  },

  // 页面隐藏
  onHide:function(){
    
  },
  
  // 页面关闭
  onUnload:function(){
    
  }
})