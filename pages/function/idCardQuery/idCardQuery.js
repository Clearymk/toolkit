// pages/function/idCardQuery/idCardQuery.js
Page({
  data: {
    id: ''
  },
  getInput: function (e) {
    this.setData({
      id: e.detail.value
    })
  },

  queryIdCard: function () {
    let that = this;
    wx.request({
      url: 'http://apis.juhe.cn/idcard/index',
      method: 'get',
      data: ({
        key: '9c2a2cfadb069ba4fe463d96a0841876',
        cardno: this.data.id,
        dtype: 'json'
      }),
      success: function (res) {
        if (res.data.result == null) {
          that.setData({
            "resultcode": res.data.resultcode,
            "reason": res.data.reason
          })
        } else {
          that.setData({
            "resultcode": res.data.resultcode,
            "sex": res.data.result.sex,
            "area": res.data.result.area,
            "birthday": res.data.result.birthday
          })
        }
      }
    })
  }
})