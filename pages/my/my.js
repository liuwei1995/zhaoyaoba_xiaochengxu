const app = getApp()
// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Height: 500,
    width: 500,
    array: [{
      id:1,
      title: "title1",
      _type: 1,
      img: "http://7xloj2.com1.z0.glb.clouddn.com/1482733487700",
      outline: 'foo',
    }, {
      id:2,
      title: "title2",
      _type: 2,
      img: "http://7xloj2.com1.z0.glb.clouddn.com/1482733487700",
      outline: 'bar'
    }]
  },


  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.getSystemInfo({
      success: function(res) {
        _this.setData({
          scroll_view:{
            Height:res.windowHeight,
            width:res.windowWidth
          }
        })
      },
    });

    var arr = new Array();
    for (var i = 0; i < 10; i++) {
      if (i % 2 == 0) {
        arr[i] = {
          id:i,
          _type: 2,
          title: "title_" + i,
          img: "http://7xloj2.com1.z0.glb.clouddn.com/1482733487700",
          outline: 'outline_5312354132465jbns,dfgjvzlnklkhkzsfnkuj' + i,
        }
      } else {
        arr[i] = {
          id:i,
          _type: 1,
          title: "title_" + i,
          img: "http://7xloj2.com1.z0.glb.clouddn.com/1482733487700",
          outline: 'outlinegnfuykjrdtgserghsedthnert6hesthetrhdthery_' + i,
        }
      }
    }
    var _this = this;
    _this.setData({
      array: arr,
    })
  },


click: function(event) {
    console.log(event)
    //  <navigator url="/pages/test/test" hover-class="navigator-hover" open-type='navigate'>
    wx.navigateTo({
      url: '/pages/test/test?title=' + event.currentTarget.dataset.title,
    })
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