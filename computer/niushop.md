thinkphp6 的框架
## 安装
### 服务器配置
nginx
![](../image/computer/niushop/Snipaste_2021-06-18_14-51-42.png)

```
location / {
	if (!-e $request_filename){
		rewrite &(.*)$ /index.php?s=$1 last;
		break;
	}
}
```