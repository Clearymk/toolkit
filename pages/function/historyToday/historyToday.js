Page({
  data: {
    month: '',
    day: '',
    flag: false,
    code: ''
  },

  bindInputMonth: function(e) {
    this.setData({
      month: e.detail.value,
    })
  },

  bindInputDay: function(e) {
    this.setData({
      day: e.detail.value
    })
  },

  bindQuery: function() {
    let that = this
    wx.request({
      url: 'http://api.juheapi.com/japi/toh',
      method: 'get',
      data: {
        key: '50630b3a9b504fb0b466368f1ea7b8b5',
        v: '1.0',
        month: that.data.month,
        day: that.data.day
      },
      success: function(res) {
        that.setData({
          result: res.data.result,
          //title: res.data.result[0].title,
          code: res.data.error_code,
          flag:true
        })
      }
    })
  }
})