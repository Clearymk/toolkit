// pages/function/idCardQuery/idCardQuery.js
Page({
  data: {
    phone: '',
    province: '',
    city: '',
    areacode: '',
    zip: '',
    company: '',
    resultcode: '',
    reason: ''
  },
  getInput: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  queryMobile: function() {
    let that = this;
    wx.request({
      url: 'http://apis.juhe.cn/mobile/get',
      method: 'get',
      data: ({
        key: '03983747b6e8f3e9a9a77d633a4a3c35',
        phone: this.data.phone,
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
            province: res.data.result.province,
            city: res.data.result.city,
            areacode: res.data.result.areacode,
            zip: res.data.result.zip,
            company: res.data.result.company,
          })
        }
      }
    })
  }
})