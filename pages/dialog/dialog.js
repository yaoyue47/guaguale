// pages/dialog/dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  bindtap: function (e) {

    var that = this
    this.setData({
      ['dialogData[' + that.data.index + ']']: {
        from: true,
        text: "新增新增新增新增新增新增新增新增新增新增新增新增"
      },
      index: that.data.index + 1
    })
    wx.pageScrollTo({
      selector: "#bottom",
      duration: 300
    })

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