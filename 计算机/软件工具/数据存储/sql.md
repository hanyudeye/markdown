# 高级教程



* [WHERE](#WHERE)
* [JOIN](#JOIN)
* [UNION](#UNION)
* [Constraints](#Constraints)
* [AUTO INCREMENT](#AUTO_INCREMENT)
* [GROUP BY](#GROUP_BY)
* [HAVING](#HAVING)
* [视图](#视图)
* [数据类型](#数据类型)



## WHERE

WHERE 子句用于提取那些满足指定标准的记录。

```sql
SELECT column_name,column_name FROM table_name WHERE column_name operator value; #value使用单引号来环绕文本值,如果是数值字段，不使用引号。
```


operator可以在 WHERE 子句中使用：

运算符 | 描述
---------|----------------
= | 等于
<> | 不等于。注释：在 SQL 的一些版本中，该操作符可被写成 !=
> | 大于
< | 小于
>= | 大于等于
<= | 小于等于
BETWEEN | 在某个范围内 例如: between 1500 and 3000
LIKE | 搜索某种模式
IN | 指定针对某个列的多个可能值 例如: in (5000,3000,1500);


### AND&OR

如果第一个条件和第二个条件都成立，则 AND 运算符显示一条记录。

如果第一个条件和第二个条件中只要有一个成立，则 OR 运算符显示一条记录。


### LIKE

```sql
SELECT column_name(s) FROM table_name WHERE column_name LIKE pattern;
```

#### 通配符

通配符可用于替代字符串中的任何其他字符。在 SQL 中，通配符与 SQL LIKE 操作符一起使用。


通配符	|描述
------|----------
%	|替代 0 个或多个字符
_	|替代一个字符
[charlist]	|字符列中的任何单一字符
[^charlist]或[!charlist]	| 不在字符



### IN

IN 操作符允许您在 WHERE 子句中规定多个值。

```sql
SELECT column_name(s) FROM table_name WHERE column_name IN (value1,value2,...);
```


### BETWEEN 

BETWEEN 操作符选取介于两个值之间的数据范围内的值。这些值可以是数值、文本或者日期。


```sql
SELECT column_name(s) FROM table_name WHERE column_name BETWEEN value1 AND value2;
```


**在某些数据库中，BETWEEN 选取介于两个值之间但不包括两个测试值的字段。
在某些数据库中，BETWEEN 选取介于两个值之间且包括两个测试值的字段。
在某些数据库中，BETWEEN 选取介于两个值之间且包括第一个测试值但不包括最后一个测试值的字段**



### NULL

NULL 值代表遗漏的未知数据。默认地，表的列可以存放 NULL 值。

```sql
# IS NULL
SELECT LastName,FirstName,Address FROM Persons WHERE Address IS NULL

# IS NOT NULL
SELECT LastName,FirstName,Address FROM Persons WHERE Address IS NOT NULL
```

NULL函数:如果为null，返回其他值
```sql
SELECT ProductName,UnitPrice*(UnitsInStock+ISNULL(UnitsOnOrder,0)) FROM Products # SQL Server / MS Access
SELECT ProductName,UnitPrice*(UnitsInStock+NVL(UnitsOnOrder,0)) FROM Products # Oracle
SELECT ProductName,UnitPrice*(UnitsInStock+IFNULL(UnitsOnOrder,0)) FROM Products # MySQL
```


## JOIN

SQL JOIN 子句用于把来自两个或多个表的行结合起来，基于这些表之间的共同字段。


* [INNER JOIN：如果表中有至少一个匹配，则返回行](#INNER)
* [LEFT JOIN：即使右表中没有匹配，也从左表返回所有的行](#LEFT)
* [RIGHT JOIN：即使左表中没有匹配，也从右表返回所有的行](#RIGHT)
* [FULL JOIN：只要其中一个表中存在匹配，则返回行](#FULL)



### INNER


INNER JOIN 关键字在表中存在至少一个匹配时返回左表（table1）的行信息。

```sql
SELECT column_name(s) FROM table1 INNER JOIN table2 ON table1.column_name=table2.column_name;
SELECT column_name(s) FROM table1 JOIN table2 ON table1.column_name=table2.column_name;
```


### LEFT 

LEFT JOIN 关键字从左表（table1）返回所有的行，即使右表（table2）中没有匹配。如果右表中没有匹配，则结果为 NULL。


```sql
SELECT column_name(s) FROM table1 LEFT JOIN table2 ON table1.column_name=table2.column_name;
SELECT column_name(s) FROM table1 LEFT OUTER JOIN table2 ON table1.column_name=table2.column_name;
```


### RIGHT 

RIGHT JOIN 关键字从右表（table2）返回所有的行，即使左表（table1）中没有匹配。如果左表中没有匹配，则结果为 NULL。


```sql
SELECT column_name(s) FROM table1 RIGHT JOIN table2 ON table1.column_name=table2.column_name;
SELECT column_name(s) FROM table1 RIGHT OUTER JOIN table2 ON table1.column_name=table2.column_name;
```



### FULL 

FULL OUTER JOIN 关键字只要左表（table1）和右表（table2）其中一个表中存在匹配，则返回行.

FULL OUTER JOIN 关键字结合了 LEFT JOIN 和 RIGHT JOIN 的结果。


```sql
SELECT column_name(s) FROM table1 FULL OUTER JOIN table2 ON table1.column_name=table2.column_name;
```


## UNION 


UNION 操作符用于合并两个或多个 SELECT 语句的结果集。

**请注意，UNION 内部的每个 SELECT 语句必须拥有相同数量的列。列也必须拥有相似的数据类型。同时，每个 SELECT 语句中的列的顺序必须相同。**


```sql
SELECT column_name(s) FROM table1 UNION SELECT column_name(s) FROM table2;
SELECT column_name(s) FROM table1 UNION ALL SELECT column_name(s) FROM table2;
```



## Constraints

SQL 约束用于规定表中的数据规则。

如果存在违反约束的数据行为，行为会被约束终止。

约束可以在创建表时规定（通过 CREATE TABLE 语句），或者在表创建之后规定（通过 ALTER TABLE 语句）。

```sql
CREATE TABLE table_name
(
column_name1 data_type(size) constraint_name,
column_name2 data_type(size) constraint_name,
column_name3 data_type(size) constraint_name,
....
);
```

* [NOT NULL - 指示某列不能存储 NULL 值。](#NOT_NULL)
* [UNIQUE - 保证某列的每行必须有唯一的值。](#UNIQUE)
* [PRIMARY KEY - NOT NULL 和 UNIQUE 的结合。确保某列（或两个列多个列的结合）有唯一标识，有助于更容易更快速地找到表中的一个特定的记录。](#PRIMARY_KEY)
* [FOREIGN KEY - 保证一个表中的数据匹配另一个表中的值的参照完整性。](#FOREIGN_KEY)
* [CHECK - 保证列中的值符合指定的条件。](#CHECK)
* [DEFAULT - 规定没有给列赋值时的默认值。](#DEFAULT)


### NOT_NULL

NOT NULL 约束强制列不接受 NULL 值。
NOT NULL 约束强制字段始终包含值。这意味着，如果不向字段添加值，就无法插入新记录或者更新记录。

```sql
CREATE TABLE Persons
(
P_Id int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255)
)

# 修改约束
alter table x modify column_name null;
alter table x modify column_name not null;
```


### UNIQUE 

UNIQUE 约束唯一标识数据库表中的每条记录。

UNIQUE 和 PRIMARY KEY 约束均为列或列集合提供了唯一性的保证。
PRIMARY KEY 约束拥有自动定义的 UNIQUE 约束。

请注意，每个表可以有多个 UNIQUE 约束，但是每个表只能有一个 PRIMARY KEY 约束。


```sql
# 多个约束：MySQL / SQL Server / Oracle / MS Access
CREATE TABLE Persons
(
P_Id int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
CONSTRAINT uc_PersonID UNIQUE (P_Id,LastName)
)

# 插入 UNIQUE 约束：MySQL / SQL Server / Oracle / MS Access
ALTER TABLE Persons ADD UNIQUE (P_Id)
ALTER TABLE Persons ADD CONSTRAINT uc_PersonID UNIQUE (P_Id,LastName)

# 撤销 UNIQUE 约束
ALTER TABLE Persons DROP INDEX uc_PersonID # MySQL
ALTER TABLE Persons DROP CONSTRAINT uc_PersonID # SQL Server / Oracle / MS Access

```


### PRIMARY_KEY

PRIMARY KEY 约束唯一标识数据库表中的每条记录。

* 主键必须包含唯一的值。
* 主键列不能包含 NULL 值。
* 每个表都应该有一个主键，并且每个表只能有一个主键。



```sql
# 创建主键
CREATE TABLE Persons
(
P_Id int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
PRIMARY KEY (P_Id)
)

# 插入主键
ALTER TABLE Persons ADD PRIMARY KEY (P_Id)
ALTER TABLE Persons ADD CONSTRAINT pk_PersonID PRIMARY KEY (P_Id,LastName)

# 删除主键
ALTER TABLE Persons DROP PRIMARY KEY # mysql
ALTER TABLE Persons DROP CONSTRAINT pk_PersonID # SQL Server / Oracle / MS Access
```


### FOREIGN_KEY

一个表中的 FOREIGN KEY 指向另一个表中的 UNIQUE KEY(唯一约束的键)。
FOREIGN KEY 约束用于预防破坏表之间连接的行为,也能防止非法数据插入外键列，因为它必须是它指向的那个表中的值之一。


```sql
# 创建
CREATE TABLE table1
(
O_Id int NOT NULL,
OrderNo int NOT NULL,
P_Id int,
PRIMARY KEY (O_Id),
P_Id int FOREIGN KEY REFERENCES table2(UNIQUE_KEY)
)

# 插入FOREIGN KEY 约束： MySQL / SQL Server / Oracle / MS Access
ALTER TABLE Orders ADD FOREIGN KEY (P_Id) REFERENCES Persons(P_Id)
ALTER TABLE Orders ADD CONSTRAINT fk_PerOrders FOREIGN KEY (P_Id) REFERENCES Persons(P_Id) 

# 撤销 FOREIGN KEY 约束
ALTER TABLE Orders DROP FOREIGN KEY fk_PerOrders # MySQL
ALTER TABLE Orders DROP CONSTRAINT fk_PerOrders # SQL Server / Oracle / MS Access
```


### CHECK 

CHECK 约束用于限制列中的值的范围。

如果对单个列定义 CHECK 约束，那么该列只允许特定的值。

如果对一个表定义 CHECK 约束，那么此约束会基于行中其他列的值在特定的列中对值进行限制。

```sql
# 单列约束:mysql
CREATE TABLE Persons
(
P_Id int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
CHECK (P_Id>0)
)


# 单列约束:SQL Server / Oracle / MS Access
CREATE TABLE Persons
(
P_Id int NOT NULL CHECK (P_Id>0),
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255)
)

# 多个列的 CHECK 约束
CREATE TABLE Persons
(
P_Id int NOT NULL,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
CONSTRAINT chk_Person CHECK (P_Id>0 AND City='Sandnes')
)

# 插入约束
ALTER TABLE Persons ADD CHECK (P_Id>0) # MySQL / SQL Server / Oracle / MS Access

# 插入多个约束
ALTER TABLE Persons ADD CONSTRAINT chk_Person CHECK (P_Id>0 AND City='Sandnes') # MySQL / SQL Server / Oracle / MS Access

# 撤销 CHECK 约束
ALTER TABLE Persons DROP CONSTRAINT chk_Person # SQL Server / Oracle / MS Access
ALTER TABLE Persons DROP CHECK chk_Person # MySQL
```


### DEFAULT 

DEFAULT 约束用于向列中插入默认值。

如果没有规定其他的值，那么会将默认值添加到所有的新记录。

```sql
# 创建约束
CREATE TABLE Persons
(
    P_Id int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255) DEFAULT 'Sandnes'
)

# 插入约束
ALTER TABLE Persons ALTER City SET DEFAULT 'SANDNES' # MySQL
ALTER TABLE Persons ADD CONSTRAINT ab_c DEFAULT 'SANDNES' for City # SQL Server / MS Access
ALTER TABLE Persons MODIFY City DEFAULT 'SANDNES' # Oracle

# 撤销 DEFAULT 约束
ALTER TABLE Persons ALTER City DROP DEFAULT # MySQL
ALTER TABLE Persons ALTER COLUMN City DROP DEFAUL # SQL Server / Oracle / MS Access

```


## AUTO_INCREMENT

Auto-increment 会在新记录插入表中时生成一个唯一的数字。


```sql
# MySQL
CREATE TABLE Persons
(
ID int NOT NULL AUTO_INCREMENT,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255),
PRIMARY KEY (ID)
)

ALTER TABLE Persons AUTO_INCREMENT=100 # 设置起始值
 

# SQL Server
CREATE TABLE Persons
(
ID int IDENTITY(1,1) PRIMARY KEY,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255)
)

INSERT INTO Persons (FirstName,LastName) VALUES ('Lars','Monsen') # 设置起始值


# Access 
CREATE TABLE Persons
(
ID Integer PRIMARY KEY AUTOINCREMENT,
LastName varchar(255) NOT NULL,
FirstName varchar(255),
Address varchar(255),
City varchar(255)
)

INSERT INTO Persons (FirstName,LastName) VALUES ('Lars','Monsen') # 设置起始值

# Oracle
CREATE SEQUENCE seq_person
MINVALUE 1
START WITH 1
INCREMENT BY 1
CACHE 10

INSERT INTO Persons (ID,FirstName,LastName) VALUES (seq_person.nextval,'Lars','Monsen') # 设置起始值

```



## GROUP_BY

GROUP BY 语句用于结合聚合函数，根据一个或多个列对结果集进行分组。
```sql
SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name;
```

## HAVING 

在 SQL 中增加 HAVING 子句原因是，WHERE 关键字无法与聚合函数一起使用。HAVING 子句可以让我们筛选分组后的各组数据。

```sql
SELECT column_name, aggregate_function(column_name)
FROM table_name
WHERE column_name operator value
GROUP BY column_name
HAVING aggregate_function(column_name) operator value;
```


## 视图

视图是基于 SQL 语句的结果集的可视化的表。

```sql
# 创建视图
CREATE VIEW view_name AS SELECT column_name(s) FROM table_name WHERE condition

# 更新视图
CREATE OR REPLACE VIEW view_name AS SELECT column_name(s) FROM table_name WHERE condition

# 撤销视图
DROP VIEW view_name
```


## 数据类型


### 通用数据类型


数据类型	|	描述| Access	|
CHARACTER(n)	|	字符/字符串。固定长度 n。|||||
VARCHAR(n) 或	|	字符/字符串。可变长度。最大长度 n。
CHARACTER VARYING(n)	|	
BINARY(n)	|	二进制串。固定长度 n。
BOOLEAN	|	存储 TRUE 或 FALSE 值
VARBINARY(n) 或BINARY VARYING(n)		|	二进制串。可变长度。最大长度 n。
INTEGER(p)	|	整数值（没有小数点）。精度 p。
SMALLINT	|	整数值（没有小数点）。精度 5。
INTEGER	|	整数值（没有小数点）。精度 10。
BIGINT	|	整数值（没有小数点）。精度 19。
DECIMAL(p,s)	|	精确数值，精度 p，小数点后位数 s。例如：decimal(5,2) 是一个小数点前有 3 位数小数点后有 2 位数的数字。
NUMERIC(p,s)	|	精确数值，精度 p，小数点后位数 s。（与 DECIMAL 相同）
FLOAT(p)	|	近似数值，尾数精度 p。一个采用以 10 为基数的指数计数法的浮点数。该类型的 size 参数由一个指定最小精度的单一数字组成。
REAL	|	近似数值，尾数精度 7。
FLOAT	|	近似数值，尾数精度 16。
DOUBLE PRECISION	|	近似数值，尾数精度 16。
DATE	|	存储年、月、日的值。
TIME	|	存储小时、分、秒的值。
TIMESTAMP	|	存储年、月、日、小时、分、秒的值。
INTERVAL	|	由一些整数字段组成，代表一段时间，取决于区间的类型。
ARRAY	|	元素的固定长度的有序集合
MULTISET	|	元素的可变长度的无序集合
XML	|	存储 XML 数据


### 数据类型快速参考手册

数据类型	|	Access	|	SQLServer	|	Oracle	|	MySQL	|	PostgreSQL
-------------|-------------|-------------|-------------|-------------|----------
boolean	|	Yes/No	|	Bit	|	Byte	|	N/A	|	Boolean
integer	|	Number (integer)	|	Int	|	Number	|	Int	Integer|	Int Integer
float	|	Number (single)	|	Float Real	|	Number	|	Float	|	Numeric
currency	|	Currency	|	Money	|	N/A	|	N/A	|	Money
string (fixed)	|	N/A	|	Char	|	Char	|	Char	|	Char
string (variable)	|	Text (<256)	Memo (65k+)	|	Varchar	|	Varchar Varchar2	|	Varchar	|	Varchar
binary object	|	OLE Object Memo	|	Binary (fixed up to 8K) Varbinary (<8K)	Image (<2GB)|	Long	Raw|	Blob Text	|	Binary Varbinary


### 各种数据库的数据类型

* Microsoft Access 数据类型

    数据类型	|	描述	|	存储
    ---------|----------------|----------
    Text	|	用于文本或文本与数字的组合。最多 255 个字符。		|
    Memo	|	Memo 用于更大数量的文本。最多存储 65,536 个字符。注释：无法对 memo 字段进行排序。不过它们是可搜索的。	|
    Byte	|	允许 0 到 255 的数字。	|	1 字节
    Integer	|	允许介于 -32,768 与 32,767 之间的全部数字。	|	2 字节
    Long	|	允许介于 -2,147,483,648 与 2,147,483,647 之间的全部数字。	|	4 字节
    Single	|	单精度浮点。处理大多数小数。	|	4 字节
    Double	|	双精度浮点。处理大多数小数。	|	8 字节
    Currency	|	用于货币。支持 15 位的元，外加 4 位小数。提示：您可以选择使用哪个国家的货币。	|	8 字节
    AutoNumber	|	AutoNumber 字段自动为每条记录分配数字，通常从 1 开始。	|	4 字节
    Date/Time	|	用于日期和时间	|	8 字节
    Yes/No	|	逻辑字段，可以显示为 Yes/No、True/False 或 On/Off。在代码中，使用常量 True 和 False （等价于 1 和 0）。注释：Yes/No 字段中不允许 Null 值	|	1 比特
    Ole Object	|	可以存储图片、音频、视频或其他 BLOBs（Binary Large OBjects）。	|	最多 1GB
    Hyperlink	|	包含指向其他文件的链接，包括网页。	|	
    Lookup Wizard	|	允许您创建一个可从下拉列表中进行选择的选项列表。	|	4 字节


* MySQL 数据类型

    在 MySQL 中，有三种主要的类型：Text（文本）、Number（数字）和 Date/Time（日期/时间）类型。

    Text 类型：

    数据类型	|	描述
    -----------|-----------
    CHAR(size)	|	保存固定长度的字符串（可包含字母、数字以及特殊字符）。在括号中指定字符串的长度。最多 255 个字符。
    VARCHAR(size)	|	保存可变长度的字符串（可包含字母、数字以及特殊字符）。在括号中指定字符串的最大长度。最多 255 个字符。注释：如果值的长度大于 255，则被转换为 TEXT 类型。
    TINYTEXT	|	存放最大长度为 255 个字符的字符串。
    TEXT	|	存放最大长度为 65,535 个字符的字符串。
    BLOB	|	用于 BLOBs（Binary Large OBjects）。存放最多 65,535 字节的数据。
    MEDIUMTEXT	|	存放最大长度为 16,777,215 个字符的字符串。
    MEDIUMBLOB	|	用于 BLOBs（Binary Large OBjects）。存放最多 16,777,215 字节的数据。
    LONGTEXT	|	存放最大长度为 4,294,967,295 个字符的字符串。
    LONGBLOB	|	用于 BLOBs (Binary Large OBjects)。存放最多 4,294,967,295 字节的数据。
    ENUM(x,y,z,etc.)	|	允许您输入可能值的列表。可以在 ENUM 列表中列出最大 65535 个值。如果列表中不存在插入的值，则插入空值。注释：这些值是按照您输入的顺序排序的。 可以按照此格式输入可能的值： ENUM('X','Y','Z')
    SET	|	与 ENUM 类似，不同的是，SET 最多只能包含 64 个列表项且 SET 可存储一个以上的选择。


    Number 类型：

    数据类型	|	描述
    ----------|------------
    TINYINT(size)	|	带符号-128到127 ，无符号0到255。
    SMALLINT(size)	|	带符号范围-32768到32767，无符号0到65535, size 默认为 6。
    MEDIUMINT(size)	|	带符号范围-8388608到8388607，无符号的范围是0到16777215。 size 默认为9
    INT(size)	|	带符号范围-2147483648到2147483647，无符号的范围是0到4294967295。 size 默认为 11
    BIGINT(size)	|	带符号的范围是-9223372036854775808到9223372036854775807，无符号的范围是0到18446744073709551615。size 默认为 20
    FLOAT(size,d)	|	带有浮动小数点的小数字。在 size 参数中规定显示最大位数。在 d 参数中规定小数点右侧的最大位数。
    DOUBLE(size,d)	|	带有浮动小数点的大数字。在 size 参数中规显示定最大位数。在 d 参数中规定小数点右侧的最大位数。
    DECIMAL(size,d)	|	作为字符串存储的 DOUBLE 类型，允许固定的小数点。在 size 参数中规定显示最大位数。在 d 参数中规定小数点右侧的最大位数。


    Date 类型：

    数据类型	|	描述
    ---------|---------------------
    DATE()	|	日期。格式：YYYY-MM-DD 注释：支持的范围是从 '1000-01-01' 到 '9999-12-31'
    DATETIME()	|	*日期和时间的组合。格式：YYYY-MM-DD HH:MM:SS 注释：支持的范围是从 '1000-01-01 00:00:00' 到 '9999-12-31 23:59:59'
    TIMESTAMP()	|	*时间戳。TIMESTAMP 值使用 Unix 纪元('1970-01-01 00:00:00' UTC) 至今的秒数来存储。格式：YYYY-MM-DD HH:MM:SS 注释：支持的范围是从 '1970-01-01 00:00:01' UTC 到 '2038-01-09 03:14:07' UTC
    TIME()	|	时间。格式：HH:MM:SS 	注释：支持的范围是从 '-838:59:59' 到 '838:59:59'
    YEAR()	|	2 位或 4 位格式的年。注释：4 位格式所允许的值：1901 到 2155。2 位格式所允许的值：70 到 69，表示从 1970 到 2069。

* SQL Server 数据类型

    String 类型：

    数据类型	|	描述	|	存储
    -----------|----------|-------------------
    char(n)	|	固定长度的字符串。最多 8,000 个字符。	|	Defined width
    varchar(n)	|	可变长度的字符串。最多 8,000 个字符。	|	2 bytes + number of chars
    varchar(max)	|	可变长度的字符串。最多 1,073,741,824 个字符。	|	2 bytes + number of chars
    text	|	可变长度的字符串。最多 2GB 文本数据。	|	4 bytes + number of chars
    nchar	|	固定长度的 Unicode 字符串。最多 4,000 个字符。	|	Defined width x 2
    nvarchar	|	可变长度的 Unicode 字符串。最多 4,000 个字符。	|	
    nvarchar(max)	|	可变长度的 Unicode 字符串。最多 536,870,912 个字符。	|	
    ntext	|	可变长度的 Unicode 字符串。最多 2GB 文本数据。	|	
    bit	|	允许 0、1 或 NULL	|	
    binary(n)	|	固定长度的二进制字符串。最多 8,000 字节。	|	
    varbinary	|	可变长度的二进制字符串。最多 8,000 字节。	|	
    varbinary(max)	|	可变长度的二进制字符串。最多 2GB。	|	
    image	|	可变长度的二进制字符串。最多 2GB。	|	

    Number 类型：

    数据类型	|	描述	|	存储
    ------------|------------|-----------------
    tinyint	|	允许从 0 到 255 的所有数字。	|	1 字节
    smallint	|	允许介于 -32,768 与 32,767 的所有数字。	|	2 字节
    int	|	允许介于 -2,147,483,648 与 2,147,483,647 的所有数字。	|	4 字节
    bigint	|	允许介于 -9,223,372,036,854,775,808 与 9,223,372,036,854,775,807 之间的所有数字。	|	8 字节
    decimal(p,s)	|	固定精度和比例的数字。	|	5-17 字节 允许从 -10^38 +1 到 10^38 -1 之间的数字。 p 参数指示可以存储的最大位数（小数点左侧和右侧）。p 必须是 1 到 38 之间的值。默认是 18。 s 参数指示小数点右侧存储的最大位数。s 必须是 0 到 p 之间的值。默认是 0。
    numeric(p,s)	|	固定精度和比例的数字。	|	5-17 字节 允许从 -10^38 +1 到 10^38 -1 之间的数字。 p 参数指示可以存储的最大位数（小数点左侧和右侧）。p 必须是 1 到 38 之间的值。默认是 18。 s 参数指示小数点右侧存储的最大位数。s 必须是 0 到 p 之间的值。默认是 0。
    smallmoney	|	介于 -214,748.3648 与 214,748.3647 之间的货币数据。	|	4 字节
    money	|	介于 -922,337,203,685,477.5808 与 922,337,203,685,477.5807 之间的货币数据。	|	8 字节
    float(n)	|	从 -1.79E + 308 到 1.79E + 308 的浮动精度数字数据。	|	4 或 8 字节 n 参数指示该字段保存 4 字节还是 8 字节。float(24) 保存 4 字节，而 float(53) 保存 8 字节。n 的默认值是 53。
    real	|	从 -3.40E + 38 到 3.40E + 38 的浮动精度数字数据。	|	4 字节


    Date 类型：

    数据类型	|	描述	|	存储
    ------------|---------|-------------------
    datetime	|	从 1753 年 1 月 1 日 到 9999 年 12 月 31 日，精度为 3.33 毫秒。	|	8 字节
    datetime2	|	从 1753 年 1 月 1 日 到 9999 年 12 月 31 日，精度为 100 纳秒。	|	6-8 字节
    smalldatetime	|	从 1900 年 1 月 1 日 到 2079 年 6 月 6 日，精度为 1 分钟。	|	4 字节
    date	|	仅存储日期。从 0001 年 1 月 1 日 到 9999 年 12 月 31 日。	|	3 bytes
    time	|	仅存储时间。精度为 100 纳秒。	|	3-5 字节
    datetimeoffset	|	与 datetime2 相同，外加时区偏移。	|	8-10 字节
    timestamp	|	存储唯一的数字，每当创建或修改某行时，该数字会更新。timestamp 值基于内部时钟，不对应真实时间。每个表只能有一个 timestamp 变量。	|	

    其他数据类型：

    数据类型	|	描述
    ----------|------------
    sql_variant	|	存储最多 8,000 字节不同数据类型的数据，除了 text、ntext 以及 timestamp。
    uniqueidentifier	|	存储全局唯一标识符 (GUID)。
    xml	|	存储 XML 格式化数据。最多 2GB。
    cursor	|	存储对用于数据库操作的指针的引用。
    table	|	存储结果集，供稍后处理。

# 函数

* SQL Aggregate 函数
    SQL Aggregate 函数计算从列中取得的值，返回一个单一的值。

    有用的 Aggregate 函数：

    * [AVG() - 返回平均值](#AVG())
    * [COUNT() - 返回行数](#COUNT())
    * [FIRST() - 返回第一个记录的值](#FIRST())
    * [LAST() - 返回最后一个记录的值](#LAST())
    * [MAX() - 返回最大值](#MAX())
    * [MIN() - 返回最小值](#[MIN())
    * [SUM() - 返回总和](#SUM())


* SQL Scalar 函数
    SQL Scalar 函数基于输入值，返回一个单一的值。

    有用的 Scalar 函数：

    * [UCASE() - 将某个字段转换为大写](#UCASE())
    * [LCASE() - 将某个字段转换为小写](#LCASE())
    * [MID() - 从某个文本字段提取字符，MySql 中使用](#MID())
    * [SubString(字段，1，end) - 从某个文本字段提取字符](#SubString())
    * [LEN() - 返回某个文本字段的长度](#LEN())
    * [ROUND() - 对某个数值字段进行指定小数位数的四舍五入](#ROUND())
    * [NOW() - 返回当前的系统日期和时间](#NOW())
    * [FORMAT() - 格式化某个字段的显示方式](#FORMAT())

* [Date 函数](#Date)

## Aggregate


### AVG() 

AVG() 函数返回数值列的平均值。

```sql
SELECT AVG(column_name) FROM table_name
```

### COUNT()

COUNT() 函数返回匹配指定条件的行数。

```sql
SELECT COUNT(column_name) FROM table_name; # 返回指定列的值的数目（NULL 不计入）
SELECT COUNT(*) FROM table_name; # 返回表中的记录数
SELECT COUNT(DISTINCT column_name) FROM table_name; # 返回指定列的不同值的数目 COUNT(DISTINCT) 适用于 ORACLE 和 Microsoft SQL Server，但是无法用于 Microsoft Access。
```


### FIRST()

FIRST() 函数返回指定的列中第一个记录的值。

```sql
SELECT FIRST(column_name) FROM table_name; # 只有 MS Access 支持 FIRST() 函数。
```

### LAST()

LAST() 函数返回指定的列中最后一个记录的值。
```sql
SELECT LAST(column_name) FROM table_name; # 只有 MS Access 支持 LAST() 函数。
```

### MAX()

MAX() 函数返回指定列的最大值。
```sql
SELECT MAX(column_name) FROM table_name;
```


### MIN()

MIN() 函数返回指定列的最小值。

```sql
SELECT MIN(column_name) FROM table_name;
```

### SUM()

SUM() 函数返回数值列的总数。
```sql
SELECT SUM(column_name) FROM table_name;
```


## Scalar
### UCASE()

UCASE() 函数把字段的值转换为大写。

```sql
SELECT UCASE(column_name) FROM table_name;
SELECT UPPER(column_name) FROM table_name; #SQL Server
```

### LCASE()

LCASE() 函数把字段的值转换为小写。

```sql
SELECT LCASE(column_name) FROM table_name;
SELECT LOWER(column_name) FROM table_name;#SQL Server
```


### MID()

MID() 函数用于从文本字段中提取字符。

```sql
SELECT MID(column_name,start[,length]) FROM table_name;
```
* column_name	必需。要提取字符的字段。
* start	必需。规定开始位置（起始值是 1）。
* length	可选。要返回的字符数。如果省略，则 MID() 函数返回剩余文本。


### LEN() 

LEN() 函数返回文本字段中值的长度。

```sql
SELECT LEN(column_name) FROM table_name;
SELECT LENGTH(column_name) FROM table_name; # MySQL 
```


### ROUND()

ROUND() 函数用于把数值字段舍入为指定的小数位数。

```sql
SELECT ROUND(column_name,decimals) FROM table_name;
```

* column_name	必需。要舍入的字段。
* decimals	必需。规定要返回的小数位数。



### NOW()

NOW() 函数返回当前系统的日期和时间。

```sql
SELECT NOW() FROM table_name;
```


### FORMAT()

FORMAT() 函数用于对字段的显示进行格式化。

```sql
SELECT FORMAT(column_name,format) FROM table_name;
```
* column_name	必需。要格式化的字段。
* format	必需。规定格式。

## Date
### Date 函数

* MySQL Date 函数

    函数	|	描述
    --------|-------------
    NOW()	|	返回当前的日期和时间
    CURDATE()	|	返回当前的日期
    CURTIME()	|	返回当前的时间
    DATE()	|	提取日期或日期/时间表达式的日期部分
    EXTRACT()	|	返回日期/时间的单独部分
    DATE_ADD()	|	向日期添加指定的时间间隔
    DATE_SUB()	|	从日期减去指定的时间间隔
    DATEDIFF()	|	返回两个日期之间的天数
    DATE_FORMAT()	|	用不同的格式显示日期/时间


* SQL Server Date 函数

    函数	|	描述
    --------|--------------
    GETDATE()	|	返回当前的日期和时间
    DATEPART()	|	返回日期/时间的单独部分
    DATEADD()	|	在日期中添加或减去指定的时间间隔
    DATEDIFF()	|	返回两个日期之间的时间
    CONVERT()	|	用不同的格式显示日期/时间


### Date 数据类型

* MySQL 使用下列数据类型在数据库中存储日期或日期/时间值：
    * DATE - 格式：YYYY-MM-DD
    * DATETIME - 格式：YYYY-MM-DD HH:MM:SS
    * TIMESTAMP - 格式：YYYY-MM-DD HH:MM:SS
    * YEAR - 格式：YYYY 或 YY

* SQL Server 使用下列数据类型在数据库中存储日期或日期/时间值：
    * DATE - 格式：YYYY-MM-DD
    * DATETIME - 格式：YYYY-MM-DD HH:MM:SS
    * SMALLDATETIME - 格式：YYYY-MM-DD HH:MM:SS
    * TIMESTAMP - 格式：唯一的数字
    
# Sql 快速参考手册

| SQL 语句        | 语法                                                                                                                                                                                                                                          |
|-----------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AND / OR        | SELECT column_name(s) FROM table_name WHERE condition AND                                                                                                                             / OR condition                                          |
| ALTER TABLE     | ALTER TABLE table_name  ADD column_name datatype or ALTER TABLE table_name  DROP COLUMN column_name                                                                                                                                           |
| AS (alias)      | SELECT column_name AS column_alias FROM table_name or SELECT column_name FROM table_name AS table_alias                                                                                                                                       |
| BETWEEN         | SELECT column_name(s) FROM table_name WHERE column_name BETWEEN value1 AND value2                                                                                                                                                             |
| CREATE DATABASE | CREATE DATABASE database_name                                                                                                                                                                                                                 |
| CREATE TABLE    | CREATE TABLE table_name (column_name1 data_type,column_name2 data_type,column_name2 data_type,...)                                                                                                                                            |
| CREATE INDEX    | CREATE INDEX index_name ON table_name (column_name) or CREATE UNIQUE INDEX index_name ON table_name (column_name)                                                                                                                             |
| CREATE VIEW     | CREATE VIEW view_name AS SELECT column_name(s) FROM table_name WHERE condition                                                                                                                                                                |
| DELETE          | DELETE FROM table_name WHERE some_column=some_value or DELETE FROM table_name (Note: Deletes the entire table!!) DELETE * FROM table_name (Note: Deletes the entire table!!)                                                                  |
| DROP DATABASE   | DROP DATABASE database_name                                                                                                                                                                                                                   |
| DROP INDEX      | DROP INDEX table_name.index_name (SQL Server) DROP INDEX index_name ON table_name (MS Access) DROP INDEX index_name (DB2/Oracle) ALTER TABLE table_name DROP INDEX index_name (MySQL)                                                         |
| DROP TABLE      | DROP TABLE table_name                                                                                                                                                                                                                         |
| GROUP BY        | SELECT column_name, aggregate_function(column_name) FROM table_name WHERE column_name operator value GROUP BY column_name                                                                                                                     |
| HAVING          | SELECT column_name, aggregate_function(column_name) FROM table_name WHERE column_name operator value GROUP BY column_name HAVING aggregate_function(column_name) operator value                                                               |
| IN              | SELECT column_name(s) FROM table_name WHERE column_name IN (value1,value2,..)                                                                                                                                                                 |
| INSERT INTO     | INSERT INTO table_name VALUES (value1, value2, value3,....) or INSERT INTO table_name (column1, column2, column3,...) VALUES (value1, value2, value3,....)                                                                                    |
| INNER JOIN      | SELECT column_name(s) FROM table_name1 INNER JOIN table_name2 ON table_name1.column_name=table_name2.column_name                                                                                                                              |
| LEFT JOIN       | SELECT column_name(s) FROM table_name1 LEFT JOIN table_name2 ON table_name1.column_name=table_name2.column_name                                                                                                                               |
| RIGHT JOIN      | SELECT column_name(s) FROM table_name1 RIGHT JOIN table_name2 ON table_name1.column_name=table_name2.column_name                                                                                                                              |
| FULL JOIN       | SELECT column_name(s) FROM table_name1 FULL JOIN table_name2 ON table_name1.column_name=table_name2.column_name                                                                                                                               |
| LIKE            | SELECT column_name(s) FROM table_name WHERE column_name LIKE pattern                                                                                                                                                                          |
| ORDER BY        | SELECT column_name(s) FROM table_name ORDER BY column_name [ASC/ DESC]                                                                                                                                                                        |
| SELECT          | SELECT column_name(s) FROM table_name                                                                                                                                                                                                         |
| SELECT *        | SELECT * FROM table_name                                                                                                                                                                                                                      |
| SELECT DISTINCT | SELECT DISTINCT column_name(s) FROM table_name                                                                                                                                                                                                |
| SELECT INTO     | SELECT * INTO new_table_name [IN externaldatabase] FROM old_table_name or SELECT column_name(s) INTO new_table_name [IN externaldatabase] FROM old_table_name                                                                                 |
| SELECT TOP      | SELECT TOP number                                                                                                                                                                                    / percent column_name(s) FROM table_name |
| TRUNCATE TABLE  | TRUNCATE TABLE table_name                                                                                                                                                                                                                     |
| UNION           | SELECT column_name(s) FROM table_name1 UNION SELECT column_name(s) FROM table_name2                                                                                                                                                           |
| UNION ALL       | SELECT column_name(s) FROM table_name1 UNION ALL SELECT column_name(s) FROM table_name2                                                                                                                                                       |
| UPDATE          | UPDATE table_name SET column1=value, column2=value,... WHERE some_colu                                                                                                                                                                        |


# 设置  
## 设置远程
 登录：mysql -u root -h -p
 打开数据库：use mysql
 添加所有IP都可以访问的用户：grant all on *.* to '用户名'@'%' identified by '密码';
 或者也可以给root用户设置为所有ip都可访问：update user set host='%' where user='root' and host='localhost';
 刷新权限：flush privileges;

## 通用类型设计
   id  char(32)
  标题　varchar(100) 
  名称　VARCHAR(200) 
  描述　varchar(100)
  内容　varchar(1000) ／text

   用户信息
   身份证号　CHAR(18)
   卡的名称　VARCHAR(100)
   手机号 VARCHAR(11)
   地址url  VARCHAR(100)
   时间 DATE

## 引擎 
### 存储引擎
#### InnoDB
      是 MySQL 默认的事务型存储引擎，只有在需要它不支持的特性时，才考虑使用其它存储引擎。

      实现了四个标准的隔离级别，默认级别是可重复读（REPEATABLE READ）。在可重复读
      隔离级别下，通过多版本并发控制（MVCC）+ 间隙锁（Next-Key Locking）防止幻影读。

      主索引是聚簇索引，在索引中保存了数据，从而避免直接读取磁盘，因此对查询性能有很大的提升。

      内部做了很多优化，包括从磁盘读取数据时采用的可预测性读、能够加快读操作并且自动创建的自适应哈希索引、能够加速插入操作的插入缓冲区等。

      支持真正的在线热备份。其它存储引擎不支持在线热备份，要获取一致性视图需要停止对所有表的写入，而在读写混合场景中，停止写入可能也意味着停止读取。
#### MyISAM
      设计简单，数据以紧密格式存储。对于只读数据，或者表比较小、可以容忍修复操作，则依然可以使用它。

      提供了大量的特性，包括压缩表、空间数据索引等。

      不支持事务。

      不支持行级锁，只能对整张表加锁，读取时会对需要读到的所有表加共享锁，写入时则
      对表加排它锁。但在表有读取操作的同时，也可以往表中插入新的记录，这被称为并发
      插入（CONCURRENT INSERT）。

      可以手工或者自动执行检查和修复操作，但是和事务恢复以及崩溃恢复不同，可能导致一些数据丢失，而且修复操作是非常慢的。

      如果指定了 DELAY_KEY_WRITE 选项，在每次修改执行完成时，不会立即将修改的索引
      数据写入磁盘，而是会写到内存中的键缓冲区，只有在清理键缓冲区或者关闭表的时候
      才会将对应的索引块写入磁盘。这种方式可以极大的提升写入性能，但是在数据库或者
      主机崩溃时会造成索引损坏，需要执行修复操作。
#### 比较
      - 事务：InnoDB 是事务型的，可以使用 Commit 和 Rollback 语句。
      - 并发：MyISAM 只支持表级锁，而 InnoDB 还支持行级锁。
      - 外键：InnoDB 支持外键。
      - 备份：InnoDB 支持在线热备份。
      - 崩溃恢复：MyISAM 崩溃后发生损坏的概率比 InnoDB 高很多，而且恢复的速度也更慢。
      - 其它特性：MyISAM 支持压缩表和空间数据索引。
### 切分
#### 水平切分
       水平切分又称为 Sharding，它是将同一个表中的记录拆分到多个结构相同的表中。
       当一个表的数据不断增多时，Sharding 是必然的选择，它可以将数据分布到集群的不同节点上，从而缓存单个数据库的压力。
#### 垂直切分
       垂直切分是将一张表按列切分成多个表，通常是按照列的关系密集程度进行切分，也
       可以利用垂直切分将经常被使用的列和不经常被使用的列切分到不同的表中。

       在数据库的层面使用垂直切分将按数据库中表的密集程度部署到不同的库中，例如将
       原来的电商数据库垂直切分成商品数据库、用户数据库等。
#### Sharding 策略
       - 哈希取模：hash(key) % N；
       - 范围：可以是 ID 范围也可以是时间范围；
       - 映射表：使用单独的一个数据库来存储映射关系。
##### Sharding 存在的问题
######  事务问题
        使用分布式事务来解决，比如 XA 接口。
###### 连接
        可以将原来的连接分解成多个单表查询，然后在用户程序中进行连接。
######  ID 唯一性
        - 使用全局唯一 ID（GUID）
        - 为每个分片指定一个 ID 范围
        - 分布式 ID 生成器 (如 Twitter 的 Snowflake 算法)
#### 复制
##### 主从复制
        主要涉及三个线程：binlog 线程、I/O 线程和 SQL 线程。
        -  **binlog 线程** ：负责将主服务器上的数据更改写入二进制日志（Binary log）中。
        -  **I/O 线程** ：负责从主服务器上读取二进制日志，并写入从服务器的重放日志（Replay log）中。
        -  **SQL 线程** ：负责读取重放日志并重放其中的 SQL 语句。
##### 读写分离

        主服务器处理写操作以及实时性要求比较高的读操作，而从服务器处理读操作。
        读写分离能提高性能的原因在于：

        - 主从服务器负责各自的读和写，极大程度缓解了锁的争用；
        - 从服务器可以使用 MyISAM，提升查询性能以及节约系统开销；
        - 增加冗余，提高可用性。
        
        读写分离常用代理方式来实现，代理服务器接收应用层传来的读写请求，然后决定转发到哪个服务器。
### 时间戳
   常量 CURRENT_TIMESTAMP 
   
