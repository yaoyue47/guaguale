// pages/search/search.js
import Scratch from '../../utils/scratch.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var width = wx.getSystemInfoSync().windowWidth
    var query = wx.createSelectorQuery()
    query.select("#id").boundingClientRect(function (res) {
      var returnHeight = res.height * 750 / width
      var returnWidth = 710 - (res.right * 750 / width)
      that.setData({
        width: returnWidth,
        height: returnHeight
      })
      new Scratch(that, {
        canvasId: '#coverCanvas',
        width: returnWidth,
        height: returnHeight,
        maskColor: "#dddddd", //封面颜色
        bgImg: "/img/1111.jpeg", //封面图片
        overCallBack: () => {
          console.log('完成刮刮乐')
        },
      })

    }).exec()

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