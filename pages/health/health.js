// pages/health/health.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    you:false,
    array: [{
        title:"title1",
        _type:1,
        img:"http://7xloj2.com1.z0.glb.clouddn.com/1482733487700",
        message: 'foo',
    }, {
        title: "title2",
        _type: 2,
        img: "http://7xloj2.com1.z0.glb.clouddn.com/1482733487700",
         message: 'bar'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = new Array();
    for(var i = 0; i < 10; i++){
      if(i%2 == 0){
        arr[i] = {
          _type: 2,
          title: "title_"+i,
          img: "http://7xloj2.com1.z0.glb.clouddn.com/1482733487700",
          message: 'message_'+i,
        }
      }else{
        arr[i] = {
          _type: 1,
          title: "title_" + i,
          img: "http://7xloj2.com1.z0.glb.clouddn.com/1482733487700",
          message: 'message_' + i,
        }
      }
    }
    var _this = this;
    _this.setData({
      array : arr,
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