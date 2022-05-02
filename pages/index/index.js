// pages/about/about.js
Page({
  data: {
    array: ['考研', '四六级(还没做呢)'],
    index: 0, //picker需要的数据
    show: false,
    buttons: [
      {
        type: 'primary',
        text: '晓得了',
      }
    ]//half-screen-dialog需要的数据
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit: function (e) {
    console.log(e.detail.value)
    if (e.detail.value.username == "" | e.detail.value.password == "") {
      wx.showModal({
        title: '错误',
        content: '输入不可为空，傻逼',
        showCancel: false,
      })
    } else {
      this.setData({
        show: true
      })
    }
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