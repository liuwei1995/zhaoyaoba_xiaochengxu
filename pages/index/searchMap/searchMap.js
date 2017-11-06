const app = getApp()


// 引入SDK核心类
var QQMapWX = require('../../../libs/qqmap-wx-jssdk.js');
var qqmapsdk;

// 7V6BZ-IIZCF-7THJK-NX4L2-FN2Q2-OPFBS
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    Height: 500,
    scale: 13,
    latitude: "",
    longitude: "",
    markers: [],
    controls: [{
      id: 1,
      iconPath: '/assests/imgs/dingwei.png',
      position: {
        left: 320,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    },
    {
      id: 2,
      iconPath: '/assests/imgs/hezuo.png',
      position: {
        left: 340,
        top: 100 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    }
    ],
    circles: []


  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
   
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          view: {
            Height: (res.windowHeight),
          }
          ,
            controls: [{
            id: 1,
            iconPath: '/assests/imgs/dingwei.png',
            position: {
              left: res.windowWidth - 50,
              top: res.windowHeight - 100,
              width: 20,
              height: 20
            },
            clickable: true
          },
          {
            id: 2,
            iconPath: '/assests/imgs/hezuo.png',
            position: {
              left: res.windowWidth - 70,
              top: res.windowHeight - 100,
              // left: 340,
              // top: 100 - 50,
              width: 20,
              height: 20
            },
            clickable: true
          }
          ],
        })
      }
    })
   
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      // http://apis.map.qq.com/ws/place/v1/search?boundary=region(%E5%8C%97%E4%BA%AC,0)&keyword=%E6%88%90%E9%83%BD&page_size=20&page_index=1&orderby=_distance&key=7V6BZ-IIZCF-7THJK-NX4L2-FN2Q2-OPFBS
      success: function (res_f) {
        console.log(res_f)
        
        // 实例化API核心类
        var demo = new QQMapWX({
          key: '7V6BZ-IIZCF-7THJK-NX4L2-FN2Q2-OPFBS' // 必填
        });

        // 调用接口
        demo.search({
          keyword: '药店',
          page_size:20,
          page_index:1,
          location: { "latitude": res_f.latitude, "longitude": res_f.longitude },
          success: function (res) {
            console.log(res);
            // res.data.length
            var myArray = new Array(res.data.length);

            for (var i = 0; i < res.data.length; i++) {
              var v_data = res.data[i];

              myArray[i] ={
                id: v_data.id,
                latitude: v_data.location.lat,
                longitude: v_data.location.lng,
                width: 50,
                height: 50,
                title: v_data.title
              };
            }

            _this.setData({
              latitude: res_f.latitude,
              longitude: res_f.longitude,

              markers: 
              myArray
              // [{
              //   id: "1",
              //   latitude: res_f.latitude,
              //   longitude: res_f.longitude,
              //   width: 50,
              //   height: 50,
              //   iconPath: "/assests/imgs/my.png",
              //   title: "离我最近"
              // }]
              ,
              circles: [{
                latitude: res_f.latitude,
                longitude: res_f.longitude,
                color: '#FF0000DD',
                fillColor: '#7cb5ec88',
                radius: 1000,
                strokeWidth: 1
              }]
            })
          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {
            console.log(res);
          }
        });

      
        // wx.request({
        //   url: "http://apis.map.qq.com/ws/place/v1/search",
        //   data: { "keyword": "药店", "boundary": "region(" + res.latitude + "," + res.latitude +",1000)","page_size":20,"page_index":1,"orderby":"_distance","key":"7V6BZ-IIZCF-7THJK-NX4L2-FN2Q2-OPFBS"}
        //   ,success: function (data) {
        //     console.log(data.data)
        //   }
        // })
      },
       fail: function (res) {
        console.log(res);
        getAuthor();
      },
      complete: function (res) {
        console.log(res);
      }

    })

    
  },


// ============================================================================================



// ==========================================================================================
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
    
  },

  click: function (e) {
    var that = this;
    // wx.openLocation({ //出发wx.openLocation API
    //   latitude: Number(that.data.map_lat), //坐标纬度（从地图获取坐标）
    //   longitude: Number(that.data.map_long), //坐标经度（从地图获取坐标）
    //   name: res.data.name, //打开后显示的地址名称
    //   address: res.data.address //打开后显示的地址汉字
    // })
    console.log(e);

    
    wx.openLocation({
      // latitude: 23.362490,
      // longitude: 116.715790,
      // scale: 18,
      // name: '华乾大厦',
      // address: '金平区长平路93号'
      latitude: e.currentTarget.dataset.lat, // 纬度，范围为-90~90，负数表示南纬
      longitude: e.currentTarget.dataset.lng, // 经度，范围为-180~180，负数表示西经
      scale: 14, // 缩放比例
      name: e.currentTarget.dataset.name, // 位置名
      address: e.currentTarget.dataset.address, // 地址的详细说明

    })
  },  

})


function getAuthor() {
  wx.getSetting({
    success(res) {
      if (!res.authSetting['scope.userLocation']) {
        wx.openSetting({
          success: (res) => {
            console.log(res)
            if (!res.authSetting['scope.userLocation']) {
              wx.showModal({
                title: '温馨提醒',
                content: '需要获取您的地理位置才能使用小程序',
                cancelText: '不使用',
                confirmText: '获取位置',
                success: function (res) {
                  if (res.confirm) {
                    getAuthor();
                  } else if (res.cancel) {
                    wx.showToast({
                      title: '您可点击左下角 定位按钮 重新获取位置',
                      icon: 'success',
                      duration: 3000
                    })
                  }
                }
              })
            }
          }
        })
      }
    }
  })

}