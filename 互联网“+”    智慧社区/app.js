// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  onLaunch: function () {
    wx.setKeepScreenOn({ // 设置屏幕常亮
      keepScreenOn: true
    })
    wx.cloud.init({ // 初始化云能力
      env: 'test-633q8', // 指定使用环境ID为test-633q8的云开发环境
      traceUser: true // 记录用户对云资源的访问
    })
  }
})
