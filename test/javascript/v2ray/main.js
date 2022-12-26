var axios = require('axios');
var cookie = process.env.v2ray.split('@')
var key = "a7c095b7-7d85-4b1e-9a5f-f6ee35f3823b"
async function send(e){
  var data = JSON.stringify({
    "msgtype": "text",
    "text": {
      "content": e
    }
  });

  var config = {
    method: 'post',
    url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key='+key,
    headers: {
      'Content-Type': 'application/json'
    },
    data : data
  };

  axios(config)
  .then(function (response) {
    console.log(e)
  })
  .catch(function (error) {
    console.log(error);
  });
}

async function check(){
  var data = JSON.stringify({"token":"glados.network"});
  let list = []
  await Promise.all(cookie.map((item)=>{
    var config = {
      method: 'post',
      url: 'https://glados.rocks/api/user/checkin',
      headers: {
        'cookie': item,
        'Content-Type': 'application/json'
      },
      data : data
    };
    return axios(config).then(async (response)=> {
        // console.log(response.data)
      if(response.data.code ==0 || response.data.code ==1){
        list.push(await status(item))
      }
    })
  }))
  return list
}


async function status(item){
  var config = {
    method: 'get',
    url:"https://glados.rocks/api/user/status",
    headers: {
      'cookie': item,
      'Content-Type': 'application/json'
    },
  }

  return axios(config).then((res)=>{
    return res.data
  })
}

async function run(){
  let data = await check()
  let sendList = []
  data.map(async (e)=> {
    var res = e.data
    var text = `账号${res.email}
剩余天数：${Math.trunc(res.leftDays)} 天
剩余流量${Math.round(res.traffic / (1024 ** 3))} GB / ${res.vip} GB
安卓(mac) Clash地址为：https://update.glados-config.com/clash/${res.userId}/${res.code}/${res.port}/glados-android.yaml
Quan X地址为：https://update.glados-config.com/quantumultx/${res.userId}/${res.hashed}
Shadow地址为：https://update.glados-config.com/subscribe/${res.userId}/${res.code}/${res.port}/servers
windows游戏加速：https://update.glados-config.com/netch/${res.userId}/${res.hashed}
iphone游戏加速：https://update.glados-config.com/shadowsocks/${res.userId}/${res.hashed}
`
    if(Math.round(res.traffic / (1024 ** 3)) < 126){
        sendList.push(text)
    }
  })
  await send(sendList.join('\n\n--------------------\n\n'))
}
run()