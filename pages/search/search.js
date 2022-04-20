// pages/search/search.js
import Scratch from '../../utils/scratch.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,
    receiveData: {
      name: "aaa",
      enroll: "1617616",
      admissionNumber: "179489852325",
      grade: [{
        canvasId: "view1canvas",
        viewId: "view1",
        subject: "zz",
        grade: "450",
        touchStart: "touchStart1",
        touchMove: "touchMove1",
        touchEnd: "touchEnd1"
      }, {
        canvasId: "view2canvas",
        viewId: "view2",
        subject: "zz",
        grade: "450",
        touchStart: "touchStart2",
        touchMove: "touchMove2",
        touchEnd: "touchEnd2"
      },
      {
        canvasId: "view3canvas",
        viewId: "view3",
        subject: "zz",
        grade: "450",
        touchStart: "touchStart3",
        touchMove: "touchMove3",
        touchEnd: "touchEnd3"
      },
    ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var width = wx.getSystemInfoSync().windowWidth
    for (var a = that.data.receiveData.grade.length, b = 1; b <= a; b++) {
      var query = wx.createSelectorQuery()
      query.select("#view"+b).boundingClientRect(function (res) {
        var returnHeight = res.height * 750 / width
        var returnWidth = 710 - (res.right * 750 / width)
        that.setData({
          width: returnWidth,
          height: returnHeight
        })
        new Scratch(that, {
          canvasId: "#" + res.id + "canvas",
          width: returnWidth,
          height: returnHeight,
          maskColor: "#dddddd", //封面颜色
          magicString: res.id,
          overCallBack: () => {
            //console.log('完成刮刮乐')
            wx.vibrateShort({
              style: 'heavy',
            })
          },
        })
      }).exec()
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