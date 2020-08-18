

Page({
  data:{
    nums:[11,22,33],
    name:'zbj'
  },
  handle1:function(){
    console.log('handle1',this)
  },
  handle2(){
    console.log('handle2',this)
  },
  handle3:()=>{
    console.log('handle3',this)
  },
  handle4(){
    // this.data.nums.forEach(()=>{
    //     console.log(this.data.name)
    // })
    let _this = this
     this.data.nums.forEach(function(){
       console.log(_this.data)
     })
  },
  outerHandle(){
    console.log('outerHandle')
  },
  middleHandle(){
    console.log('middleHandle')
  },
  innerrHandle(){
    console.log('innerHandle')
  },
  handle5(e){//接收事件对象
      /*
        target:事件源对象
        currentTarget：当前事件的绑定在哪个元素上
      */
    console.log( e )
  },
  handle6(e){
    console.log(e)
  }

})