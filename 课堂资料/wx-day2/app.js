
App({

  onShow(){
    console.log('app. onshow')
  },
  onHide(){
    console.log('app. onhide')
  },
  person:{
    username:'swk',
    job:'降妖除魔'
  }
})

// App({
//     //初始化小程序，只执行一次。
//     // 如果你的小程序 必须让用户登录 才能够使用服务，就可以在这里进行写业务 。
//     onLaunch(){
//       console.log('onLaunch')
//       console.log(this,'我是app实例')
//     },
//     onShow(){
//       console.log('小程序的显示，可以执行多次')
//     },
//     onHide(){
//       console.log('小程序的隐藏，可以执行多次')
//     },
//     onPageNotFound(){
//       console.log('页面不存在')
//       //通过api的形式跳转到其他活动页或首页。
//     },
//     onError(){
//         console.log('我是error')
//     },
//     name:'zbj',
//     person:{
//       username:'swk'
//     },
//     fn(){
//       console.log('我是fn函数')
//     }
// })