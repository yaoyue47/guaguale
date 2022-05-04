// pages/dialog/dialog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "张三儿er",
    garde: [66, 70, 98, 109, 343],
    message: "小姚，我的政治在85之上吗",
    index: 0,
    dialogData: [] //ture是左边数据，false是右边数据 
    //{ from: false, text: "rrrrrr"}
  },
  sendMessage: function (leftOrRight, message) {
    this.setData({
      ['dialogData[' + this.data.index + ']']: {
        from: leftOrRight,
        text: message
      },
      index: this.data.index + 1
    })
    wx.pageScrollTo({
      selector: "#bottom",
      duration: 300
    })
  },
  tellMeHowToReturn: function (message) {
    const name = this.data.name
    if (message.search("政治") != -1) {
      const messageGrade = message.match(/[0-9]+/)[0]
      if (this.data.garde[0] >= messageGrade) {
        return name + "，你的政治在" + messageGrade + "之上"
      } else {
        return name + "，你的政治在" + messageGrade + "之下"
      }
    }
    if (message.search("英语") != -1) {
      const messageGrade = message.match(/[0-9]+/)[0]
      if (this.data.garde[1] >= messageGrade) {
        return name + "，你的英语在" + messageGrade + "之上"
      } else {
        return name + "，你的英语在" + messageGrade + "之下"
      }
    }
    if (message.search("数学") != -1) {
      const messageGrade = message.match(/[0-9]+/)[0]
      if (this.data.garde[2] >= messageGrade) {
        return name + "，你的数学在" + messageGrade + "之上"
      } else {
        return name + "，你的数学在" + messageGrade + "之下"
      }
    }
    if (message.search("专业") != -1) {
      const messageGrade = message.match(/[0-9]+/)[0]
      if (this.data.garde[3] >= messageGrade) {
        return name + "，你的专业在" + messageGrade + "之上"
      } else {
        return name + "，你的专业在" + messageGrade + "之下"
      }
    }
    if (message.search("总分") != -1) {
      const messageGrade = message.match(/[0-9]+/)[0]
      if (this.data.garde[4] >= messageGrade) {
        return name + "，你的总分在" + messageGrade + "之上"
      } else {
        return name + "，你的总分在" + messageGrade + "之下"
      }
    }
    return "抱歉，" + name + "我不明白你什么意思" //todo
  },
  returnMessage: function (message) {
    var that = this
    var returnData = this.tellMeHowToReturn(message)
    setTimeout(function () {
      that.sendMessage(true, "思考中...")
      that.setData({
        index: that.data.index - 1
      })
    }, 500)

    setTimeout(function () {
      that.sendMessage(true, returnData)
    }, 1500)
  },

  bindtap: function () {
    if (this.data.message != "") {
      this.sendMessage(false, this.data.message)
      this.returnMessage(this.data.message)
    }
  },
  bindinput: function (e) {
    this.setData({
      message: e.detail.value
    })
  },
  bindconfirm: function (e) {
    if (e.detail.value != "") {
      this.sendMessage(false, e.detail.value)
      this.returnMessage(e.detail.value)
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
    var that = this
    setTimeout(function () {
      that.sendMessage(true, "欢迎呀，" + that.data.name + "同学")
    }, 1000)
    setTimeout(function () {
      that.sendMessage(true, "我是你的智能语音助手小姚，我已经知道了你的成绩了哦，试着对我说：“小姚，我的政治在85之上吗”，“小姚，我的总分在300以下吗”")
    }, 2000)
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