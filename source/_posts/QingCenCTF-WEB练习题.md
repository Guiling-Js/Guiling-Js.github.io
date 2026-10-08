---
title: QingCenCTF-WEB练习题
date: 2026-9-15 10:00:00
categories:
  - CTF刷题笔记
tags:
  - CTF
  - Web练习
  - QingCenCTF
description: QingCenCTF-WEB练习题
cover: 
---

# QingCenCTF-WEB练习题(待更新)

## web_test_1

第一关md5解密，直接输入在线解密网站

https://www.somd5.com/

![image-20260922153632247](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922153632247.png)

![image-20260922154403044](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922154403044.png)

第二关代理伪造，将请求IP改成内网ip

![image-20260922154439188](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922154439188.png)

第三关伪造cookie,未造成admin

![image-20260922154526393](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922154526393.png)

## web_test_2

打开题目后发现没有什么线索，查看源码后发现提示，决定抓包

![image-20260922190519338](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922190519338.png)

发现响应头有提示

![image-20260922190825846](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922190825846.png)

访问后发现源码泄露

![image-20260922190947632](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922190947632.png)

get传参令no的长度小于4但值大于88888888，可以用科学计数法

![image-20260922191340032](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922191340032.png)

也可以直接传数组

![image-20260922191415896](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922191415896.png)

## web_test_3

提示使用管理员账号登录后台，可以确定账户名是admin然后对密码进行爆破

![image-20260922202703151](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922202703151.png)



这里我用账号admin，密码123456

![image-20260922203714331](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922203714331.png)

上传一句话木马，后缀改成.jpg，上传的时候抓包，将后缀改成.php

![image-20260922204049564](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922204049564.png)

用蚁剑连接

![image-20260922204341213](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922204341213.png)

在目录中找到获得flag逻辑

![image-20260922204426120](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922204426120.png)

打开虚拟终端执行env命令获得flag

![image-20260922204613063](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260922204613063.png)

## web_test_4

利用提示的账号和密码进行登录，进入dashboard.php发现可以进行sql注入

![image-20260927210700340](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260927210700340.png)

分别查询库列发现flag的路径

```sql
' union select table_name,2,3,4,5 from information_schema.tables where table_schema=database()#
```

```sql
' union select column_name,2,3,4,5 from information_schema.columns where table_schema=database() and table_name='secrets'#
```

```sql
' union select secret_value,2,3,4,5 from secrets#
```

![image-20260927211513085](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260927211513085.png)

点击财务报表后发现file参数可以进行路径穿越，直接输入flag路径，得到flag

![image-20260927211709381](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260927211709381.png)