// pages/search/search.js
import Scratch from '../../utils/scratch.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,

    name:"张三儿er",
    enroll:"214578963",
    admission_number:"171524036986520",

    receiveData: {
      grade: [{
        canvasId: "view1canvas",
        viewId: "view1",
        touchStart: "touchStart1",
        touchMove: "touchMove1",
        touchEnd: "touchEnd1",
        subject: "政治",
        grade: ["*","*","*"],
      }, {
        canvasId: "view2canvas",
        viewId: "view2",
        touchStart: "touchStart2",
        touchMove: "touchMove2",
        touchEnd: "touchEnd2",
        subject: "英语",
        grade: ["*","*","*"],
      },
      {
        canvasId: "view3canvas",
        viewId: "view3",
        touchStart: "touchStart3",
        touchMove: "touchMove3",
        touchEnd: "touchEnd3",
        subject: "专一",
        grade: ["*","*","*"],
      },
      {
        canvasId: "view4canvas",
        viewId: "view4",
        touchStart: "touchStart4",
        touchMove: "touchMove4",
        touchEnd: "touchEnd4",
        subject: "专二",
        grade: ["*","*","*"],
      },
      {
        canvasId: "view5canvas",
        viewId: "view5",
        touchStart: "touchStart5",
        touchMove: "touchMove5",
        touchEnd: "touchEnd5",
        subject: "总分",
        grade: ["*","*","*"],
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
    this.setData({
      "receiveData.grade[0].grade":["0","6","6"],
      "receiveData.grade[1].grade":["0","7","0"],
      "receiveData.grade[2].grade":["0","9","8"],
      "receiveData.grade[3].grade":["1","0","9"],
      "receiveData.grade[4].grade":["3","4","3"],
    })
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