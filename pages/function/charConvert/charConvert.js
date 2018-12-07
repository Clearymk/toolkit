// pages/function/idCardQuery/idCardQuery.js
Page({
  data: {
    text: ''
  },
  getInput: function (e) {
    this.setData({
      text: e.detail.value
    })
  },

  queryCharConvert: function () {
    let that = this;
    wx.request({
      url: 'http://japi.juhe.cn/charconvert/change.from',
      method: 'get',
      data: ({
        key: '4519e68ef608a8ff79a86a19e49ba7a4',
        text: this.data.text,
        type: 2
      }),
      success: function (res) {
        if (res.data.error_code != 0) {
          that.setData({
            "error_code": res.data.error_code,
            "reason": res.data.reason
          })
        } else {
          that.setData({
            "error_code": res.data.error_code,
            "outstr" : res.data.outstr
          })
        }
      }
    })
  }
})