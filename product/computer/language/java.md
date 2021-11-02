# java语言和程序
## java 程序的执行
- 编译  javac JAVASRC
- 执行 java JAVACLASS

## java 语言的内容
``` java
class HelloWorld{
    public static void main(String[] args){
        System.out.println("Hello,World!");
        
        String name1="今天天气很好";
        int name2=34;
        final double PI=3.1415926;  //PI 名词
        System.out.println("打印名词1的内容: name1="+name1);
        System.out.println("打印名词2的内容: name2="+name2);
        System.out.println("打印名词PI的内容: PI="+PI);
        }
    }
```

- 1. java语言 是由一个语句块组成的，表示某个对象
- 2. 语句块由语句组成，而语句由 名词+动词/操作符 组成
- 3. 这就是 java语言的全部内容

## For-Each 
``` java
for(int i: nums){
}
```
## 包
``` java
package aa.bb;
import aa.bb.*;
```
## 继承 extends
中断继承  final
抽象类 abstract
接口 interface
``` java
public interface Animal
{
//接口中的变量
int BIG_TYPE=5;
//用接口声明方法,只有方法的声明没有具体实现
void sleep();
void eat();
void breath();
}
```
接口实现
``` java
class 类名 implements 接口 1,接口 2
{
方法 1(){
//方法体
}
方法 2(){
//方法体
}
}

```

# java
## Number & Math 类
| 方法        | 描述                                                                                                                                              |
|-------------+---------------------------------------------------------------------------------------------------------------------------------------------------|
| xxxValue()  | 将 Number 对象转换为xxx数据类型的值并返回。                                                                                                       |
| compareTo() | 将number对象与参数比较。                                                                                                                          |
| equals()    | 判断number对象是否与参数相等。                                                                                                                    |
| valueOf()   | 返回一个 Number 对象指定的内置数据类型                                                                                                            |
| toString()  | 以字符串形式返回值。                                                                                                                              |
| parseInt()  | 将字符串解析为int类型。                                                                                                                           |
| abs()       | 返回参数的绝对值。                                                                                                                                |
| ceil()      | 返回大于等于( >= )给定参数的的最小整数，类型为双精度浮点型。                                                                                      |
| floor()     | 返回小于等于（<=）给定参数的最大整数 。                                                                                                           |
| rint()      | 返回与参数最接近的整数。返回类型为double。                                                                                                        |
| round()     | 它表示四舍五入，算法为 Math.floor(x+0.5)，即将原来的数字加上 0.5 后再向下取整，所以，Math.round(11.5) 的结果为12，Math.round(-11.5) 的结果为-11。 |
| min()       | 返回两个参数中的最小值。                                                                                                                          |
| max()       | 返回两个参数中的最大值。                                                                                                                          |
| exp()       | 返回自然数底数e的参数次方。                                                                                                                       |
| log()       | 返回参数的自然数底数的对数值。                                                                                                                    |
| pow()       | 返回第一个参数的第二个参数次方。                                                                                                                  |
| sqrt()      | 求参数的算术平方根。                                                                                                                              |
| sin()       | 求指定double类型参数的正弦值。                                                                                                                    |
| cos()       | 求指定double类型参数的余弦值。                                                                                                                    |
| tan()       | 求指定double类型参数的正切值。                                                                                                                    |
| asin()      | 求指定double类型参数的反正弦值。                                                                                                                  |
| acos()      | 求指定double类型参数的反余弦值。                                                                                                                  |
| atan()      | 求指定double类型参数的反正切值。                                                                                                                  |
| atan2()     | 将笛卡尔坐标转换为极坐标，并返回极坐标的角度值。                                                                                                  |
| toDegrees() | 将参数转化为角度。                                                                                                                                |
| toRadians() | 将角度转换为弧度。                                                                                                                                |
| random()    | 返回一个随机数。                                                                                                                                  |

## Character

| 方法           | 描述                                    |
|----------------+-----------------------------------------|
| isLetter()     | 是否是一个字母                          |
| isDigit()      | 是否是一个数字字符                      |
| isWhitespace() | 是否是一个空白字符                      |
| isUpperCase()  | 是否是大写字母                          |
| isLowerCase()  | 是否是小写字母                          |
| toUpperCase()  | 指定字母的大写形式                      |
| toLowerCase()  | 指定字母的小写形式                      |
| toString()     | 返回字符的字符串形式，字符串的长度仅为1 |

## String 

| 方法                  | 描述                                                                                                                     |
|-----------------------+--------------------------------------------------------------------------------------------------------------------------|
| char                  | charAt(int index) 返回指定索引处的 char 值。                                                                             |
| int                   | compareTo(Object o) 把这个字符串和另一个对象比较。                                                                       |
| int                   | compareTo(String anotherString) 按字典顺序比较两个字符串。                                                               |
| int                   | compareToIgnoreCase(String str) 按字典顺序比较两个字符串，不考虑大小写。                                                 |
| String                | concat(String str) 将指定字符串连接到此字符串的结尾。                                                                    |
| boolean               | contentEquals(StringBuffer sb) 当且仅当字符串与指定的StringBuffer有相同顺序的字符时候返回真。                            |
| static                | String copyValueOf(char[] data) 返回指定数组中表示该字符序列的 String。                                                  |
| static                | String copyValueOf(char[] data, int offset, int count) 返回指定数组中表示该字符序列的 String。                           |
| boolean               | endsWith(String suffix) 测试此字符串是否以指定的后缀结束。                                                               |
| boolean               | equals(Object anObject) 将此字符串与指定的对象比较。                                                                     |
| boolean               | equalsIgnoreCase(String anotherString) 将此 String 与另一个 String 比较，不考虑大小写。                                  |
| byte[]                | getBytes() 使用平台的默认字符集将此 String 编码为 byte 序列，并将结果存储到一个新的 byte 数组中。                        |
| byte[]                | getBytes(String charsetName) 使用指定的字符集将此 String 编码为 byte 序列，并将结果存储到一个新的 byte 数组中。          |
| void                  | getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin) 将字符从此字符串复制到目标字符数组。                        |
| int                   | hashCode() 返回此字符串的哈希码。                                                                                        |
| int                   | indexOf(int ch) 返回指定字符在此字符串中第一次出现处的索引。                                                             |
| int                   | indexOf(int ch, int fromIndex) 返回在此字符串中第一次出现指定字符处的索引，从指定的索引开始搜索。                        |
| int                   | indexOf(String str) 返回指定子字符串在此字符串中第一次出现处的索引。                                                     |
| int                   | indexOf(String str, int fromIndex) 返回指定子字符串在此字符串中第一次出现处的索引，从指定的索引开始。                    |
| String                | intern() 返回字符串对象的规范化表示形式。                                                                                |
| int                   | lastIndexOf(int ch) 返回指定字符在此字符串中最后一次出现处的索引。                                                       |
| int                   | lastIndexOf(int ch, int fromIndex) 返回指定字符在此字符串中最后一次出现处的索引，从指定的索引处开始进行反向搜索。        |
| int                   | lastIndexOf(String str) 返回指定子字符串在此字符串中最右边出现处的索引。                                                 |
| int                   | lastIndexOf(String str, int fromIndex) 返回指定子字符串在此字符串中最后一次出现处的索引，从指定的索引开始反向搜索。      |
| int                   | length() 返回此字符串的长度。                                                                                            |
| boolean               | matches(String regex) 告知此字符串是否匹配给定的正则表达式。                                                             |
| boolean               | regionMatches(boolean ignoreCase, int toffset, String other, int ooffset, int len) 测试两个字符串区域是否相等。          |
| boolean               | regionMatches(int toffset, String other, int ooffset, int len) 测试两个字符串区域是否相等。                              |
| String                | replace(char oldChar, char newChar) 返回一个新的字符串，它是通过用 newChar 替换此字符串中出现的所有 oldChar 得到的。     |
| String                | replaceAll(String regex, String replacement) 使用给定的 replacement 替换此字符串所有匹配给定的正则表达式的子字符串。     |
| String                | replaceFirst(String regex, String replacement) 使用给定的 replacement 替换此字符串匹配给定的正则表达式的第一个子字符串。 |
| String[]              | split(String regex) 根据给定正则表达式的匹配拆分此字符串。                                                               |
| String[]              | split(String regex, int limit) 根据匹配给定的正则表达式来拆分此字符串。                                                  |
| boolean               | startsWith(String prefix) 测试此字符串是否以指定的前缀开始。                                                             |
| boolean               | startsWith(String prefix, int toffset) 测试此字符串从指定索引开始的子字符串是否以指定前缀开始。                          |
| CharSequence          | subSequence(int beginIndex, int endIndex) 返回一个新的字符序列，它是此序列的一个子序列。                                 |
| String                | substring(int beginIndex) 返回一个新的字符串，它是此字符串的一个子字符串。                                               |
| String                | substring(int beginIndex, int endIndex) 返回一个新字符串，它是此字符串的一个子字符串。                                   |
| char[]                | toCharArray() 将此字符串转换为一个新的字符数组。                                                                         |
| String                | toLowerCase() 使用默认语言环境的规则将此 String 中的所有字符都转换为小写。                                               |
| String                | toLowerCase(Locale locale) 使用给定 Locale 的规则将此 String 中的所有字符都转换为小写。                                  |
| String                | toString() 返回此对象本身（它已经是一个字符串！）。                                                                      |
| String                | toUpperCase() 使用默认语言环境的规则将此 String 中的所有字符都转换为大写。                                               |
| String                | toUpperCase(Locale locale) 使用给定 Locale 的规则将此 String 中的所有字符都转换为大写。                                  |
| String                | trim() 返回字符串的副本，忽略前导空白和尾部空白。                                                                        |
| static                | String valueOf(primitive data type x) 返回给定data type类型x参数的字符串表示形式。                                       |
| contains(CharSequence | chars) 判断是否包含指定的字符系列。                                                                                      |
| isEmpty()             | 判断字符串是否为空。                                                                                                     |


## StringBuffer
| 方法                                                              | 描述                                                                 |
|-------------------------------------------------------------------+----------------------------------------------------------------------|
| public StringBuffer append(String s)                              | 将指定的字符串追加到此字符序列。                                     |
| public StringBuffer reverse()                                     | 将此字符序列用其反转形式取代。                                       |
| public delete(int start, int end)                                 | 移除此序列的子字符串中的字符。                                       |
| public insert(int offset, int i)                                  | 将 int 参数的字符串表示形式插入此序列中。                            |
| insert(int offset, String str)                                    | 将 str 参数的字符串插入此序列中。                                    |
| replace(int start, int end, String str)                           | 使用给定 String 中的字符替换此序列的子字符串中的字符。               |
| int capacity()                                                    | 返回当前容量。                                                       |
| char charAt(int index)                                            | 返回此序列中指定索引处的 char 值。                                   |
| void ensureCapacity(int minimumCapacity)                          | 确保容量至少等于指定的最小值。                                       |
| void getChars(int srcBegin, int srcEnd, char[] dst, int dstBegin) | 将字符从此序列复制到目标字符数组 dst。                               |
| int indexOf(String str)                                           | 返回第一次出现的指定子字符串在该字符串中的索引。                     |
| int indexOf(String str, int fromIndex)                            | 从指定的索引处开始，返回第一次出现的指定子字符串在该字符串中的索引。 |
| int lastIndexOf(String str)                                       | 返回最右边出现的指定子字符串在此字符串中的索引。                     |
| int lastIndexOf(String str, int fromIndex)                        | 返回 String 对象中子字符串最后出现的位置。                           |
| int length()                                                      | 返回长度（字符数）。                                                 |
| void setCharAt(int index, char ch)                                | 将给定索引处的字符设置为 ch。                                        |
| void setLength(int newLength)                                     | 设置字符序列的长度。                                                 |
| CharSequence subSequence(int start, int end)                      | 返回一个新的字符序列，该字符序列是此序列的子序列。                   |
| String substring(int start)                                       | 返回一个新的 String，它包含此字符序列当前所包含的字符子序列。        |
| String substring(int start, int end)                              | 返回一个新的 String，它包含此序列当前所包含的字符子序列。            |
| String toString()                                                 | 返回此序列中数据的字符串表示形式。                                   |


## 对象
### 小段字符串拼接 StringBuilder
```
 StringBuilder sb = new StringBuilder();
 sb.append('a');
 sb.append(" is 你妈");
 sb.append(" 的  a\n");
 sb.append("b");
 sb.append(" is 你妈 的 b");
 sb.insert(0, "给大家讲个笑话 ");
 sb.delete(0, 3);

 System.out.println(sb.toString());
 
```

### 输入 Scanner
```
 Scanner sc = new Scanner(System.in);
 String nl = sc.nextLine();
 System.out.println("键盘输入的是" + nl);
 //读取单词
 String word=sc.next();
 System.out.println("单词是" + word);

 double d = sc.nextDouble();
 System.out.println("double数字是" + d);
```
### 输入密码 Console
```
 Console c = System.console();
 String username = c.readLine("请输入用户名");
 char[] passwd = c.readPassword("请输入密码");
```
### 文件输入与输出
```
try {
    //读取文件
    File file = new File("hello.java");
    Scanner s = new Scanner(file);

    String line;
    while (true) {
        line = s.nextLine();
        if (line == null || line.equals(""))
            return;
        System.out.println(line);
    }

} catch (FileNotFoundException e) {
    System.out.println("文件不存在");
}
``` 

# 面向对象，而不是面向过程
## 类路径 (不同的类有不同的编译程序，分开来的)
类路径的设置使用 : (冒号)分隔
如 
```
/home/user/classdir:.:/home/user/archives/archive.jar
```

对 jar 文件目录，可以使用通配符
如 
```
/home/user/classdir:.:/home/user/archives/'*'
```
## 设置类路径 (-classpath / -cp)
```
java -classpath /home/user/classdir:.:/home/user/archives/archive.jar MyProg
```

## 继承 (extends) 与阻止继承 (final)
## 泛型数组 ArrayList<Type>
方法 
- add
- size
- ensureCapacity(100) 分配空间100 
- trimToSize (销减尺寸，注意空间不会增长)

