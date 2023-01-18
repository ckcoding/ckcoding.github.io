const fs = require('fs')
const axios = require('axios')
const urlArr = fs.readFileSync('./url.txt','utf-8').split(`
`)

const phone = "18779224474"
async function run(){
  var txtArr = []
  for(i of urlArr){
    await get(i)
    let id = i.replace('https://exch.jf180.vip/use/','')
    await check(id)
    let shipResult = await getUrl(id)
    if(shipResult){
      var price =  await getName(shipResult)
      var txt = `${id} - 永辉超市电子礼品卡 - ${price}元 - ${shipResult}`
      console.log(txt)
      txtArr.push(txt)
    }else{
      var txt = `${id} - 永辉超市电子礼品卡- 暂无商品信息`
      console.log(txt)
      txtArr.push(txt)
    }
  }
  fs.writeFileSync('./shopId.txt',txtArr.join(`
`),'utf-8')
}
//79a6090431eb411694b9360db8a2f3d3-永辉超市电子礼品卡20元-https://cardup.cn/ME53w0PXICjiAZBE 
//{"code":200,"success":true,"data":{"shipMode":"MERCHANT_LINK_SHIP_MODE","camiloShowFrom":"CAMILO","useStatus":"USED","shipStatus":"DELIVERED","shipAccount":"2336059980073216251","shipResult":"https://cardup.cn/ZKLa6EN9P9M6sww9"},"msg":"操作成功"}
async function getUrl(id){
  let url = `https://exch.jf180.vip/api/exchange-h5/order/use/result?mobile=${phone}&code=${id}`
  return axios(url).then(res=>{
    return res.data.data.shipResult
  }).catch(err=>{
    console.log('出错了')
  })
}

async function getName(url){
  return await axios(url).then(res=>{
    var data = res.data
    var reg = /(?=<b>\&yen\;)[\s\S]*?(?=<\/b><\/span>)/;
    var imageUrl = reg.exec(data) && reg.exec(data)[0];
    var price = imageUrl.replace('<b>&yen;','')
    return price
  })
}
async function check(id){
  var url = `https://exch.jf180.vip/api/exchange-h5/order/check/mobile?mobile=${phone}&code=${id}`
  await axios(url)
}
async function get(url){
  await axios(url)
}
run()