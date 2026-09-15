---
title: ctfshow-信息收集
date: 2026-09-15 15:41:29
tags: [ctf,web]
cover: /img/4.jpg
---

# ctfshow 信息收集

## web 1~web 5

#### web1

进入网页是这样

![image-20260525105915305](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525105915305.png)

直接F12,看代码

![image-20260525110001337](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525110001337.png)

#### web 2

进入网页后显示无法查看源代码

![image-20260525110111299](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525110111299.png)

方法1：

直接`ctrl+u`查看源代码

![image-20260525110230108](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525110230108.png)

方法2：

可以在终端中用curl工具（没有需要自己装）

![image-20260525110416516](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525110416516.png)

方法3：

`ctrl+shift+i`打开开发者工具

![image-20260525110602150](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525110602150.png)

方法4：

这个方法是我看了其他师傅的博客发现的，`view-source`协议是一种查看代码源的协议，通过在网址前加上前缀`view-source`，可以获取该网页的源代码

手动输入`view-source`协议：

![image-20260525111046497](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525111046497.png)

#### web 3

网页首页，查看源代码后没有可用信息

![image-20260525112025186](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525112025186.png)

方法一：

终端用curl工具（没有自己装）：

`curl -i`显示网页所有的请求头信息

![image-20260525112421409](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525112421409.png)

方法二：

用BurpSuite抓包

![image-20260525112945477](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525112945477.png)

#### web 4

方法一：

题目提示robots

![image-20260525172713412](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525172713412.png)

访问robots.txt

![image-20260525172825469](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525172825469.png)

继续访问/flagishere.txt

![image-20260525172913636](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525172913636.png)

方法二（不推荐）：

也可以用dirsearch等目录扫描工具进行扫描，有时候需要搭配词典，词典如果没有那就扫不到，而且还慢。

![image-20260525175950764](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525175950764.png)

#### web 5

题目提示phps源码泄露，尝试访问index.phps,得到文件

![image-20260525180425494](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525180425494.png)

打开文件后获得flag

![image-20260525180522238](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525180522238.png)

## web 6 ~web 10

#### web 6

![image-20260525180900666](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525180900666.png)

用dirsearch扫描后

![image-20260525181154737](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525181154737.png)

下载完压缩包后解压

![image-20260525181515894](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525181515894.png)

![image-20260525181535402](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525181535402.png)

直接访问fl000g.txt

![image-20260525181603679](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525181603679.png)

#### web 7

.git源码泄露：采用git管理项目时，上传项目忘记删除.git文件，攻击者可通过该文件恢复源码历史版本，从而造成源码泄露

![image-20260525211713828](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525211713828.png)

用dirsearch扫描![image-20260525211745303](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525211745303.png)

![image-20260525211806302](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525211806302.png)

#### web 8

![image-20260525212148907](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525212148907.png)

SVN（subversion）是程序员常用的源代码版本管理软件。在使用 SVN 管理本地代码过程中，使用 svn checkout  功能来更新代码时，项目目录下会自动生成隐藏的.svn文件夹（Linux上用 ls 命令看不到，要用 ls -al  命令），其中包含重要的源代码信息。造成SVN源代码漏洞的主要原因是管理员操作不规范，一些网站管理员在发布代码时，不愿意使用“导出”功能，而是直接复制代码文件夹到WEB服务器上，这就使得.svn隐藏文件夹被暴露于外网环境，黑客对此可进一步利用

![image-20260525212431734](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525212431734.png)

![image-20260525212640585](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525212640585.png)

#### web 9

![image-20260525212705658](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525212705658.png)

题目描述在vim改以下，可能发生vim信息泄露，又因为是网页有错别字，尝试`index.php.swp`

![image-20260525215756249](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525215756249.png)

访问后下载文件并打开

![image-20260525215828082](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260525215828082.png)

#### web 10

题目提示查看cookie

![image-20260526084238105](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526084238105.png)

方法一：

在开发者工具的网络模块找到cookie

![image-20260526084531978](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526084531978.png)

方法二：

用`curl -I url`只查看请求头，但这个需要手动解码

![image-20260526084828469](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526084828469.png)

![image-20260526085110936](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526085110936.png)

方法三：

用burp抓包查看请求头

![image-20260526085223793](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526085223793.png)

## web 11 ~ web 15

#### web 11

![image-20260526085449703](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526085449703.png)

看了其他师傅的WP,说这道题的域名出问题了

命令： nslookup -qt = txt flag.ctfshow.com

#### web 12

题目提示网站上的公开信息是密码

![image-20260526090325664](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526090325664.png)

在网页底部找到一串数字

![image-20260526090728069](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526090728069.png)

用dirsearch扫描后发现有登录界面

![image-20260526091244921](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526091244921.png)

用户名尝试admin，密码就刚才在网页下面找到的数字

![image-20260526091413745](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526091413745.png)

#### web 13

说明题目中存在敏感信息

![image-20260526091510304](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526091510304.png)

页面底部有一个**document**，是个链接

![image-20260526092416806](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526092416806.png)

点击后跳转到一个.pdf文件

![image-20260526092517687](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526092517687.png)

将you-domain换成靶机的域名进行访问

![image-20260526092710818](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526092710818.png)

输入账号和密码获得flag

![image-20260526092804003](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526092804003.png)

#### web 14

![image-20260526094007363](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526094007363.png)





![image-20260526093936555](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526093936555.png)

进入网页之后

![image-20260526145817564](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526145817564.png)

点击文件空间发现有很多目录，打开网站目录

![image-20260526145917657](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526145917657.png)

![image-20260526145932668](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260526145932668.png)

#### web 15

题目说邮箱会在成信息泄露，先找邮箱

![image-20260527100124885](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527100124885.png)

![image-20260527100858717](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527100858717.png)

然后用完dirsearch后进入登陆页面

![image-20260527100935178](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527100935178.png)

![image-20260527100956394](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527100956394.png)

这里我们不知道用户名和密码，点击忘记密码，根据邮箱回答密保问题

![image-20260527101535473](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527101535473.png)

可以看到所在城市西安

![image-20260527101622238](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527101622238.png)

用户名尝试admin，密码为admin7789

![image-20260527101701337](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527101701337.png)

## web 16 ~ web 20

#### web 16

说明探针泄露信息



![image-20260527102955852](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527102955852.png)

访问tz.php

![image-20260527110913518](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527110913518.png)

点击phpinfo

![image-20260527111018371](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527111018371.png)

#### web 17

提示sql备份文件泄露

![image-20260527133511191](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527133511191.png)

![image-20260527133732470](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527133732470.png)

访问后会下载一个.sql文件，打开后查找flag

![image-20260527133834603](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527133834603.png)

#### web 18

![image-20260527133906352](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527133906352.png)

![image-20260527134135920](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527134135920.png)

让玩到101分，直接查看源代码，发现有一个js文件

![image-20260527134240692](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527134240692.png)

发现有unicode编码

![image-20260527134258410](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527134258410.png)

解码后让去110.php看看

![image-20260527134417381](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527134417381.png)

获得flag

![image-20260527134445714](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527134445714.png)

#### web 19

应该是把密钥泄露了

![image-20260527134507137](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527134507137.png)

首页是一个登录框

![image-20260527134621831](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527134621831.png)

查看源代码后发现username=admin ,password=a599ac85a73384ee3219fa684296eaa62667238d608efa81837030bd1ce1bf04

![image-20260527134722169](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527134722169.png)

用curl命令直接得flag

![image-20260527135642620](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527135642620.png)

如果在网页中输入的话被AES加密，参数全在js代码 中，mode模式： CBC padding填充方式： ZeroPadding，密文输出编码： 十六进制hex 偏移量iv: ilove36dverymuch 密钥：0000000372619038
 密文为： a599ac85a73384ee3219fa684296eaa62667238d608efa81837030bd1ce1bf04，于是 可得到明文为： i_want_a_36d_girl，接着 用户名admin密码为i_want_a_36d_girl进行登录 ，登录成功后得到flag!

#### web 20

![image-20260527140300166](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527140300166.png)

![image-20260527140501569](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527140501569.png)

依旧dirsearch，发现数据库文件

![image-20260527140650755](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527140650755.png)

![image-20260527140816366](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527140816366.png)

![image-20260527140831788](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527140831788.png)

打开文件后，获得flag

![image-20260527141102281](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260527141102281.png)
