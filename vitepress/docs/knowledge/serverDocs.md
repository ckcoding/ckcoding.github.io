# 服务器常用开发
## 常用工具

### mac连接ssh出错
```sh
ssh-keygen -R {IP}
```

### 烧录软件：https://www.balena.io/etcher/

## 树莓派安装ubuntu20.1
固件：使用树莓派官方桌面程序进行选择，写入
### 账号：ubuntu
### 初始密码：ubuntu（登陆成功后会提示你修改密码）
### 启用root密码 sudo passwd

### 更新系统
```sh
#更新ubuntu系统的apt资源。
sudo apt-get  update  
#进行ubuntu系统与软件更新。
sudo  apt-get upgrade
```

### 安装中文语言包
```sh
apt install language-pack-zh-hans -y
```

### 更改默认语言为中文，修改/etc/default/locale文件添加：

```sh
#编辑文件
vi /etc/default/locale
## 写入以下配置
LANG=zh_CN.UTF-8
LANGUAGE=zh_CN:zh:en_US:en
```

### 连接wifi
```sh
#登陆Ubuntu后，搜索并显示wifi信号： 如果无法使用，请安装NetworkManager
sudo nmcli device wifi rescan
## 搜索wifi
nmcli device wifi list
#选择并连接wifi：
sudo nmcli device wifi 名称 password 密码
```

### 安装bt面板
```sh
wget -O install.sh https://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh ed8484bec
```


## 树莓派安装centos7
固件下载地址：见阿里云盘
账号：root
初始密码：centos（登陆成功后会提示你修改密码）

### 更新系统
```sh
#更新ubuntu系统的apt资源。
sudo apt-get  update  
#进行ubuntu系统与软件更新。
sudo  apt-get upgrade
```

### 扩容：https://zhuanlan.zhihu.com/p/450008668

```md
文章备份
1、先查看分区
sudo fdisk -l

经过观察我们发现/dev/mmcblk0p1是boot分区，这个不能动。/dev/mmcblk0p3 才是root分区，这个很关键。/dev/mmcblk0p2 应该是预装了一些命令，这个也不不能动的，实测，删除mmcblk0p2 了之后，重启树莓派，插上网线没反应，应该是没有启动成功，就只能重新烧制。

2、使用fdisk进入磁盘分区工具
sudo fdisk /dev/mmcblk0

3、输入 p ， 查看当前分区情况
我们要记住第二块分区的start位置，是593920，在后面要用。

4、删除第三块分区，输入"d"后输入"3"

5、建立新的主分区，输入"n"后输入"p"，分区编号输入"3"，因为我们前面观察到root分区是/dev/mmcblk0p3。

在设置 First sector 时，千万不能使用默认值2048，因为8192-593919是boot分区，593920到1593343是swap分区，这两个是不能动的，我们设置起始应该为1593344，last sector 使用默认即可，直接敲回车。

6、再次输入"p"检查新分区

7、确认无误后，输入"w"保存

提示内核使用的还是之前的分区，需要重启，才能生效。

8、重启树莓派
sudo reboot

9、保护分区
resize2fs  /dev/mmcblk0p3

10、检查一下分区
df -h

此时 /dev/root 大小已经和内存卡大小相差不大，证明是把隐藏的空间分配了。
```
### 更新系统 yum update && yum upgrade

### 安装中文语言包
```sh
yum install kde-l10n-Chinese    #安装简体中文语言包
#修改语言文件
vi /etc/locale.conf
#修改为
LANG="zh_CN.UTF-8" 
```

### 连接wifi
```sh
#登陆Ubuntu后，搜索并显示wifi信号： 如果无法使用，请安装NetworkManager
sudo nmcli device wifi rescan
## 搜索wifi
nmcli device wifi list
#选择并连接wifi：
sudo nmcli device wifi 名称 password 密码
```

### 安装bt面板
```sh
yum install -y wget && wget -O install.sh https://download.bt.cn/install/install_6.0.sh && sh install.sh ed8484bec
```
