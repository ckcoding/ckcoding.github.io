# 国际支付宝对接方案

## 参考资料

资质申请PDF: [商户申请资料](https://www.china-payments.com/pdf/alipay_global_help.pdf)   

## 准备（密钥生成，配置）

### 登录账号：806108998@qq.com（测试账号）
### 登录账号：********
### 密钥：使用RSA2密钥，公钥上传到国际支付宝中
参考链接: [密钥线上获取方式，选择PKCS1（国内）](https://miniu.alipay.com/keytool/create)   

### 测试软件下载：https://global.alipay.com/docs/ac/ref/testwallet
#### 应用公钥：

```

MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzLCgELOsZ/fC/x2wv3BihkO//tukEOxq5omCQv6lP7R0m/7frIWubwYvFP31Mw7myH8MnfogITMNDNytoTvI088qJIrteSBdRnnWZiOUr/eoBRI/ZUT38plNXxXCVTi/xq9LakK2gP8FTy77xlUKl5Lo+vhpdt0xRhrsKr3jOEbPffy+WaInv3D5roP5yXWIXhFKDk3Wp+A7Y7B8Yp2ohmwUdSwIUMs+cTqjpPvKLIvgEE8gN5IFRoUpcTEeMXdC8msjaJdhI66p3LgTfZj+c4ynFG5Y16xqaM6SIN8ab3zdpRBHPviepqJuYaJPwWMpXV1/u1c7wmTriGtuJIFPSwIDAQAB

```

#### 应用私钥：
```

MIIEpAIBAAKCAQEAzLCgELOsZ/fC/x2wv3BihkO//tukEOxq5omCQv6lP7R0m/7frIWubwYvFP31Mw7myH8MnfogITMNDNytoTvI088qJIrteSBdRnnWZiOUr/eoBRI/ZUT38plNXxXCVTi/xq9LakK2gP8FTy77xlUKl5Lo+vhpdt0xRhrsKr3jOEbPffy+WaInv3D5roP5yXWIXhFKDk3Wp+A7Y7B8Yp2ohmwUdSwIUMs+cTqjpPvKLIvgEE8gN5IFRoUpcTEeMXdC8msjaJdhI66p3LgTfZj+c4ynFG5Y16xqaM6SIN8ab3zdpRBHPviepqJuYaJPwWMpXV1/u1c7wmTriGtuJIFPSwIDAQABAoIBAQC8b7nbxlzolcnZLM8jXmYFbueYy0E+Jze+pkbaQC2G+S0E0129KJBOO2YqsCUEbSp+15+Y68Saa7IO7jWWIkCe5a/JVnCKOwZDtDRxcT4XxSnUCVl9dEHC/+ifqZtu80Bxu7z0xRfYp22O2RUGIBIROjjrmrcUq0sKXAygyJEeo0QvLcl9lxySegqCEP1/Rjn1tSAcDSifb6kKlArxBW6e4C7RSqL3z3+hK5qAbkCKBee14f1AvDbCt729Om2Jp+0BWXXWc4A5fQ1nAUZK+hTEkM+U8gToBCCFIxhIz7R/NdM3CjQB4dWl207sL9sJNXXa2P9VFvwUEmf9B9JJxi/ZAoGBAOdvILHb40EEoruxk9Ad8KhLzsfkpP0ZZ9DjETAsAWamrh8DPnxP25fuuoWOtuNMlI9LlIMnzRdbwaNlVwwKeFcaOaIgtj8+VDZlVe0XxKSLzcq07w/zjJ36mshhKeiT0LnyAKJ1EKdcckpamcp2UkVBTb01Cysi0me01cqgzTYPAoGBAOJqw/73fsL6nGx70WXVAD0aGcimDcyZihqCmnrEvqdPA63Ba7kutpDfC81mVE8JuZZ3gWhAv/ROtmbm5dehgnSBcwjwF5Xw46GpMdltMr2MQdqNxA7MZpr9Eddi+o9XwtJEIJT/6/KxCpk7ph0Esi4e+ip2sIl4qBl0NWLxxa8FAoGANpkj6HHMkhkq3wbMrUty6/E+bjAFsGQe9suq0WeASRxHda+JPUCFuLksLbf2c3cskQWumqZ4HuuZqheNSpzpuPrJ3/LBq/fjXBXaCJ4T2RHWUd0PjP7TDK4DeARcI69DjaqG9cySSjloCRyIrZfuXsJCOcHayalkY+zohu4am4cCgYEAuxkW1T6XlW+ai1rV8pxNEjDbVZ9Cj+vg339FQGYMVh1JIPBQoDolyxlFm3oP+TBEGD6wxQGcnbndqLLtA38HWlcORDiChPkGYbR66Pz/jPq2AHBdrwzhTPoLID0+Z+1RpId/lSDWTTpXU8CiyB/1TX9zoltqDm+SGVaaNyUrAjECgYAcreNZTkceG81zoEIVo9EmhVLcwyzJ3jk5RLFrvfNh80eiq4IKk12QKyOB0rBVbyAmI1RgMVRx0QNMWTKJJLV+80HaS9OQlx9mMaBbaeBrYDSsh/q5TwJrcoV45fYhaK15QxnVb9W0+WB72ETSRsTpka5zxuF877SiKqvsk7yvaQ==

```

#### 支付宝公钥：
```

MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjJkGHwE3wT+Ws3wr3yp+XXyYi7m2ZB2bh9X/noLDaw32twXTCjSLHJJJwdVXro6uRGmgIhzD58hiNrQwBpMjWwgBLfeCdefJYSe71DPw5JYCb+EGH7b2CISCEIvbKtGA834Dhu6zuPqrR/HQKqjY7qIbtpXK4tizRCvSUzRWg3cjV+LtGO2YbzNVrb8aNQfXH3SLhtQyN0SmhcD6x85vOOOmvbZNUX/8aIVbRHB5zEZ5ObxrAzx0kv50Tgd6Er07qhFhh0miobGktOquzFutouO+k6evPSO4RSdDjUMW0E6Zod7CBhvz/bZjCy49iLCEYVEkfcoLL35TDWZaCEoYyQIDAQAB

```

## 开发
> [流程概述](https://global.alipay.com/docs/ac/cashierpayment/accepting-payments)
> 
> 完整的支付流程，其中包含，支付，查询支付，退款等！
### 签名
> 签名步骤
- 第一步：获取私钥
- 第二步：构造要签名的内容(解释如下示例)
- 第三步：使用`SHA256withRSA`算法对JSON内容进行哈希处理。然后使用客户端的RSA私钥对值进行签名，RSA 密钥/对的长度必须为 2048 位。

 `SHA256withRSA`加密示例

`未组装`的数据
```json
{
	"head": {
		"version": "2.0.0",
		"function": "alipay.intl.acquiring.agreement.payCancel", //未知
		"clientId": "211xxxxxxxxxxxxxxx044", //客户端ID
		"reqTime": "2001-07-04T12:08:56+05:30", //请求时间精确到毫秒级
		"reqMsgId": "1234567asdfasdf1123fda", //未知
		"reserve": { //这里是订单类数据详情
			"order": {
				"orderAmount": {
					"currency": "HKD", //币种
					"value": "1314" //价格
				},
				"orderDescription": "Mika's coffee shop", //商品名称
				"referenceOrderId": "ORDER_20220112101619385", //订单编号
				"env": {
					"osType": "ANDROID", //机型
					"terminalType": "WAP" //web代表pc，wap表示移动端
				}
			},
			"paymentAmount": {
				"currency": "HKD",
				"value": "1314"
			},
			"paymentMethod": {
				"paymentMethodType": "ALIPAY_HK" //支付币种
			},
			"settlementStrategy": {
				"settlementCurrency": "HKD" //计算币种
			},
			"paymentNotifyUrl": "https://www.gaga.com/notify", //结果通知
			"paymentRedirectUrl": "https://global.alipay.com/doc/cashierpayment/intro", //回调地址
			"paymentRequestId": "REQUEST_20220112101619385", //单号
			"productCode": "CASHIER_PAYMENT" //默认
		}
	},
	"body": {
		"merchantId": "218xxxxxxxxxxxxxxx023", //商户ID
		"acquirementId": "2015xxxxxxxxxxxxxxxxxxxxx747" //paymentId订单ID，可用于退款
	}
}

```
 `组装后`的加密参数
>这里无需排序，Post代表请求方式，后面为请求API，其次数据格式（utf-8），其次商户号，时间戳，然后为提交的数据；
时间格式为 ISO 8601 ，例如：2019-05-28T12:12:12+08:00
代码：moment().format('YYYY-MM-DD HH:mm:ss'),
```json
POST /ams/sandbox/api/v1/payments/pay?_output_charset=utf-8&_input_charset=utf-8
SANDBOX_5Y5X382YF8CZ05415.2022-01-13T11:45:51+08:00.{"order":{"orderAmount":{"currency":"HKD","value":"1314"},"orderDescription":"Mika's coffee shop","referenceOrderId":"ORDER_20220113151043428","env":{"osType":"ANDROID","terminalType":"WAP"}},"paymentAmount":{"currency":"HKD","value":"1314"},"paymentMethod":{"paymentMethodType":"ALIPAY_HK"},"settlementStrategy":{"settlementCurrency":"HKD"},"paymentNotifyUrl":"https://www.gaga.com/notify","paymentRedirectUrl":"https://global.alipay.com/doc/cashierpayment/intro","paymentRequestId":"REQUEST_20220113151043428","productCode":"CASHIER_PAYMENT"}
```
>示例代码
```js

const crypto = require('crypto');
var privateKey = 'MIIEpAIBAAKCAQEAzLCgELOsZ/fC/x2wv3BihkO//tukEOxq5omCQv6lP7R0m/7frIWubwYvFP31Mw7myH8MnfogITMNDNytoTvI088qJIrteSBdRnnWZiOUr/eoBRI/ZUT38plNXxXCVTi/xq9LakK2gP8FTy77xlUKl5Lo+vhpdt0xRhrsKr3jOEbPffy+WaInv3D5roP5yXWIXhFKDk3Wp+A7Y7B8Yp2ohmwUdSwIUMs+cTqjpPvKLIvgEE8gN5IFRoUpcTEeMXdC8msjaJdhI66p3LgTfZj+c4ynFG5Y16xqaM6SIN8ab3zdpRBHPviepqJuYaJPwWMpXV1/u1c7wmTriGtuJIFPSwIDAQABAoIBAQC8b7nbxlzolcnZLM8jXmYFbueYy0E+Jze+pkbaQC2G+S0E0129KJBOO2YqsCUEbSp+15+Y68Saa7IO7jWWIkCe5a/JVnCKOwZDtDRxcT4XxSnUCVl9dEHC/+ifqZtu80Bxu7z0xRfYp22O2RUGIBIROjjrmrcUq0sKXAygyJEeo0QvLcl9lxySegqCEP1/Rjn1tSAcDSifb6kKlArxBW6e4C7RSqL3z3+hK5qAbkCKBee14f1AvDbCt729Om2Jp+0BWXXWc4A5fQ1nAUZK+hTEkM+U8gToBCCFIxhIz7R/NdM3CjQB4dWl207sL9sJNXXa2P9VFvwUEmf9B9JJxi/ZAoGBAOdvILHb40EEoruxk9Ad8KhLzsfkpP0ZZ9DjETAsAWamrh8DPnxP25fuuoWOtuNMlI9LlIMnzRdbwaNlVwwKeFcaOaIgtj8+VDZlVe0XxKSLzcq07w/zjJ36mshhKeiT0LnyAKJ1EKdcckpamcp2UkVBTb01Cysi0me01cqgzTYPAoGBAOJqw/73fsL6nGx70WXVAD0aGcimDcyZihqCmnrEvqdPA63Ba7kutpDfC81mVE8JuZZ3gWhAv/ROtmbm5dehgnSBcwjwF5Xw46GpMdltMr2MQdqNxA7MZpr9Eddi+o9XwtJEIJT/6/KxCpk7ph0Esi4e+ip2sIl4qBl0NWLxxa8FAoGANpkj6HHMkhkq3wbMrUty6/E+bjAFsGQe9suq0WeASRxHda+JPUCFuLksLbf2c3cskQWumqZ4HuuZqheNSpzpuPrJ3/LBq/fjXBXaCJ4T2RHWUd0PjP7TDK4DeARcI69DjaqG9cySSjloCRyIrZfuXsJCOcHayalkY+zohu4am4cCgYEAuxkW1T6XlW+ai1rV8pxNEjDbVZ9Cj+vg339FQGYMVh1JIPBQoDolyxlFm3oP+TBEGD6wxQGcnbndqLLtA38HWlcORDiChPkGYbR66Pz/jPq2AHBdrwzhTPoLID0+Z+1RpId/lSDWTTpXU8CiyB/1TX9zoltqDm+SGVaaNyUrAjECgYAcreNZTkceG81zoEIVo9EmhVLcwyzJ3jk5RLFrvfNh80eiq4IKk12QKyOB0rBVbyAmI1RgMVRx0QNMWTKJJLV+80HaS9OQlx9mMaBbaeBrYDSsh/q5TwJrcoV45fYhaK15QxnVb9W0+WB72ETSRsTpka5zxuF877SiKqvsk7yvaQ=='

var data = `POST /ams/sandbox/api/v1/payments/pay
SANDBOX_5Y5X382YF8CZ05415.2022-01-13T10:55:41Z.{"notifyType": "PAYMENT_RESULT","result": {"resultCode": "SUCCESS","resultStatus": "S","resultMessage": "success"},"paymentRequestId": "20200101234567890444","paymentId": "20200101234567890132","paymentAmount": {"value": "8000","currency": "EUR"},"actualPaymentAmount": {"value": "8000","currency": "EUR"},"paymentCreateTime": "2020-01-01T12:01:00+08:30","paymentTime": "2020-01-01T12:01:01+08:30"}`

// ----------------
// 加密
// ----------------
privateKey = "-----BEGIN RSA PRIVATE KEY-----\n" +
  (function () {
    let arr = [];
    let offset = 0;
    while (true) {
      let str = privateKey.substr(offset, 64);
      if (str == '') {
        break;
      }
      arr.push(str);
      offset += 64;
    }
    return arr.join("\n");
  })() +
  "\n-----END RSA PRIVATE KEY-----";

let sign = crypto.createSign('RSA-SHA256');
sign.update(new Buffer.from(data, 'utf-8'));
let sig = sign.sign(privateKey, 'base64');
console.log(sig)
```

- 第四步：将生成的签名添加到请求头中(其实这一步等于进行支付)

### 支付

**接口地址**

- 地址：`/api/v1/payments/pay`
- 方法：`POST`

**请求头**

| 序号 | 类型         |  值               | 说明      |
| - | - | -| - |
| 1    | client-id | SANDBOX_5Y5X382YF8CZ05415 | 商家的ID |
| 2    | request-time | 2022-01-13T15:33:00+08:00 | 请求创建时间，注意时间格式 |
| 3    |  signature | asignaturelgorithm=RSA256,keyVersion=1.... | 签名后的数据 |

**请求体**

| 序号 | 键值 | 类型  | 说明                                                   |
| ---- | ---- | ----- | ------------------------------------------------------ |
| 1    |   | JSON | 详见签名中`未组装`的参数 |

**请求示例**

```js
var axios = require('axios');
var data = '{"order":{"orderAmount":{"currency":"HKD","value":"1314"},"orderDescription":"Mika\'s coffee shop","referenceOrderId":"ORDER_20220113151043428","env":{"osType":"ANDROID","terminalType":"WAP"}},"paymentAmount":{"currency":"HKD","value":"1314"},"paymentMethod":{"paymentMethodType":"ALIPAY_HK"},"settlementStrategy":{"settlementCurrency":"HKD"},"paymentNotifyUrl":"https://www.gaga.com/notify","paymentRedirectUrl":"https://global.alipay.com/doc/cashierpayment/intro","paymentRequestId":"REQUEST_20220113151043428","productCode":"CASHIER_PAYMENT"}';

var config = {
  method: 'post',
  url: 'https://open-sea.alipay.com/ams/sandbox/api/v1/payments/pay?_output_charset=utf-8&_input_charset=utf-8',
  headers: { 
    'accept': ' application/json', 
    'client-id': ' SANDBOX_5Y5X382YF8CZ05415', 
    'content-type': ' text/plain;charset=UTF-8', 
    'origin': ' https://global.alipay.com', 
    'original_host': ' open-sea.alipay.com', 
    'referer': ' https://global.alipay.com/', 
    'request-time': ' 2022-01-13T15:33:00+08:00', 
    'signature': ' algorithm=RSA256,keyVersion=1,signature=H4PUC2Y8ZM%2FlULrDwKABk91vASeWkxannZ1DKceNLqlGvNw6vA0YM%2BP4QWGbpPGJ5aPNeEhdAYso%2FQCXaGk9D96G3FolDyt4kMNDDEw1PtiPFxP%2B5V2est5d4iHQyIXrohRi%2BYTeJNG4e91pRdQHCNRTMm3sC9WSCLEniSr1kXWtte5Ch6AgtSLfy%2Fktd4N7WXMgBBNmaAIWmpVixf6BY7t2AkgGsqESL8mDafiRAN0EnhLK2P3r8xgzBW4Qcf9THYD6K43Txr%2FSfA0ss6jYvvLvqLtnGLXPds6FZScp31BOSq4OriH80NiVuNBsVUwJuSjGC%2BAmfiKH3kJzqSVV5w%3D%3D'
  },
  data : data
};
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

```

### 查询支付结果
**接口地址**
- 地址：`/api/v1/payments/inquiryPayment`
- 方法：`POST`
**请求头**
参考支付接口
**请求体**

| 序号 | 键值 | 类型  | 说明                                                   |
| ---- | ---- | ----- | ------------------------------------------------------ |
| 1    |   | JSON | 如下，查询方式有2中方式|
```json
//第一种
{
    "paymentId": "20200415194010800100188300223795303"
}
//第二种
{
    "paymentRequestId": "REQUEST_20220113170357156"
}
```

### 验签
> 签名步骤
- 第一步：获取`支付宝`的公钥(大坑，不是应用公钥，是支付宝的)
- 第二步：构造要签名的内容(解释如下示例)
- 第三步：使用`SHA256withRSA`进行验签。

 `SHA256withRSA`验签示例

 `组装后`的加密参数
```json
这里无需排序，Post代表请求方式，后面为请求API，其次数据格式（utf-8），其次商户号，时间戳，然后为提交的数据；
提交的数据，用Post来接收
时间格式为 ISO 8601 ，例如：2019-05-28T12:12:12+08:00，从post的请求头获取


`POST /api/all
SANDBOX_5Y5X382YF8CZ05415.2022-01-18T07:11:42Z.{"notifyType":"PAYMENT_RESULT2"}`
```
> 示例代码
```js
const crypto = require('crypto');
// ----------------
// 验签
// ----------------
var sig = `PsUnbVTkBqfIuLr4DTyr2KHdV+1MoO1nl53vIr8WQNafsCT7W/sLH9eEkO4kddnMNXJJnkEcsGFSZScvus9vdwr9v2nIRSpckIrvKxkY8ncl7mjTV/9WgYgUDN+PRm/FEhSw95Qsx14E9Pt2PLQWrz6Y1gLBnfF2xQLS/kALEgVo8zzLj1YYE4g/ar3SK5V7Q9TSQCKf/TScsHFo+PaEEjcuBN6ojZ9iisV8t+LTIpm/36RpZ6WvzspQ5QqgaUL2TeyBwq9fI1PV8vcKzbLdlSCOHuY78qoBUMmwR46av9lS20ibcoEjfdgwvRlQSPK50UW126ADJpE32MqsigExfg==`
//大坑，这里的是支付宝的公钥，不是应用公钥
var publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjJkGHwE3wT+Ws3wr3yp+XXyYi7m2ZB2bh9X/noLDaw32twXTCjSLHJJJwdVXro6uRGmgIhzD58hiNrQwBpMjWwgBLfeCdefJYSe71DPw5JYCb+EGH7b2CISCEIvbKtGA834Dhu6zuPqrR/HQKqjY7qIbtpXK4tizRCvSUzRWg3cjV+LtGO2YbzNVrb8aNQfXH3SLhtQyN0SmhcD6x85vOOOmvbZNUX/8aIVbRHB5zEZ5ObxrAzx0kv50Tgd6Er07qhFhh0miobGktOquzFutouO+k6evPSO4RSdDjUMW0E6Zod7CBhvz/bZjCy49iLCEYVEkfcoLL35TDWZaCEoYyQIDAQAB'
// "/api/all" 这个是接收支付宝通知的后缀
var data = `POST /api/all
SANDBOX_5Y5X382YF8CZ05415.2022-01-18T07:11:42Z.{"notifyType":"PAYMENT_RESULT2"}`


publicKey = "-----BEGIN PUBLIC KEY-----\n" +
  (function () {
    let arr = [];
    let offset = 0;
    while (true) {
      let str = publicKey.substr(offset, 64);
      if (str == '') {
        break;
      }
      arr.push(str);
      offset += 64;
    }
    return arr.join("\n");
  })() +
  "\n-----END PUBLIC KEY-----";

let verify = crypto.createVerify('RSA-SHA256');
verify.update(new Buffer.from(data, 'utf-8'));
let rst = verify.verify(publicKey, sig, 'base64');
console.log(rst);


```
- 第四步：返回结果为true或false


### 退款
**接口地址**
- 地址：`/api/v1/payments/refund`
- 方法：`POST`
**请求头**
参考支付接口
**请求体**

| 序号 | 键值 | 类型  | 说明                                                   |
| ---- | ---- | ----- | ------------------------------------------------------ |
| 1    |   | JSON | 参数如下|
```json
{
    "paymentId": "033147158225590726845054580229734628MZuqaeneFE202002210001162837",//交易单号
    "refundAmount": {
        "currency": "PHP",//币种，港币为HKD
        "value": "500"//退款金额
    },
    "refundRequestId": "REFUND_20220113170547076"//订单号
}
```

### 取消付款
**接口地址**
- 地址：`/api/v1/payments/cancel`
- 方法：`POST`
**请求头**
参考支付接口
**请求体**

| 序号 | 键值 | 类型  | 说明  |
| ---- | ---- | ----- | ------------------------------------------------------ |
| 1    |   | JSON | 参数如下，2种方式|
```json
{
    "paymentRequestId": "REQUEST_20220113170815307"
}
{
    "paymentId": "20200415194010800100188300223795303"
}
```
## 测试

测试支付软件下载:[点击下载](https://global.alipay.com/docs/ac/ref/testwallet)
| 测试账号 | 测试密码 |
| ---- | ---- |
| amsmerchant01@163.com    |Alipay123 |
| amsmerchant02@163.com    |Alipay123 |
| amsmerchant03@163.com    |Alipay123 |


在线沙盒验证地址：[在线沙盒验证](https://global.alipay.com/open/console/developer/app/iTest?_route=QK&appId=5Y5X382YF8CZ05415)


```
可以模拟付款，退款，查询等操作
```
### **支付**
 ### 入参参考：
 https://global.alipay.com/docs/ac/cashierpayment/getting_started
#### 参考值

 ```
{
    "order": {
        "orderAmount": {
            "currency": "HKD",
            "value": "1314"
        },
        "orderDescription": "Mika's coffee shop",
        "referenceOrderId": "ORDER_20220111170809661",
        "env": {
            "osType": "ANDROID",
            "terminalType": "WEB"
        }
    },
    "paymentAmount": {
        "currency": "HKD",
        "value": "1314"
    },
    "paymentMethod": {
        "paymentMethodType": "ALIPAY_HK"
    },
    "settlementStrategy": {
        "settlementCurrency": "HKD"
    },
    "paymentNotifyUrl": "https://www.gaga.com/notify",
    "paymentRedirectUrl": "https://global.alipay.com/doc/cashierpayment/intro",
    "paymentRequestId": "REQUEST_20220111170809661",
    "productCode": "CASHIER_PAYMENT"
}
 ```
 #### 返回值
```
{
    "normalUrl": "https://render.alipay.com/p/c/jzmcoal2/hkcheck-scan.html?paymentId=911381641892298645108352608217660230XqZZPdcakZ202201101003328319&callback=https%3A%2F%2Fglobal.alipay.com%2Fdoc%2Fcashierpayment%2Fintro&amountValue=13.14&amountCurrency=HKD&county=SG&merchantId=21881200018285C1&merchantName=&code=golcashier1641892298660sandbox&referenceOrderId=ORDER_20220111170809661&paymentMethodType=ALIPAY_HK",
    "orderCodeForm": {
        "codeDetails": [
            {
                "codeValue": "golcashier1641892298660sandbox",
                "displayType": "TEXT"
            },
            {
                "codeValue": "https://render.alipay.com/p/c/jzmcoal2/showqrimage.html?picSize=L&code=golcashier1641892298660sandbox",
                "displayType": "BIGIMAGE"
            },
            {
                "codeValue": "https://render.alipay.com/p/c/jzmcoal2/showqrimage.html?picSize=M&code=golcashier1641892298660sandbox",
                "displayType": "MIDDLEIMAGE"
            },
            {
                "codeValue": "https://render.alipay.com/p/c/jzmcoal2/showqrimage.html?picSize=S&code=golcashier1641892298660sandbox",
                "displayType": "SMALLIMAGE"
            }
        ],
        "expireTime": "2022-01-12T03:11:38+08:00"
    },
    "paymentActionForm": "{\"method\":\"GET\",\"paymentActionFormType\":\"RedirectActionForm\",\"redirectUrl\":\"https://render.alipay.com/p/c/jzmcoal2/hkcheck-scan.html?paymentId=911381641892298645108352608217660230XqZZPdcakZ202201101003328319&callback=https%3A%2F%2Fglobal.alipay.com%2Fdoc%2Fcashierpayment%2Fintro&amountValue=13.14&amountCurrency=HKD&county=SG&merchantId=21881200018285C1&merchantName=&code=golcashier1641892298660sandbox&referenceOrderId=ORDER_20220111170809661&paymentMethodType=ALIPAY_HK\"}",
    "paymentAmount": {
        "currency": "HKD",
        "value": "1314"
    },
    "paymentCreateTime": "2022-01-11T17:11:38+08:00",
    "paymentId": "911381641892298645108352608217660230XqZZPdcakZ202201101003328319",
    "paymentRequestId": "REQUEST_20220111170809661",
    "redirectActionForm": {
        "method": "GET",
        "redirectUrl": "https://render.alipay.com/p/c/jzmcoal2/hkcheck-scan.html?paymentId=911381641892298645108352608217660230XqZZPdcakZ202201101003328319&callback=https%3A%2F%2Fglobal.alipay.com%2Fdoc%2Fcashierpayment%2Fintro&amountValue=13.14&amountCurrency=HKD&county=SG&merchantId=21881200018285C1&merchantName=&code=golcashier1641892298660sandbox&referenceOrderId=ORDER_20220111170809661&paymentMethodType=ALIPAY_HK"
    },
    "result": {
        "resultCode": "PAYMENT_IN_PROCESS",
        "resultMessage": "Payment is processing.",
        "resultStatus": "U"
    }
}
```