<?php

$redis= new Redis();
$redis->connect('127.0.0.1',6379);
echo "redis 连接<br/>";
echo "server is running".$redis->ping();
echo "<br>--------------------<br>";
echo "<br/>redis获取设置值<br/>";

$redis->set("name","明哥");
echo "name 的值是 ".$redis->get('name');
echo "<br>--------------------<br>";
