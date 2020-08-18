
 console.log( wx.getLaunchOptionsSync() ,'通过api')

App({
    onShow(options){
      //console.log( options,'show' )
    },
    onLaunch(options){
      //console.log(options,'launch')
      let scene = options.scene
      //扫描：1011没有优惠券直接点餐
      //公众号：1035 潜在用户，可以让潜在用户领取优惠券来产生交易
      if( scene == 1011 ){
          console.log('没有优惠券直接点餐')
      }else if( scene == 1035 ){
        console.log('潜在用户，可以让潜在用户领取优惠券来产生交易')
      }
    }
})