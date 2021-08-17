
![](../../../resource/image/computer/soft/2021-05-23_19-07.png)

## 中文文件名乱码
git 默认中文文件名是 \xxx\xxx 等八进制形式，是因为 对0x80以上的字符进行quote。

只需要设置core.quotepath设为false，就不会对0x80以上的字符进行quote。中文显示正常

git config --global core.quotepath false