# git

## 中文文件名乱码
git 默认中文文件名是 \xxx\xxx 等八进制形式，是因为 对0x80以上的字符进行quote。

只需要设置core.quotepath设为false，就不会对0x80以上的字符进行quote。中文显示正常

git config --global core.quotepath false

## question
### git 取消对文件的跟踪
git rm 
### git 排除入库的文件
对于已入库的文件，取消状态跟踪
命令：git update-index –assume-unchanged FILENAME 路径+文件名

# github
- 趋势 https://github.com/trending
