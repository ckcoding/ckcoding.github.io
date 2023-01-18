const tel = '17693239007'
const CryptoJS = require('crypto-js')
const axios = require('axios')
const qs = require('qs');
function aesEncrypt(t) {
  const r = CryptoJS.enc.Utf8.parse(t)
    , e = CryptoJS.AES.encrypt(r, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return e.ciphertext.toString().toUpperCase()
}
const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF"), iv = CryptoJS.enc.Utf8.parse("ABCDEF1234123412");
const phone = aesEncrypt(tel)
const data = qs.stringify({
  'telephone': phone
});
const config = {
  method: 'post',
  url: 'https://wx.10086.cn/website/bind/sendVoiceMsg/new',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  data : data
};

axios(config)
.then(function (response) {
  if (response.data == 10000) {
    console.log('拨打成功')
  }else{
    console.log(JSON.stringify(response.data));
  }
})
.catch(function (error) {
  console.log(error);
});





//5
// https://wx.10086.cn/website/bind/sendMsg
