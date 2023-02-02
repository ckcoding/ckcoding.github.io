const axios = require('axios')
const qs = require('qs');
const CryptoJS = require('crypto-js')
const fs = require('fs');
const path = require("path")
const configs = require(path.join(__dirname,'/config'))
var data = qs.stringify({
  'loginName': configs.phone,
  'Origin': '202.100.90.77:14313',
  'password': CryptoJS.MD5(configs.password).toString() 
});

var url = 'http://202.100.90.77:14313/'

//获取setCookie
async function getJSESSIONID(){
  var config = {
    url: url,
    maxRedirects: 0,
    validateStatus: function(status) {
        return status >= 200 && status < 303;
    },
};
  return axios(config).then(res=>{
    return res.headers["set-cookie"]?.[0]
  })
}
//登陆拿到token
async function getToken(setCookie){
  var config = {
    method: 'post',
    url : `${url}login/doLogin`,
    Cookie: `tab_list=; left_menu_father=24; ${setCookie}`,
    data:data,
    maxRedirects: 0,
    validateStatus: function(status) {
        return status >= 200 && status < 303;
    },
  }
  return axios(config).then(res=>{
    // return res.headers["set-cookie"]?.[0].replace('; Path=/; HttpOnly','')

    var data = {
      "token":res.headers["set-cookie"]?.[0].replace('; Path=/; HttpOnly',''),
      "time":new Date().valueOf() + 7200000
    }
    console.log('拿到了token');
    fs.writeFileSync(path.join(__dirname,'token.json'), JSON.stringify(data));
    return data
  })
}
//获取待办任务
async function getTodoTasks(token){
  var config = {
    method: 'get',
    url : `${url}projectTaskPlan/getAllDataNew?workState=0`,
    headers: {
      Cookie: `tab_list=; left_menu_father=24; ${token}`,
    },
  }
  return axios(config).then(res=>{
    return res.data?.data || []
  })
}

//获取任务详情
async function saveTask(token,item){
  var data = qs.stringify({
    id: item.id,
    taskId: item.taskId,
    projectId: item.projectId,
    planType: item.planType,
    actualWorkingHours: item.plannedWorkingHours,
    name: item.name,
    result:`<p>${item.name}</p>`,
    workState: 2
  });
  var config = {
    method: 'post',
    url : `${url}projectTaskPlan/save`,
    headers:{
      "Content-Type":'application/x-www-form-urlencoded; charset=UTF-8',
      "Cookie": `tab_list=; left_menu_father=24; ${token}`,
    },
    data:data
  }
  return axios(config).then(res=>{
    return res.data
  })
}

//任务放在进行中
async function haveInHand(token,id){
  var data = qs.stringify({
    id: id,
    state: 1
  });
  var config = {
    method: 'post',
    url : `${url}projectTaskPlan/workStateUpdate`,
    data:data,
    headers:{
      "Content-Type":'application/x-www-form-urlencoded; charset=UTF-8',
      "Cookie": `tab_list=; left_menu_father=24; ${token}`,
    },
  }
  return axios(config).then(res=>{})
}
//睡眠
let sleep = (time)=> new Promise((resolve)=>{
  setTimeout(resolve,time)
})

async function main(){
  var isLogin = fs.existsSync(path.join(__dirname,'token.json')) ? JSON.parse(fs.readFileSync(path.join(__dirname,'token.json'), 'utf-8')) : null
  if (!isLogin || new Date().valueOf() > isLogin.time){
    var setCookie = await getJSESSIONID()
    await sleep(2000)
    var isLogin = await getToken(setCookie)
  }
  await sleep(2000)
  var token = isLogin.token
  var list = await getTodoTasks(token)
  for(item of list){
    // 转为进行中
    // await haveInHand(token,item.id)
    await sleep(2000)
     // 确认任务
    await saveTask(token,item.taskPlans[0])
  }
}
main()