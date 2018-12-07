Page({
  idCardQuery: function() {
    wx.navigateTo({
      url: '../function/idCardQuery/idCardQuery',
    })
  },

  ipAddressQuery: function() {
    wx.navigateTo({
      url: '../function/ipAddressQuery/ipAddressQuery',
    })
  },

  historyToday: function() {
    wx.navigateTo({
      url: '../function/historyToday/historyToday',
    })
  },

  mobileQuery: function() {
    wx.navigateTo({
      url: '../function/mobileQuery/mobileQuery',
    })
  },
  bindJoke: function() {
    wx.navigateTo({
      url: '../function/joke/joke',
    })
  }

})