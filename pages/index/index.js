

Page({
  data: {
    text: "大乐透历史中奖号码",
    daletouList:[
    ]
  },

  onLoad: function () {
    console.log('ssssssssssssssApp Launchsssssssssssssssssssss')
    this.RequestData()
  },
RequestData: function () { 
  var that = this;
  wx.request({
    url: 'http://currentbp.com/daletou/list',
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      console.log(res.data.body)
      if (1 == res.data.status) {
        that.setData({ daletouList: res.data.body })
      } else {
        console.log("=========   error       ================")
      }
    }
  })
}

})