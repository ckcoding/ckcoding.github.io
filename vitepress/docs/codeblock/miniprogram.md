
# 微信小程序

## 微信小程序wxs
```js
<wxs module="format">
  var toHide = function (data, frist, end) {
    if (data) {
      var len = data.length
      var star = '****************************************'
      var starlen = len - frist - end
      return data.substring(0, frist) + star.substring(0, starlen) + data.substring(len - end, len)
    } else {
      return '--'
    }
  }
  //核酸状态
  var nucleicAcid = function (e) {
    var acidList = {
      '1': '阴性', '2': '阳性'
    }
    return acidList[e + '']
  }

  //健康码状态
  var healthyCode = function (e) {
    var healthyCode = {
      '1': '绿码', '2': '黄码', '3': '红码'
    }
    return healthyCode[e + ''] || "无数据"
  }

  //核酸日期
  var nucleicDay = function (e) {
    var nucleicDay = {
      '1': "24小时", '2': '48小时', '3': '72小时', '4': '超三日', "8": "超7日"
    }
    return nucleicDay[e + '']
  }
  //健康码状态背景
  var getHbg = function (e) {
    var healthyCode = {
      '1': '#51CA67', '2': '#FFC460', '3': '#DF4040'
    }
    return healthyCode[e + ''] || "#DF4040"
  }
  //核酸背景颜色
  var getNubg = function (i, e) {
    console.log('i,e1,4', i, e);
    if (i == '1' && e < 4) return ''
    if (i == '1' && e == 4) return '#FFC460'
    return '#DF4040'
  }
  module.exports = {
    toHide: toHide, //身份证脱敏
    nucleicAcid: nucleicAcid, //核酸状态，结果
    healthyCode: healthyCode, //健康码状态
    nucleicDay: nucleicDay,  //核酸间隔日期
    getHbg: getHbg, //健康码背景色
    getNubg: getNubg//核酸背景颜色
  }
</wxs>
```
## 微信小程序动态输入
### wxml
```html
<input type="text" placeholder="请输入" bindinput="myInput" data-value="departure"  value="{{myInfo.departure}}"/>
```
### js
```js
  //我的输入
  myInput(e) {
    if(e.detail.value.length > 49){
      wx.showToast({
        title: '输入内容不能超过50个字',
        duration: 500,
        icon: 'none',
      })
      return
    }
    var value = e.detail.value;
    var key = e.target.dataset.value;
    this.setData({
      [`myInfo.${key}`]: value,
    });
  },
```