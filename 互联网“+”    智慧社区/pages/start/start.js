Page({
  // 引导页自动跳转
   onShow: function(){
     setTimeout(function(){
       wx.redirectTo({
         url: '../index/index',
       })
     },1500)
   }
})
