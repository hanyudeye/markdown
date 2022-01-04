# hugo
静态网站创造软件

## Templating
Hugo uses Go’s html/template and text/template libraries as the basis for the templating.  
模板目录位于 **layouts/**   

Go Template 用 {{}} 符号镶嵌在 HTML 中。

变量 
``` go 
{{ .Title }}
{{ $address := "123 Main St." }}
{{ $address }}
```
函数 
``` go 
{{Function Arg1 Arg2 ..}}
{{ if or (isset .Params "alt") (isset .Params "caption") }} Caption {{ end }}
{{ if or 
  (isset .Params "alt") 
  (isset .Params "caption")
}}
{{ $var := "Hugo Page" }}
{{ if .IsHome }}
    {{ $var = "Hugo Home" }}
{{ end }}
Var is {{ $var }}
```

### 包含 
``` go
{{ partial "header.html" . }}
```
### 逻辑操作
#### 遍历
``` go
{{ range $elem_index, $elem_val := $array }}
   {{ $elem_index }} -- {{ $elem_val }}
{{ end }}
```
#### 条件
``` go
{{ if (isset .Params "description") }}
    {{ index .Params "description" }}
{{ else }}
    {{ .Summary }}
{{ end }}
```
#### 管道 |
``` go
{{ index .Params "disqus_url" | html }}
```
### 上下文
#### 当前上下文 Context
``` go
{{ . }}
```
#### Global Context
``` go
{{$.}}
```
#### 去除空格 ，制表符
``` go 
 {{- .Title -}}
```
### 注释
``` go
{{/* and */}}
```
#### html comments
``` go
{{ printf "<!-- Our website is named: %s -->" .Site.Title | safeHTML }}
```
### page Parameters 
``` yaml
定义参数
---
title: Roadmap
lastmod: 2017-03-05
date: 2013-11-18
notoc: true
---
```
获取参数
``` go
{{ if not .Params.notoc }}
<aside>
  <header>
    <a href="#{{.Title | urlize}}">
    <h3>{{.Title}}</h3>
    </a>
  </header>
  {{.TableOfContents}}
</aside>
<a href="#" id="toc-toggle"></a>
{{ end }}
```
### Use Site Configuration Parameters(支持 yaml ,toml,json格式) 
``` yaml
params:
  copyrighthtml: Copyright &#xA9; 2017 John Doe. All Rights Reserved.
  sidebarrecentlimit: 5
  twitteruser: spf13
```

``` go
{{ if .Site.Params.copyrighthtml }}
    <footer>
        <div class="text-center">{{.Site.Params.CopyrightHTML | safeHTML}}</div>
    </footer>
{{ end }}
```

### 模板页中常用的变量
- =.Title=: 获取Front Matter中title的值
- =.Content=: 获取文章的内容
- =.Date=: 获取Front Matter中date的值
- =.Description=: 获取Front Matter中description的值, 一般用于meta中的description字段
- =.Keywords=: 获取Front Matter中keywords的值, 用于meta中的keyword字段
- =.Permalink=: 获取页面的链接地址(URL)
- =.Next=: 下一个页面
- =.Prev=: 上一个页面
- =.WordCount=: 内容的字数
- =.ReadingTime=: 阅读内容的预估时间
- =.Pages=: 当前列表页面下的内容页面的集合, 该变量在内容页模板的上下文中值为nil
- =.Site=: 站点变量, 该变量下包含很多站点级别的属性和方法.

这些变量可以在官网找到 [[https://gohugo.io/variables/page/]] 具体的含义可以逐步去试一下.
## Content Organization
目录结构
``` 
.
└── content
    └── about
    |   └── index.md  // <- https://example.com/about/
    ├── posts
    |   ├── firstpost.md   // <- https://example.com/posts/firstpost/
    |   ├── happy
    |   |   └── ness.md  // <- https://example.com/posts/happy/ness/
    |   └── secondpost.md  // <- https://example.com/posts/secondpost/
    └── quote
        ├── first.md       // <- https://example.com/quote/first/
        └── second.md      // <- https://example.com/quote/second/
```


## Layout Lookup Order (布局使用顺序)
用户可以在前端 (front-matter)指定类型(type)和布局 (layout)

### 布局种类
- single单页 模板位于 **_default/single.html** 或使用 posts/ 下的模板
- home 主页/list 列表页 位于 **_default/list.html** 或 *index.html*

### 内容排序
hugo 中，content 要按照 *front matter* 的信息进行排序

      按照日期排序 
      ``` html
        {{ range .Data.Pages }}
        <li>
          <a href="{{ .Permalink }}">{{ .Title }}</a>
          <div class="meta">{{ .Date.Format "Mon, Jan 2, 2006" }}</div>
        </li>
        {{ end }}
      ``` 
      - 按 weight 排序  range .Data.Pages.ByWeight
      - 按日期 range .Data.Pages.ByDate
      - 发布日期 range .Data.Pages.ByPublishDate
      - 长度 range .Data.Pages.ByLength
      - 标题 range .Data.Pages.ByTitle
      - 逆序 range .Data.Pages.ByDate.Reverse
      ## Directory Structure
      hugo new site 会生成新的站点结构
      ```
.
├── archetypes
├── config.toml
├── content
├── data
├── layouts
├── static
└── themes

```
### archetypes 目录
文章头的模板文件

### data 
放置配置文件
### content 目录
content/blog, content/articles 的 content type 是 blog, articles。
content type 决定使用什么模板渲染 ,blog 就是类型，对应 layouts 下也有相应的 blog 目录，就能正确渲染
### layouts 模板目录
### static 目录
存储 static 内容: images,css,javascript,etc
### resources 目录
## Configure Hugo (进行配置)
三种格式的配置文件 , config.toml , config.yaml, 或config.json

### ignore content and data files
``` yaml
ignoreFiles:
- \.foo$
- \.boo$
```

### Configure Front Matter
``` yaml
frontmatter:
  date:
  - date
  - publishDate
  - lastmod
  expiryDate:
  - expiryDate
  lastmod:
  - :git
  - lastmod
  - date
  - publishDate
  publishDate:
  - publishDate
  - date
```

## 命令使用  
   - 创建网站 hugo new site SITENAME
   - 写关于页面 hugo new about.md
   - 写文章 hugo new post/POSTNAME.md 
   - 创建主题 hugo new theme THEMENAME
   - 添加主题 git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/THEMENAME
   - 使用主题 echo 'theme = "ananke"' >> config.toml
   - 启动站点 hugo server -D
   - 使用模板 hugo server --theme=hyde
