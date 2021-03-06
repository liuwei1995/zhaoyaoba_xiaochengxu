// pages/health/health.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    you:false,
    array: [],
    swiper_tab_list: [],
     /** 
        * 页面配置 
        */  
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight,

           scroll_view: {
            Height: res.windowHeight,
            width: res.windowWidth
          }

        });
      }

    });  

    var swiper_tab_list_arr = new Array();
    for (var i = 0; i < 4; i++) {
      swiper_tab_list_arr[i] = {
        data_current: i,
        swiper_tab_title: "title_" + i,
      }
    }
    
    var arr = new Array();
    for (var i = 0; i < 10; i++) {
      if (i % 2 == 0) {
        arr[i] = {
          id: i,
          _type: 2,
          title: "title_" + i,
          img: "http://7xloj2.com1.z0.glb.clouddn.com/1482733487700",
          outline: 'outline_5312354132465jbns,dfgjvzlnklkhkzsfnkuj' + i,
        }
      } else {
        arr[i] = {
          id: i,
          _type: 1,
          title: "title_" + i,
          img: "http://7xloj2.com1.z0.glb.clouddn.com/1482733487700",
          outline: 'outlinegnfuykjrdtgserghsedthnert6hesthetrhdthery_' + i,
        }
      }
    }
    that.setData({
      array: arr,
    })

 
    that.setData({
      swiper_tab_list: swiper_tab_list_arr
    })


    // http://www.zhaoyaoba.com/health/cli/notice/getAppStartAd/
// http://www.zhaoyaoba.com/
    const requestTask = wx.request({
      url: "https://www.zhaoyaoba.com/health/cli/notice/getAppStartAd/",
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
      }
    })

    // requestTask.abort();// 取消请求任务

  },

  click: function (event) {
    console.log(event)
    //  <navigator url="/pages/test/test" hover-class="navigator-hover" open-type='navigate'>
    wx.navigateTo({
      url: '/pages/test/test?title=' + event.currentTarget.dataset.title,
    })
  },

  /** 
      * 滑动切换tab 
      */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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