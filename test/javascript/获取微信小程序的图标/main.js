var axios = require('axios');
var fs = require('fs');
//容易封ip
var cookie ='ua_id=3rHKahy7uSJnPIUMAAAAADMUVHOqqhdNBXquyr7hXaU=; mm_lang=zh_CN; wxuin=71609235328529; media_ticket_id=3847125698; mm_lang=zh_CN; media_ticket=3ae6543fadcb30b9b5ea5c6d16e2feae34b62e95; uuid=fd2f48e60469fadda3fc1538c6f00014; rand_info=CAESIMb56oq0Lv/5ty/czfR7Ip+T73Ff4JOxm5wvABXgPtX9; slave_bizuin=3805014084; data_bizuin=3805014084; bizuin=3805014084; data_ticket=8v+uR843OgblTC/42UWJYFqZ/MROxbZh4eiSrlfRDDxB76uvPeLB/m0FNIK5fFx8; slave_sid=WjhuNTAwZjhNaUZHQ29WbWtuMEVSaU4wQUdFNE43VTIySU1UczloYl9OcGdESE12UGxYSk9SUkNTV2JiZHY2bFpROEdoNHRtVlBvbVlteHFVdVVyWkRIMk1sRUx3Q1ZROFRFNkxpM3dxMEcxUnhreHhEeWxENzRPTUhlbmc4cHYxcXNSRUFrbmh6MDk1dDRF; slave_user=gh_996a6d9603d7; xid=51b27da8f42a50ca218189a009545472; sig=h01b4c75907580e3703d00f0aa952c226ebd11bbc259931b150b19389c91fbfd9198de4dfdbd8d52fbf'


  var nameArr = ['国家政务服务平台','健康新甘肃', '健康新高台','甘快办','甘抗原','交管12123','电子营业执照','12315','邮政业消费者申诉','税务申报','医疗保险','生活缴费','话费充值','社保缴费','明厨亮灶','人民法院在线服务','甘肃公安微警务'];


async function main(){
  for (e of nameArr) {
    var config = {
      method: 'get',
      url: `https://mp.weixin.qq.com/acct/newinfringement?action=search_biz_list&complain_type=11&search_type=1&begin=0&nickname=${e}&token=395158197&lang=zh_CN`,
      headers: {
        cookie: cookie,
      },
    };
    await axios(config)
      .then(async function (response) {
        var str = JSON.stringify(response.data);
        // console.log(str);
        
        var reg = /(?=https\:\/\/mmbiz.qlogo.cn).*?(?=wxfrom=200)/;
        var imageUrl = reg.exec(str) && reg.exec(str)[0];
        if(imageUrl){
          await down(e, imageUrl);
        }else{
          console.log(e+"没有匹配到，请输入正确的名字，如果全部报错，可能cookie过期了或者ip被封了，fuck微信");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

function down(e, url) {
	var config = {
		method: 'get',
		url: url,
		headers: {
			cookie: cookie,
		},
		responseType: 'arraybuffer',
	};
	axios(config)
		.then(function (response) {
			fs.writeFileSync("images/"+ e + '.png', response.data, 'binary');
		})
		.catch(function (error) {
			console.log(error);
		});
}
main()