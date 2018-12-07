// pages/function/idCardQuery/idCardQuery.js
Page({
  data: {
    ip: '',
    area: '',
    location: '',
    resultcode: '',
    reason: ''
  },
  getInput: function(e) {
    this.setData({
      ip: e.detail.value
    })
  },

  queryIpAddress: function() {
    let that = this;
    wx.request({
      url: 'http://apis.juhe.cn/ip/ip2addr',
      method: 'get',
      data: ({
        key: '3798a3e5b4d70ed86f1c652667def4d6',
        ip: this.data.ip,
        dtype: 'json'
      }),
      success: function(res) {
        if (res.data.result == null) {
          that.setData({
            resultcode: res.data.resultcode,
            reason: res.data.reason
          })
        } else {
          that.setData({
            resultcode: res.data.resultcode,
            area: res.data.result.area,
            location: res.data.result.location,
          })
        }
      }
    })
  }
})