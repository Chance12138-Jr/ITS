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
 
      content: '您已选择A101车位',
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
                                  "value": "01"
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
 
      content: '您已选择A102车位',
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
                                  "value": "02"
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
 
      content: '您已选择A103车位',
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
                                  "value": "03"
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
 
      content: '您已选择A104车位',
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
                                  "value": "04"
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
 
      content: '您已选择B101车位',
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
                                  "value": "05"
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
 
      content: '您已选择B102车位',
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
                                  "value": "06"
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
 
      content: '您已选择B103车位',
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
                                  "value": "07"
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
 
      content: '您已选择B104车位',
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
                                  "value": "08"
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
 
      content: '您已选择C101车位',
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
                                  "value": "09"
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
 
      content: '您已选择C102车位',
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
                                  "value": "10"
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
 
      content: '您已选择C103车位',
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
                                  "value": "11"
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
 
      content: '您已选择C104车位',
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
                                  "value": "12"
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
 
      content: '您已选择D101车位',
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
                                  "value": "13"
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
 
      content: '您已选择D102车位',
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
                                  "value": "14"
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
 
      content: '您已选择D103车位',
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
                                  "value": "15"
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
 
      content: '您已选择D104车位',
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
                                  "value": "16"
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