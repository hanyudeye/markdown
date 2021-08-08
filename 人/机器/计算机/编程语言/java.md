
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
在面向对象的语言中，对象是先于逻辑设计的，用来分割逻辑。

## 类和对象
类，作为对象的模板，这样，对象容易修改。

## 将类放入包中
如果没有包名，则类在默认包中  
包是为了更好的组织代码
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

