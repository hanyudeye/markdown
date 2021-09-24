# php
## 数据
- String（字符串）
- Integer（整型）
- Float（浮点型）
- Boolean（布尔型）
- Array（数组）
- Object（对象）
- NULL（空值）

### 类
- 继承(包含) extends
- 多态

## 命令
### String
- strlen
- strpos

### Array
- count 长度
- sort 升序 rsort 降序 asort,arsort 值排序 ksor,krsort 键排序

### 数据转换
- doubleval
- floatval
- intval
- strval
### 判断数据类型 

``` php
gettype();
isset():  //变量是否已经声明
empty():  //变量是否为空
defined()://常量是否已经定义 define()
array_key_exists(mixed key, array search):  //检查给定的键名或索引是否存在于数组中

is_numeric ( mixed var )://检测变量是 否为数字或数字字符串
is_bool():        // 检测变量是否是布尔型
is_float():       // 检测变量是否是浮点型 和is_double，is_real()都一样的用法
is_int():         // 检测变量是否是整数is_integer() 一样的 用法
is_string():      // 检测变量是否是字符串
is_object():      // 检测变量是否是一个对象
is_array():       // 检测变量是否是数组
is_null():        // 检测变量是否为 NULL 值是否是NULL大小写敏感
```

### Array ###

| 函数                      | 描述                                                                                               |
|---------------------------+----------------------------------------------------------------------------------------------------|
| array()                   | 创建数组。                                                                                         |
| array_change_key_case()   | 返回其键均为大写或小写的数组。                                                                     |
| array_chunk()             | 把一个数组分割为新的数组块。                                                                       |
| array_column()            | 返回输入数组中某个单一列的值。                                                                     |
| array_combine()           | 通过合并两个数组（一个为键名数组，一个为键值数组）来创建一个新数组。                               |
| array_count_values()      | 用于统计数组中所有值出现的次数。                                                                   |
| array_diff()              | 比较数组，返回两个数组的差集（只比较键值）。                                                       |
| array_diff_assoc()        | 比较数组，返回两个数组的差集（比较键名和键值）。                                                   |
| array_diff_key()          | 比较数组，返回两个数组的差集（只比较键名）。                                                       |
| array_diff_uassoc()       | 比较数组，返回两个数组的差集（比较键名和键值，使用用户自定义的键名比较函数）。                     |
| array_diff_ukey()         | 比较数组，返回两个数组的差集（只比较键名，使用用户自定义的键名比较函数）。                         |
| array_fill()              | 用给定的键值填充数组。                                                                             |
| array_fill_keys()         | 用给定的指定键名的键值填充数组。                                                                   |
| array_filter()            | 用回调函数过滤数组中的元素。                                                                       |
| array_flip()              | 反转/交换数组中的键名和对应关联的键值。                                                            |
| array_intersect()         | 比较数组，返回两个数组的交集（只比较键值）。                                                       |
| array_intersect_assoc()   | 比较数组，返回两个数组的交集（比较键名和键值）。                                                   |
| array_intersect_key()     | 比较数组，返回两个数组的交集（只比较键名）。                                                       |
| array_intersect_uassoc()  | 比较数组，返回两个数组的交集（比较键名和键值，使用用户自定义的键名比较函数）。                     |
| array_intersect_ukey()    | 比较数组，返回两个数组的交集（只比较键名，使用用户自定义的键名比较函数）。                         |
| array_key_exists()        | 检查指定的键名是否存在于数组中。                                                                   |
| array_key_first()         | 获取指定数组的第一个键值。                                                                         |
| array_key_last()          | 获取指定数组的最后一个键值。                                                                       |
| array_keys()              | 返回数组中所有的键名。                                                                             |
| array_map()               | 将用户自定义函数作用到给定数组的每个值上，返回新的值。                                             |
| array_merge()             | 把一个或多个数组合并为一个数组。                                                                   |
| array_merge_recursive()   | 递归地把一个或多个数组合并为一个数组。                                                             |
| array_multisort()         | 对多个数组或多维数组进行排序。                                                                     |
| array_pad()               | 将指定数量的带有指定值的元素插入到数组中。                                                         |
| array_pop()               | 删除数组中的最后一个元素（出栈）。                                                                 |
| array_product()           | 计算数组中所有值的乘积。                                                                           |
| array_push()              | 将一个或多个元素插入数组的末尾（入栈）。                                                           |
| array_rand()              | 从数组中随机选出一个或多个元素，返回键名。                                                         |
| array_reduce()            | 通过使用用户自定义函数，迭代地将数组简化为一个字符串，并返回。                                     |
| array_replace()           | 使用后面数组的值替换第一个数组的值。                                                               |
| array_replace_recursive() | 递归地使用后面数组的值替换第一个数组的值。                                                         |
| array_reverse()           | 将原数组中的元素顺序翻转，创建新的数组并返回。                                                     |
| array_search()            | 在数组中搜索给定的值，如果成功则返回相应的键名。                                                   |
| array_shift()             | 删除数组中的第一个元素，并返回被删除元素的值。                                                     |
| array_slice()             | 返回数组中的选定部分。                                                                             |
| array_splice()            | 把数组中的指定元素去掉并用其它值取代。                                                             |
| array_sum()               | 返回数组中所有值的和。                                                                             |
| array_udiff()             | 比较数组，返回两个数组的差集（只比较键值，使用一个用户自定义的键名比较函数）。                     |
| array_udiff_assoc()       | 比较数组，返回两个数组的差集（比较键名和键值，使用内建函数比较键名，使用用户自定义函数比较键值）。 |
| array_udiff_uassoc()      | 比较数组，返回两个数组的差集（比较键名和键值，使用两个用户自定义的键名比较函数）。                 |
| array_uintersect()        | 比较数组，返回两个数组的交集（只比较键值，使用一个用户自定义的键名比较函数）。                     |
| array_uintersect_assoc()  | 比较数组，返回两个数组的交集（比较键名和键值，使用内建函数比较键名，使用用户自定义函数比较键值）。 |
| array_uintersect_uassoc() | 比较数组，返回两个数组的交集（比较键名和键值，使用两个用户自定义的键名比较函数）。                 |
| array_unique()            | 删除数组中重复的值。                                                                               |
| array_unshift()           | 在数组开头插入一个或多个元素。                                                                     |
| array_values()            | 返回数组中所有的值。                                                                               |
| array_walk()              | 对数组中的每个成员应用用户函数。                                                                   |
| array_walk_recursive()    | 对数组中的每个成员递归地应用用户函数。                                                             |
| arsort()                  | 对关联数组按照键值进行降序排序。                                                                   |
| asort()                   | 对关联数组按照键值进行升序排序。                                                                   |
| compact()                 | 创建一个包含变量名和它们的值的数组。                                                               |
| count()                   | 返回数组中元素的数目。                                                                             |
| current()                 | 返回数组中的当前元素。                                                                             |
| each()                    | 返回数组中当前的键／值对。                                                                         |
| end()                     | 将数组的内部指针指向最后一个元素。                                                                 |
| extract()                 | 从数组中将变量导入到当前的符号表。                                                                 |
| in_array()                | 检查数组中是否存在指定的值。                                                                       |
| key()                     | 从关联数组中取得键名。                                                                             |
| krsort()                  | 对关联数组按照键名降序排序。                                                                       |
| ksort()                   | 对关联数组按照键名升序排序。                                                                       |
| list()                    | 把数组中的值赋给一些数组变量。                                                                     |
| natcasesort()             | 用"自然排序"算法对数组进行不区分大小写字母的排序。                                                 |
| natsort()                 | 用"自然排序"算法对数组排序。                                                                       |
| next()                    | 将数组中的内部指针向后移动一位。                                                                   |
| pos()                     | current() 的别名。                                                                                 |
| prev()                    | 将数组的内部指针倒回一位。                                                                         |
| range()                   | 创建一个包含指定范围的元素的数组。                                                                 |
| reset()                   | 将数组的内部指针指向第一个元素。                                                                   |
| rsort()                   | 对数值数组进行降序排序。                                                                           |
| shuffle()                 | 把数组中的元素按随机顺序重新排列。                                                                 |
| sizeof()                  | count() 的别名。                                                                                   |
| sort()                    | 对数值数组进行升序排序。                                                                           |
| uasort()                  | 使用用户自定义的比较函数对数组中的键值进行排序。                                                   |
| uksort()                  | 使用用户自定义的比较函数对数组中的键名进行排序。                                                   |
| usort()                   | 使用用户自定义的比较函数对数组进行排序。                                                           |

### Calendar ###

### cURL ###


| 函数                       | 描述                                                         |
|----------------------------+--------------------------------------------------------------|
| curl_close()               | 关闭一个cURL会话。                                           |
| curl_copy_handle()         | 复制一个cURL句柄和它的所有选项。                             |
| curl_errno()               | 返回最后一次的错误号。                                       |
| curl_error()               | 返回一个保护当前会话最近一次错误的字符串。                   |
| curl_escape()              | 返回转义字符串，对给定的字符串进行URL编码。                  |
| curl_exec()                | 执行一个cURL会话。                                           |
| curl_file_create()         | 创建一个 CURLFile 对象。                                     |
| curl_getinfo()             | 获取一个cURL连接资源句柄的信息。                             |
| curl_init()                | 初始化一个cURL会话。                                         |
| curl_multi_add_handle()    | 向curl批处理会话中添加单独的curl句柄。                       |
| curl_multi_close()         | 关闭一组cURL句柄。                                           |
| curl_multi_exec()          | 运行当前 cURL 句柄的子连接。                                 |
| curl_multi_getcontent()    | 如果设置了CURLOPT_RETURNTRANSFER，则返回获取的输出的文本流。 |
| curl_multi_info_read()     | 获取当前解析的cURL的相关传输信息。                           |
| curl_multi_init()          | 返回一个新cURL批处理句柄。                                   |
| curl_multi_remove_handle() | 移除curl批处理句柄资源中的某个句柄资源。                     |
| curl_multi_select()        | 等待所有cURL批处理中的活动连接。                             |
| curl_multi_setopt()        | 设置一个批处理cURL传输选项。                                 |
| curl_multi_strerror()      | 返回描述错误码的字符串文本。                                 |
| curl_pause()               | 暂停及恢复连接。                                             |
| curl_reset()               | 重置libcurl的会话句柄的所有选项。                            |
| curl_setopt_array()        | 为cURL传输会话批量设置选项。                                 |
| curl_setopt()              | 设置一个cURL传输选项。                                       |
| curl_share_close()         | 关闭cURL共享句柄。                                           |
| curl_share_init()          | 初始化cURL共享句柄。                                         |
| curl_share_setopt()        | 设置一个共享句柄的cURL传输选项。                             |
| curl_strerror()            | 返回错误代码的字符串描述。                                   |
| curl_unescape()            | 解码URL编码后的字符串。                                      |
| curl_version()             | 获取cURL版本信息。                                           |

### Date ###

格式化 

| 时间格式化的方式 | 说明                                                 |
|------------------+------------------------------------------------------|
| Y                | 4位数字年，y为2位数字，如99即1999年                  |
| m                | 数字月份，前面有前导0，如01。n 为无前导0数字月份     |
| F                | 月份，完整的文本格式，例如 January 或者 March        |
| M                | 三个字母缩写表示的月份，例如 Jan 或者 Mar            |
| d                | 月份中的第几天，前面有前导0，如03。j 为无前导0的天数 |
| w                | 星期中的第几天，以数字表示，0表示星期天              |
| z                | 年份中的第几天，范围0-366                            |
| W                | 年份中的第几周，如第32周                             |
| H                | 24小时格式，有前导0，h为12小时格式                   |
| G                | 24小时格式，无前导0，g为对应12小时格式               |
| i                | 分钟格式，有前导0                                    |
| s                | 秒格式，有前导0                                      |
| A                | 大写上下午，如AM，a为小写                            |



- strtotime 时间转time

### Directory ###

| 函数        | 描述                               |
|-------------+------------------------------------|
| chdir()     | 改变当前的目录。                   |
| chroot()    | 改变根目录。                       |
| closedir()  | 关闭目录句柄。                     |
| dir()       | 返回 Directory 类的实例。          |
| getcwd()    | 返回当前工作目录。                 |
| opendir()   | 打开目录句柄。                     |
| readdir()   | 返回目录句柄中的条目。             |
| rewinddir() | 重置目录句柄。                     |
| scandir()   | 返回指定目录中的文件和目录的数组。 |

### Error ###

### Filesystem ###

| 函数                  | 描述                                                            |
|-----------------------+-----------------------------------------------------------------|
| basename()            | 返回路径中的文件名部分。                                        |
| chgrp()               | 改变文件组。                                                    |
| chmod()               | 改变文件模式。                                                  |
| chown()               | 改变文件所有者。                                                |
| clearstatcache()      | 清除文件状态缓存。                                              |
| copy()                | 复制文件。                                                      |
| delete()              | 参见 unlink() 或 unset()                                        |
| dirname()             | 返回路径中的目录名称部分。                                      |
| disk_free_space()     | 返回目录的可用空间。                                            |
| disk_total_space()    | 返回一个目录的磁盘总容量。                                      |
| diskfreespace()       | disk_free_space() 的别名。                                      |
| fclose()              | 关闭打开的文件。                                                |
| feof()                | 测试文件指针是否到了文件末尾。                                  |
| fflush()              | 向打开的文件刷新缓冲输出。                                      |
| fgetc()               | 从打开的文件中返回字符。                                        |
| fgetcsv()             | 从打开的文件中解析一行，校验 CSV 字段。                         |
| fgets()               | 从打开的文件中返回一行。                                        |
| fgetss()              | 从打开的文件中返回一行，并过滤掉 HTML 和 PHP 标签。             |
| file()                | 把文件读入一个数组中。                                          |
| file_exists()         | 检查文件或目录是否存在。                                        |
| file_get_contents()   | 把文件读入字符串。                                              |
| file_put_contents()   | 把字符串写入文件。                                              |
| fileatime()           | 返回文件的上次访问时间。                                        |
| filectime()           | 返回文件的上次修改时间。                                        |
| filegroup()           | 返回文件的组 ID。                                               |
| fileinode()           | 返回文件的 inode 编号。                                         |
| filemtime()           | 返回文件内容的上次修改时间。                                    |
| fileowner()           | 返回文件的用户 ID （所有者）。                                  |
| fileperms()           | 返回文件的权限。                                                |
| filesize()            | 返回文件大小。                                                  |
| filetype()            | 返回文件类型。                                                  |
| flock()               | 锁定或释放文件。                                                |
| fnmatch()             | 根据指定的模式来匹配文件名或字符串。                            |
| fopen()               | 打开一个文件或 URL。                                            |
| fpassthru()           | 从打开的文件中读数据，直到文件末尾（EOF），并向输出缓冲写结果。 |
| fputcsv()             | 把行格式化为 CSV 并写入一个打开的文件中。                       |
| fputs()               | fwrite() 的别名。                                               |
| fread()               | 读取打开的文件。                                                |
| fscanf()              | 根据指定的格式对输入进行解析。                                  |
| fseek()               | 在打开的文件中定位。                                            |
| fstat()               | 返回关于一个打开的文件的信息。                                  |
| ftell()               | 返回在打开文件中的当前位置。                                    |
| ftruncate()           | 把打开文件截断到指定的长度。                                    |
| fwrite()              | 写入打开的文件。                                                |
| glob()                | 返回一个包含匹配指定模式的文件名/目录的数组。                   |
| is_dir()              | 判断文件是否是一个目录。                                        |
| is_executable()       | 判断文件是否可执行。                                            |
| is_file()             | 判断文件是否是常规的文件。                                      |
| is_link()             | 判断文件是否是连接。                                            |
| is_readable()         | 判断文件是否可读。                                              |
| is_uploaded_file()    | 判断文件是否是通过 HTTP POST 上传的。                           |
| is_writable()         | 判断文件是否可写。                                              |
| is_writeable()        | is_writable() 的别名。                                          |
| lchgrp()              | 改变符号连接的组所有权。                                        |
| lchown()              | 改变符号连接的用户所有权。                                      |
| link()                | 创建一个硬连接。                                                |
| linkinfo()            | 返回有关一个硬连接的信息。                                      |
| lstat()               | 返回关于文件或符号连接的信息。                                  |
| mkdir()               | 创建目录。                                                      |
| move_uploaded_file()  | 把上传的文件移动到新位置。                                      |
| parse_ini_file()      | 解析一个配置文件。                                              |
| parse_ini_string()    | 解析一个配置字符串。                                            |
| pathinfo()            | 返回关于文件路径的信息。                                        |
| pclose()              | 关闭由 popen() 打开的进程。                                     |
| popen()               | 打开一个进程。                                                  |
| readfile()            | 读取一个文件，并写入到输出缓冲。                                |
| readlink()            | 返回符号连接的目标。                                            |
| realpath()            | 返回绝对路径名。                                                |
| realpath_cache_get()  | 返回高速缓存条目。                                              |
| realpath_cache_size() | 返回高速缓存大小。                                              |
| rename()              | 重命名文件或目录。                                              |
| rewind()              | 倒回文件指针的位置。                                            |
| rmdir()               | 删除空的目录。                                                  |
| set_file_buffer()     | 设置已打开文件的缓冲大小。                                      |
| stat()                | 返回关于文件的信息。                                            |
| symlink()             | 创建符号连接。                                                  |
| tempnam()             | 创建唯一的临时文件。                                            |
| tmpfile()             | 创建唯一的临时文件。                                            |
| touch()               | 设置文件的访问和修改时间。                                      |
| umask()               | 改变文件的文件权限。                                            |
| unlink()              | 删除文件。                                                      |


### HTTP ###

| 函数           | 描述                                                |
|----------------+-----------------------------------------------------|
| header()       | 向客户端发送原始的 HTTP 报头。                      |
| headers_list() | 返回已发送的（或待发送的）响应头部的一个列表。      |
| headers_sent() | 检查 HTTP 报头是否发送/已发送到何处。               |
| setcookie()    | 向客户端发送一个 HTTP cookie。                      |
| setrawcookie() | 不对 cookie 值进行 URL 编码，发送一个 HTTP cookie。 |

- setcookie("user", "runoob", time()+3600);
- setcookie(name, value, expire, path, domain);


```php
// Redirect to login page
header('HTTP/1.1 302 Redirect');
header('Location: /login.php');
header('HTTP/1.1 400 Bad request');
 ```

### LibXML ###

### Mail ###

### Math ###


| 函数            | 描述                                                  |
|-----------------+-------------------------------------------------------|
| abs()           | 返回一个数的绝对值。                                  |
| acos()          | 返回一个数的反余弦。                                  |
| acosh()         | 返回一个数的反双曲余弦。                              |
| asin()          | 返回一个数的反正弦。                                  |
| asinh()         | 返回一个数的反双曲正弦。                              |
| atan()          | 返回一个数的反正切。                                  |
| atan2()         | 返回两个变量 x 和 y 的反正切。                        |
| atanh()         | 返回一个数的反双曲正切。                              |
| base_convert()  | 在任意进制之间转换数字。                              |
| bindec()        | 把二进制数转换为十进制数。                            |
| ceil()          | 向上舍入为最接近的整数。                              |
| cos()           | 返回一个数的余弦。                                    |
| cosh()          | 返回一个数的双曲余弦。                                |
| decbin()        | 把十进制数转换为二进制数。                            |
| dechex()        | 把十进制数转换为十六进制数。                          |
| decoct()        | 把十进制数转换为八进制数。                            |
| deg2rad()       | 将角度值转换为弧度值。                                |
| exp()           | 返回 Ex 的值。                                        |
| expm1()         | 返回 Ex - 1 的值。                                    |
| floor()         | 向下舍入为最接近的整数。                              |
| fmod()          | 返回 x/y 的浮点数余数。                               |
| getrandmax()    | 返回通过调用 rand() 函数显示的随机数的最大可能值。    |
| hexdec()        | 把十六进制数转换为十进制数。                          |
| hypot()         | 计算直角三角形的斜边长度。                            |
| is_finite()     | 判断是否为有限值。                                    |
| is_infinite()   | 判断是否为无限值。                                    |
| is_nan()        | 判断是否为非数值。                                    |
| lcg_value()     | 返回范围为 (0, 1) 的一个伪随机数。                    |
| log()           | 返回一个数的自然对数（以 E 为底）。                   |
| log10()         | 返回一个数的以 10 为底的对数。                        |
| log1p()         | 返回 log(1+number)                                    |
| max()           | 返回一个数组中的最大值，或者几个指定值中的最大值。    |
| min()           | 返回一个数组中的最小值，或者几个指定值中的最小值。    |
| mt_getrandmax() | 返回通过调用 mt_rand() 函数显示的随机数的最大可能值。 |
| mt_rand()       | 使用 Mersenne Twister 算法生成随机整数。              |
| mt_srand()      | 播种 Mersenne Twister 随机数生成器。                  |
| octdec()        | 把八进制数转换为十进制数。                            |
| pi()            | 返回圆周率 PI 的值。                                  |
| pow()           | 返回 x 的 y 次方。                                    |
| rad2deg()       | 把弧度值转换为角度值。                                |
| rand()          | 返回随机整数。                                        |
| round()         | 对浮点数进行四舍五入。                                |
| sin()           | 返回一个数的正弦。                                    |
| sinh()          | 返回一个数的双曲正弦。                                |
| sqrt()          | 返回一个数的平方根。                                  |
| srand()         | 播种随机数生成器。                                    |
| tan()           | 返回一个数的正切。                                    |
| tanh()          | 返回一个数的双曲正切。                                |

### Misc 杂项 ###

| 函数                   | 描述                                          |
|------------------------+-----------------------------------------------|
| connection_aborted()   | 检查是否断开客户机。                          |
| connection_status()    | 返回当前的连接状态。                          |
| constant()             | 返回一个常量的值。                            |
| define()               | 定义一个常量。                                |
| defined()              | 检查某常量是否存在。                          |
| die()                  | 输出一条消息，并退出当前脚本。                |
| eval()                 | 把字符串当成 PHP 代码来计算。                 |
| exit()                 | 输出一条消息，并退出当前脚本。                |
| get_browser()          | 返回用户浏览器的性能。                        |
| highlight_file()       | 对文件进行 PHP 语法高亮显示。                 |
| highlight_string()     | 对字符串进行 PHP 语法高亮显示。               |
| ignore_user_abort()    | 设置与远程客户机断开是否会终止脚本的执行。    |
| pack()                 | 把数据装入一个二进制字符串。                  |
| php_strip_whitespace() | 返回已删除 PHP 注释以及空白字符的源代码文件。 |
| show_source()          | highlight_file() 的别名。                     |
| sleep()                | 延迟代码执行若干秒。                          |
| time_nanosleep()       | 延迟代码执行若干秒和纳秒。                    |
| time_sleep_until()     | 延迟代码执行直到指定的时间。                  |
| uniqid()               | 生成唯一的 ID。                               |
| unpack()               | 从二进制字符串对数据进行解包。                |
| usleep()               | 延迟代码执行若干微秒。                        |

### MySQLi ###

| 函数                              | 描述                                                            |
| mysqli_affected_rows()            | 返回前一次 MySQL 操作所影响的记录行数。                         |
| mysqli_autocommit()               | 打开或关闭自动提交数据库修改。                                  |
| mysqli_change_user()              | 更改指定数据库连接的用户。                                      |
| mysqli_character_set_name()       | 返回数据库连接的默认字符集。                                    |
| mysqli_close()                    | 关闭先前打开的数据库连接。                                      |
| mysqli_commit()                   | 提交当前事务。                                                  |
| mysqli_connect_errno()            | 返回上一次连接错误的错误代码。                                  |
| mysqli_connect_error()            | 返回上一次连接错误的错误描述。                                  |
| mysqli_connect()                  | 打开一个到 MySQL 服务器的新的连接。                             |
| mysqli_data_seek()                | 调整结果指针到结果集中的一个任意行。                            |
| mysqli_debug()                    | 执行调试操作。                                                  |
| mysqli_dump_debug_info()          | 转储调试信息到日志中。                                          |
| mysqli_errno()                    | 返回最近调用函数的最后一个错误代码。                            |
| mysqli_error_list()               | 返回最近调用函数的错误列表。                                    |
| mysqli_error()                    | 返回最近调用函数的最后一个错误描述。                            |
| mysqli_fetch_all()                | 从结果集中取得所有行作为关联数组，或数字数组，或二者兼有。      |
| mysqli_fetch_array()              | 从结果集中取得一行作为关联数组，或数字数组，或二者兼有。        |
| mysqli_fetch_assoc()              | 从结果集中取得一行作为关联数组。                                |
| mysqli_fetch_field_direct()       | 从结果集中取得某个单一字段的 meta-data，并作为对象返回。        |
| mysqli_fetch_field()              | 从结果集中取得下一字段，并作为对象返回。                        |
| mysqli_fetch_fields()             | 返回结果中代表字段的对象的数组。                                |
| mysqli_fetch_lengths()            | 返回结果集中当前行的每个列的长度。                              |
| mysqli_fetch_object()             | 从结果集中取得当前行，并作为对象返回。                          |
| mysqli_fetch_row()                | 从结果集中取得一行，并作为枚举数组返回。                        |
| mysqli_field_count()              | 返回最近查询的列数。                                            |
| mysqli_field_seek()               | 把结果集中的指针设置为指定字段的偏移量。                        |
| mysqli_field_tell()               | 返回结果集中的指针的位置。                                      |
| mysqli_free_result()              | 释放结果内存。                                                  |
| mysqli_get_charset()              | 返回字符集对象。                                                |
| mysqli_get_client_info()          | 返回 MySQL 客户端库版本。                                       |
| mysqli_get_client_stats()         | 返回有关客户端每个进程的统计。                                  |
| mysqli_get_client_version()       | 将 MySQL 客户端库版本作为整数返回。                             |
| mysqli_get_connection_stats()     | 返回有关客户端连接的统计。                                      |
| mysqli_get_host_info()            | 返回 MySQL 服务器主机名和连接类型。                             |
| mysqli_get_proto_info()           | 返回 MySQL 协议版本。                                           |
| mysqli_get_server_info()          | 返回 MySQL 服务器版本。                                         |
| mysqli_get_server_version()       | 将 MySQL 服务器版本作为整数返回。                               |
| mysqli_info()                     | 返回有关最近执行查询的信息。                                    |
| mysqli_init()                     | 初始化 MySQLi 并返回 mysqli_real_connect() 使用的资源。         |
| mysqli_insert_id()                | 返回最后一个查询中自动生成的 ID。                               |
| mysql_kill()                      | 请求服务器杀死一个 MySQL 线程。                                 |
| mysqli_more_results()             | 检查一个多查询是否有更多的结果。                                |
| mysqli_multi_query()              | 执行一个或多个针对数据库的查询。                                |
| mysqli_next_result()              | 为 mysqli_multi_query() 准备下一个结果集。                      |
| mysqli_num_fields()               | 返回结果集中字段的数量。                                        |
| mysqli_num_rows()                 | 返回结果集中行的数量。                                          |
| mysqli_options()                  | 设置额外的连接选项，用于影响连接行为。                          |
| mysqli_ping()                     | 进行一个服务器连接，如果连接已断开则尝试重新连接。              |
| mysqli_prepare()                  | 准备执行一个 SQL 语句。                                         |
| mysqli_query()                    | 执行某个针对数据库的查询。                                      |
| mysqli_real_connect()             | 打开一个到 MySQL 服务器的新的链接。                             |
| mysqli_real_escape_string()       | 转义在 SQL 语句中使用的字符串中的特殊字符。                     |
| mysqli_real_query()               | 执行 SQL 查询                                                   |
| mysqli_reap_async_query()         | 返回异步查询的结果。                                            |
| mysqli_refresh()                  | 刷新表或缓存，或者重置复制服务器信息。                          |
| mysqli_rollback()                 | 回滚数据库中的当前事务。                                        |
| mysqli_select_db()                | 更改连接的默认数据库。                                          |
| mysqli_set_charset()              | 设置默认客户端字符集。                                          |
| mysqli_set_local_infile_default() | 撤销用于 load local infile 命令的用户自定义句柄。               |
| mysqli_set_local_infile_handler() | 设置用于 LOAD DATA LOCAL INFILE 命令的回滚函数。                |
| mysqli_sqlstate()                 | 返回最后一个 MySQL 操作的 SQLSTATE 错误代码。                   |
| mysqli_ssl_set()                  | 用于创建 SSL 安全连接。                                         |
| mysqli_stat()                     | 返回当前系统状态。                                              |
| mysqli_stmt_init()                | 初始化声明并返回 mysqli_stmt_prepare() 使用的对象。             |
| mysqli_store_result()             | 返回的当前的结果集。                                            |
| mysqli_thread_id()                | 返回当前连接的线程 ID。                                         |
| mysqli_thread_safe()              | 返回是否将客户端库编译成 thread-safe。                          |
| mysqli_use_result()               | 从上次使用 mysqli_real_query() 执行的查询中初始化结果集的检索。 |
| mysqli_warning_count()            | 返回连接中的最后一个查询的警告数量。                            |

### SimpleXML ###


| 函数                     | 描述                                              |
| __construct()            | 创建一个新的 SimpleXMLElement 对象。              |
| addAttribute()           | 给 SimpleXML 元素添加一个属性。                   |
| addChild()               | 给 SimpleXML 元素添加一个子元素。                 |
| asXML()                  | 格式化 XML（版本 1.0）中的 SimpleXML 对象的数据。 |
| attributes()             | 返回 XML 标签的属性和值。                         |
| children()               | 查找指定节点的子节点。                            |
| count()                  | 计算指定节点的子节点个数。                        |
| getDocNamespaces()       | 返回文档中的声明的命名空间。                      |
| getName()                | 返回 SimpleXML 元素引用的 XML 标签的名称。        |
| getNamespaces()          | 返回文档中使用的命名空间。                        |
| registerXPathNamespace() | 为下一个 XPath 查询创建命名空间上下文。           |
| saveXML()                | asXML() 的别名。                                  |
| simplexml_import_dom()   | 从 DOM 节点返回 SimpleXMLElement 对象。           |
| simplexml_load_file()    | 转换 XML 文件为 SimpleXMLElement 对象。           |
| simplexml_load_string()  | 转换 XML 字符串为 SimpleXMLElement 对象。         |
| xpath()                  | 运行对 XML 数据的 XPath 查询。                    |

### String ###

| 函数                         | 描述                                                              |
| addcslashes()                | 返回在指定的字符前添加反斜杠的字符串。                            |
| addslashes()                 | 返回在预定义的字符前添加反斜杠的字符串。                          |
| bin2hex()                    | 把 ASCII 字符的字符串转换为十六进制值。                           |
| chop()                       | 移除字符串右侧的空白字符或其他字符。                              |
| chr()                        | 从指定 ASCII 值返回字符。                                         |
| chunk_split()                | 把字符串分割为一连串更小的部分。                                  |
| convert_cyr_string()         | 把字符串由一种 Cyrillic 字符集转换成另一种。                      |
| convert_uudecode()           | 对 uuencode 编码的字符串进行解码。                                |
| convert_uuencode()           | 使用 uuencode 算法对字符串进行编码。                              |
| count_chars()                | 返回字符串所用字符的信息。                                        |
| crc32()                      | 计算一个字符串的 32 位 CRC（循环冗余校验）。                      |
| crypt()                      | 单向的字符串加密法（hashing）。                                   |
| echo()                       | 输出一个或多个字符串。                                            |
| explode()                    | 把字符串打散为数组。                                              |
| fprintf()                    | 把格式化的字符串写入到指定的输出流。                              |
| get_html_translation_table() | 返回 htmlspecialchars() 和 htmlentities() 使用的翻译表。          |
| hebrev()                     | 把希伯来（Hebrew）文本转换为可见文本。                            |
| hebrevc()                    | 把希伯来（Hebrew）文本转换为可见文本，并把新行（\n）转换为 <br>。 |
| hex2bin()                    | 把十六进制值的字符串转换为 ASCII 字符。                           |
| html_entity_decode()         | 把 HTML 实体转换为字符。                                          |
| htmlentities()               | 把字符转换为 HTML 实体。                                          |
| htmlspecialchars_decode()    | 把一些预定义的 HTML 实体转换为字符。                              |
| htmlspecialchars()           | 把一些预定义的字符转换为 HTML 实体。                              |
| implode()                    | 返回一个由数组元素组合成的字符串。                                |
| join()                       | implode() 的别名                                                  |
| lcfirst()                    | 把字符串中的首字符转换为小写。                                    |
| levenshtein()                | 返回两个字符串之间的 Levenshtein 距离。                           |
| localeconv()                 | 返回本地数字及货币格式信息。                                      |
| ltrim()                      | 移除字符串左侧的空白字符或其他字符。                              |
| md5()                        | 计算字符串的 MD5 散列。                                           |
| md5_file()                   | 计算文件的 MD5 散列。                                             |
| metaphone()                  | 计算字符串的 metaphone 键。                                       |
| money_format()               | 返回格式化为货币字符串的字符串。                                  |
| nl_langinfo()                | 返回指定的本地信息。                                              |
| nl2br()                      | 在字符串中的每个新行之前插入 HTML 换行符。                        |
| number_format()              | 通过千位分组来格式化数字。                                        |
| ord()                        | 返回字符串中第一个字符的 ASCII 值。                               |
| parse_str()                  | 把查询字符串解析到变量中。                                        |
| print()                      | 输出一个或多个字符串。                                            |
| printf()                     | 输出格式化的字符串。                                              |
| quoted_printable_decode()    | 把 quoted-printable 字符串转换为 8 位字符串。                     |
| quoted_printable_encode()    | 把 8 位字符串转换为 quoted-printable 字符串。                     |
| quotemeta()                  | 引用元字符。                                                      |
| rtrim()                      | 移除字符串右侧的空白字符或其他字符。                              |
| setlocale()                  | 设置地区信息（地域信息）。                                        |
| sha1()                       | 计算字符串的 SHA-1 散列。                                         |
| sha1_file()                  | 计算文件的 SHA-1 散列。                                           |
| similar_text()               | 计算两个字符串的相似度。                                          |
| soundex()                    | 计算字符串的 soundex 键。                                         |
| sprintf()                    | 把格式化的字符串写入一个变量中。                                  |
| sscanf()                     | 根据指定的格式解析来自一个字符串的输入。                          |
| str_getcsv()                 | 把 CSV 字符串解析到数组中。                                       |
| str_ireplace()               | 替换字符串中的一些字符（大小写不敏感）。                          |
| str_pad()                    | 把字符串填充为新的长度。                                          |
| str_repeat()                 | 把字符串重复指定的次数。                                          |
| str_replace()                | 替换字符串中的一些字符（大小写敏感）。                            |
| str_rot13()                  | 对字符串执行 ROT13 编码。                                         |
| str_shuffle()                | 随机地打乱字符串中的所有字符。                                    |
| str_split()                  | 把字符串分割到数组中。                                            |
| str_word_count()             | 计算字符串中的单词数。                                            |
| strcasecmp()                 | 比较两个字符串（大小写不敏感）。                                  |
| strchr()                     | 查找字符串在另一字符串中的第一次出现。（strstr() 的别名。）       |
| strcmp()                     | 比较两个字符串（大小写敏感）。                                    |
| strcoll()                    | 比较两个字符串（根据本地设置）。                                  |
| strcspn()                    | 返回在找到任何指定的字符之前，在字符串查找的字符数。              |
| strip_tags()                 | 剥去字符串中的 HTML 和 PHP 标签。                                 |
| stripcslashes()              | 删除由 addcslashes() 函数添加的反斜杠。                           |
| stripslashes()               | 删除由 addslashes() 函数添加的反斜杠。                            |
| stripos()                    | 返回字符串在另一字符串中第一次出现的位置（大小写不敏感）。        |
| stristr()                    | 查找字符串在另一字符串中第一次出现的位置（大小写不敏感）。        |
| strlen()                     | 返回字符串的长度。中文字符串的处理使用 mb_strlen() 函数。         |
| strnatcasecmp()              | 使用一种"自然排序"算法来比较两个字符串（大小写不敏感）。          |
| strnatcmp()                  | 使用一种"自然排序"算法来比较两个字符串（大小写敏感）。            |
| strncasecmp()                | 前 n 个字符的字符串比较（大小写不敏感）。                         |
| strncmp()                    | 前 n 个字符的字符串比较（大小写敏感）。                           |
| strpbrk()                    | 在字符串中搜索指定字符中的任意一个。                              |
| strpos()                     | 返回字符串在另一字符串中第一次出现的位置（大小写敏感）。          |
| strrchr()                    | 查找字符串在另一个字符串中最后一次出现。                          |
| strrev()                     | 反转字符串。                                                      |
| strripos()                   | 查找字符串在另一字符串中最后一次出现的位置(大小写不敏感)。        |
| strrpos()                    | 查找字符串在另一字符串中最后一次出现的位置(大小写敏感)。          |
| strspn()                     | 返回在字符串中包含的特定字符的数目。                              |
| strstr()                     | 查找字符串在另一字符串中的第一次出现（大小写敏感）。              |
| strtok()                     | 把字符串分割为更小的字符串。                                      |
| strtolower()                 | 把字符串转换为小写字母。                                          |
| strtoupper()                 | 把字符串转换为大写字母。                                          |
| strtr()                      | 转换字符串中特定的字符。                                          |
| substr()                     | 返回字符串的一部分。                                              |
| mb_substr()                  | 返回中文字符串的一部分。                                          |
| substr_compare()             | 从指定的开始位置（二进制安全和选择性区分大小写）比较两个字符串。  |
| substr_count()               | 计算子串在字符串中出现的次数。                                    |
| substr_replace()             | 把字符串的一部分替换为另一个字符串。                              |
| trim()                       | 移除字符串两侧的空白字符和其他字符。                              |
| ucfirst()                    | 把字符串中的首字符转换为大写。                                    |
| ucwords()                    | 把字符串中每个单词的首字符转换为大写。                            |
| vfprintf()                   | 把格式化的字符串写到指定的输出流。                                |
| vprintf()                    | 输出格式化的字符串。                                              |
| vsprintf()                   | 把格式化字符串写入变量中。                                        |
| wordwrap()                   | 按照指定长度对字符串进行折行处理。                                |

### XML Parser ###

### Zip ###

读取压缩文件
| 函数                          | 描述                                      |
| zip_close()                   | 关闭 ZIP 文件。                           |
| zip_entry_close()             | 关闭 ZIP 文件中的一个项目。               |
| zip_entry_compressedsize()    | 返回 ZIP 文件中的一个项目的被压缩尺寸。   |
| zip_entry_compressionmethod() | 返回 ZIP 文件中的一个项目的压缩方法。     |
| zip_entry_filesize()          | 返回 ZIP 文件中的一个项目的实际文件尺寸。 |
| zip_entry_name()              | 返回 ZIP 文件中的一个项目的名称。         |
| zip_entry_open()              | 打开 ZIP 文件中的一个项目以供读取。       |
| zip_entry_read()              | 读取 ZIP 文件中的一个打开的项目。         |
| zip_open()                    | 打开 ZIP 文件。                           |
| zip_read()                    | 读取 ZIP 文件中的下一个项目。             |

### 客户端请求

- $_SERVER 
- $_GET
- $_POST
- $_FILES 文件信息，包含 (name,type,tmp_name,error,size) 
- $_COOKIE 
- $_SESSION session 
会话信息是临时的，在用户离开网站后将被删除
设置或获取 Session 都要先 执行 session_start();

### 显示错误

``` php
ini_set("display_errors","On");
error_reporting(E_ALL); 
```

### 验证 ###

#### 验证Email ####

```php
<?php
$input = 'john@example.com';
$isEmail = filter_var($input, FILTER_VALIDATE_EMAIL); 
if ($isEmail !== false) {
    echo "Success"; 
}else{
    echo "Fail"; 
}
```

### 对象缓存 ###

#### Memcached ####

#### redis ####

##### php.ini配置 #####

``` config
[redis]
extension = redis.so
```
重启服务器，然后测试  
``` php
phpinfi();
```
有 redis 内容则配置成功

##### 连接到 Redis 服务器 #####

``` php
<?php 
    //Connecting to Redis server on localhost 
    $redis = new Redis(); 
    $redis->connect('127.0.0.1', 6379); 
    echo "Connection to server sucessfully"; 
    //check whether server is running or not 
    echo "Server is running: ".$redis->ping(); 
```

##### $Redis PHP 字符串示例 #####

``` php
<?php 
    //Connecting to Redis server on localhost 
    $redis = new Redis(); 
    $redis->connect('127.0.0.1', 6379); 
    echo "Connection to server sucessfully"; 
    //set the data in redis string 
    $redis->set("tutorial-name", "Redis tutorial"); 
    // Get the stored data and print it 
    echo "Stored string in redis:: " .$redis→get("tutorial-name"); 
```

##### Redis php 列表示例 #####

``` php
<?php 
    //Connecting to Redis server on localhost 
    $redis = new Redis(); 
    $redis->connect('127.0.0.1', 6379); 
    echo "Connection to server sucessfully"; 
    //store data in redis list 
    $redis->lpush("tutorial-list", "Redis"); 
    $redis->lpush("tutorial-list", "Mongodb"); 
    $redis->lpush("tutorial-list", "Mysql");  

    // Get the stored data and print it 
    $arList = $redis->lrange("tutorial-list", 0 ,5); 
    echo "Stored string in redis:: "; 
    print_r($arList); 
```

##### Redis php 键示例 #####

``` php
<?php 
    //Connecting to Redis server on localhost 
    $redis = new Redis(); 
    $redis->connect('127.0.0.1', 6379); 
    echo "Connection to server sucessfully"; 
    // Get the stored keys and print it 
    $arList = $redis->keys("#"); 
    echo "Stored keys in redis:: " 
    print_r($arList); 
 ?>
```

### 日期和时间

```
<?php
$raw = '22. 11. 1968';
$start = DateTime::createFromFormat('d. m. Y', $raw);

echo 'Start date: ' . $start->format('Y-m-d') . "\n";
``` 

### 正则查找 (模糊查找)
#### preg_match




# 其他
## 命令管理
### composer 
#### 配置命令下载路径
```console
composer config -g repo.packagist composer https://packagist.laravel-china.org
```
#### 管理命令

安装命令
``` console
composer install
```

更新命令
``` console
composer update
```
funding

下载并安装命令 
 ``` console
  composer require twig/twig:~1.8
``` 

安装到全局空间
``` console
 composer global require phpunit/phpunit
```

## 开发实践 ##

### 浏览器层面的 UTF-8 ###

``` php 
<?php
// Tell PHP that we're using UTF-8 strings until the end of the script
mb_internal_encoding('UTF-8');
 
// Tell PHP that we'll be outputting UTF-8 to the browser
mb_http_output('UTF-8');
 
// Our UTF-8 test string
$string = 'Êl síla erin lû e-govaned vîn.';
 
// Transform the string in some way with a multibyte function
// Note how we cut the string at a non-Ascii character for demonstration purposes
$string = mb_substr($string, 0, 15);
 
// Connect to a database to store the transformed string
// See the PDO example in this document for more information
// Note the `charset=utf8mb4` in the Data Source Name (DSN)
$link = new PDO(
    'mysql:host=your-hostname;dbname=your-db;charset=utf8mb4',
    'your-username',
    'your-password',
    array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_PERSISTENT => false
    )
);
 
// Store our transformed string as UTF-8 in our database
// Your DB and tables are in the utf8mb4 character set and collation, right?
$handle = $link->prepare('insert into ElvishSentences (Id, Body) values (?, ?)');
$handle->bindValue(1, 1, PDO::PARAM_INT);
$handle->bindValue(2, $string);
$handle->execute();
 
// Retrieve the string we just stored to prove it was stored correctly
$handle = $link->prepare('select * from ElvishSentences where Id = ?');
$handle->bindValue(1, 1, PDO::PARAM_INT);
$handle->execute();
 
// Store the result into an object that we'll output later in our HTML
$result = $handle->fetchAll(\PDO::FETCH_OBJ);

header('Content-Type: text/html; charset=UTF-8');
?><!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>UTF-8 test page</title>
    </head>
    <body>
        <?php
        foreach($result as $row){
            print($row->Body);  // This should correctly output our transformed UTF-8 string to the browser
        }
        ?>
    </body>
</html>

```

## 错误报告 ##
### 开发环境 ###

```
display_errors = On
display_startup_errors = On
error_reporting = -1
log_errors = On
```

### 生产环境 ###

```
display_errors = Off
display_startup_errors = Off
error_reporting = E_ALL
log_errors = On
```

## 代码注释 ##
### PHPDoc ###
PHPDoc 是注释 PHP 代码的非正式标准。它有许多不同的标记可以使用。

```
@author 标记是用來说明代码的作者，在多位开发者的情况下，可以同时列出好几位。
@link 标记用来提供网站链接，进一步说明代码和网站之间的关系
@param 标记，说明类型、名字和传入方法的参数。
@return 和 @throws 标记说明返回类型以及可能抛出的异常。
```
## php.ini
- error_reporting = E_ALL &~E_NOTICE &~E_STRICT
- display_errors= On
- default_charset="utf-8"
- extension_dir="./ext"
- file_uploads=On
- upload_max_filesize=2M
- session.save_path ="/tmp"
- session.gc_maxlifetime=1440   Session过期时间

# 问题
## Ajax 跨域问题
### 允许单个域名访问
``` php
header('Access-Control-Allow-Origin:http://client.runoob.com');
```

### 允许多个域名访问

``` php
$origin = isset($_SERVER['HTTP_ORIGIN'])? $_SERVER['HTTP_ORIGIN'] : '';  
  
$allow_origin = array(  
    'http://client1.runoob.com',  
    'http://client2.runoob.com'  
);  
  
if(in_array($origin, $allow_origin)){  
    header('Access-Control-Allow-Origin:'.$origin);       
} 
```

### 允许所有域名访问
``` php
header('Access-Control-Allow-Origin:*'); 
```