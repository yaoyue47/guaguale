// pages/dialog/dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "小姚，我的政治在85之上吗",
    index: 0,
    dialogData: [{ //ture是左边数据，false是右边数据
        from: true,
        text: "llllllllllll"
      },
      {
        from: false,
        text: "rrrrrr"
      },
      {
        from: true,
        text: "llllllllllll2222222"
      },
      {
        from: true,
        text: "llllllllllll2222282"
      }
    ]
  },
  sendMessage: function (leftOrRight, message) {
    var that = this
    this.setData({
      ['dialogData[' + that.data.index + ']']: {
        from: leftOrRight,
        text: message
      },
      index: that.data.index + 1
    })
    wx.pageScrollTo({
      selector: "#bottom",
      duration: 300
    })
  },
  bindtap: function () {
    if (this.data.message != "") {
      this.sendMessage(false, this.data.message)
    }
  },
  bindinput: function (e) {
    this.setData({
      message: e.detail.value
    })
  },
  bindconfirm: function (e) {
    this.sendMessage(false, e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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