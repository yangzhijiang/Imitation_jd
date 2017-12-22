// pages/my/my.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenHeight:600,
    userInfo:{},
    show: 0,
    showflag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        userInfo: app.globalData.userInfo
      });
      var that = this;
      //获取屏幕的高度
      wx.getSystemInfo({
        success: function(res) {
          var screenHeigth = res.windowHeight;
          that.setData({
            screenHeight:screenHeigth
          });
        },
      });
      
     

  },
  showHide: function (e) {
    var flag = this.data.showflag;
    var showold = this.data.show;
    var shownew = e.target.dataset.aa;
    console.log("show : " + shownew + ",flag : " + flag);
    if (this.data.show === e.target.dataset.aa) {
      this.setData({
        show: e.target.dataset.aa,
        showflag: !flag });
    }else{
      this.setData({
        show: e.target.dataset.aa,
        showflag: true
      });
    }  
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