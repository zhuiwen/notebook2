// bbb()

let appObj = getApp()
//console.log( appObj,'在index中获取到app实例' )
////console.log( appObj.person.username )

Page({ //Page构造函数
    data:{
      name:'zbj',
      job:'背媳妇儿'
    },
    fn(){
      console.log(  this,'我是fn函数' )
      console.log( this.data ) //在逻辑层中直接使用data里数据，必须通过this.data.xxx
    },
    onLoad(){
      //console.log('页面加载，只执行一次')
      //this.fn()
    },
    onShow(){
      console.log('显示了 index')
    },
    onHide(){
      console.log('隐藏了 index')
    },
    onReady(){
        //console.log('准备好了,只执行一次')
    },
    //下拉事件发生以后
    onPullDownRefresh(){
      console.log('用户下拉了，开发者可以做刷新功能 ')
    },
    //上滑，距离底部多少的时候，会触发此事件 50 onReachBottomDistach 全局或局部都可以配置
    onReachBottom(){
      console.log('滑到了底部，可以请求下一页')
    }
})