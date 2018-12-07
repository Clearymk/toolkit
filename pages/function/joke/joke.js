// pages/function/Joke/Joke.js
Page({

  /**
   * Page initial data
   */
  data: {
    joke_content: ''
  },

  bindRefresh: function() {
    let that = this;
    wx.request({
      url: 'http://v.juhe.cn/joke/randJoke.php',
      data: {
        key: '0d8c0c2416d8adda070917bfe3fa4643'
      },
      success: function(res) {
        that.setData({
          joke_content: res.data.result[0].content
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})