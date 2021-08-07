@REM Windows 中自动备份数据库到本地目录
@REM  好的方法是直接在服务器上备份，建立计划任务
@echo off
set "Ymd=%date:~,4%%date:~5,2%%date:~8,2%"
md E:\site-backup\%Ymd%\

@REM 备份
mysqldump --opt --single-transaction=TRUE --user= --password= --host=127.0.0.1 --protocol=tcp --port=3306 --default-character-set=utf8 --single-transaction=TRUE --routines --events "hx_youjiau_com" > "E:\site-backup\%Ymd%\backup.sql"
