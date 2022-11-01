# 利用公网ipv6实现远程访问
先记录几个ipv6的检测地址

[强烈推荐:https://ipw.cn/ipv6/](https://ipw.cn/ipv6/)

[https://www.test-ipv6.com/](https://www.test-ipv6.com/)

常用命令
```bash
# 请勿用于商业用途，仅供个人测试学习之用，请遵守中国法律法规
# 查询本机外网IPv4地址
curl 4.ipw.cn

# 查询本机外网IPv6地址
curl 6.ipw.cn

# 测试网络是IPv4还是IPv6访问优先(访问IPv4/IPv6双栈站点，如果返回IPv6地址，则IPv6访问优先)
curl test.ipw.cn
```
小知识：`ipv4的网络无法直接访问ipv6，所以，在域名解析的地方也要解析A记录`
## ikuai管理平台远程访问

目前我的需求是这样的，我需要在公司访问家里的网络。家里是IPV6的环境，而公司不支持IPV6，有什么办法能够在纯IPV4的环境下访问纯IPV6的服务呢，而且不限速，还免费呢？

答案：就是利用Cloudflare，将IPV6转为IPV4

[Cloudflare：点击访问](https://dash.cloudflare.com/bc25671c4b2c14dab6efbfadb2d548ca)

准备：`域名`（推荐阿里云的），`Cloudflare`账号

起步：

- 登录Cloudflare添加你的域名，并选择免费计划


![](/images/daynote/1.png)



- 然后修改域名的DNS服务商为`Cloudflare`给你生成的
- 阿里云修改DNS服务商方法：[点击访问](https://help.aliyun.com/document_detail/54157.html?spm=a2c4g.11186623.0.0.d8805ec1DE8cHW)

- 修改完毕后，需要一段时间进行解析`Cloudflare`会自动检测，一般几分钟就成功了
- 然后手动添加一条DNS记录如下图。记得开启这个已代理，图标为黄色即为开启
  
![](/images/daynote/2.jpg)

- 然后获取`Cloudflare`的api密钥，如下图(注意⚠️，ikuai必须使用全局的密钥)

![](/images/daynote/3.png)

- 最后等待几个小时后即可在ipv4环境下访问ipv6