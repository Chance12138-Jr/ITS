// pages/a/a/b.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  a(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择A201车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "17"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
  
 
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  b(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择A202车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "18"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
  
 
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  c(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择A203车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "19"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
  
 
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  d(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择A204车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "20"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
  
 
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  e(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择B201车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "21"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  f(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择B202车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "22"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
 
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  g(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择B203车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "23"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
 
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  h(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择B204车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "24"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
 
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  i(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择C201车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "25"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  j(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择C202车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "26"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
  
 
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  k(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择C203车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "27"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
 
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  l(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择C204车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "28"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
  
 
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  m(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择D201车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "29"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
  
 
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  n(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择D202车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "30"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
  
 
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  o(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择D203车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "31"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
  
 
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  }, 
  p(){
    wx.showModal({
  
      title: '已选择成功',
 
      content: '您已选择D204车位',
      confirmText:'确认',
      confirmColor:'#DC143C',
      cancelText:'忽略',
 
      success: function (res) {
 
        if (res.confirm) {//这里是点击了确定以后
 
          console.log('用户点击确')
          console.log('用户点击确')
          var that=this
              let deviceid = "656634300"
              let apikey = "uS=0uktbVtSUxihAtcy9b8e12ww="
              let data={
                  "datastreams": [{
                          "id": "bcd",
                          "datapoints": [{                         
                                  "value": "32"
                              }                     
                          ]
                      },
                  ]    
              }
                
              wx.request({
                url: "https://api.heclouds.com/devices/656634300/datapoints",
                method:'POST',
                header:{
                  "content-type": 'application/json',
                  "api-key": "uS=0uktbVtSUxihAtcy9b8e12ww="
                },
                data:JSON.stringify(data),
                success(res){
                  console.log("更新数据成功",res)
                },
                fail: function(res){
                  wx.showToast({ title: '系统错误' })
                },
                complete:function(res){
                  wx.hideLoading()
                }
              })
            wx.showToast({
             title: '已停止',
             icon: 'none'
           })
  
 
        } else {//这里是点击了取消以后
 
          console.log('用户点击取消')
 
        }
 
      }
 
     })
  },
  onShareAppMessage: function () {
    return{
      title:"分享功能"
    }
  
  },
  onShareTimeline:function(){
    return{
      title:"欢迎使用智能社区小程序",
      query:"abc=335"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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