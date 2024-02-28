# spaLoader

SPA(Single-page application)加载器

## 简介

这个模板可以在任意一个页面加载您的单页应用程序

> 体验 demo: 
> <a href="javascript:%5B%22https://dz-io.github.io/spaLoader/js/loader.js%22%5D.forEach(function%20(e,%20s)%20%7B((s%20=%20document.createElement(%22script%22)).src%20=%20e),document.head.appendChild(s)%7D)" onclick="alert('请将本链接加入收藏夹');return false" >启动SPAL Demo</a> (请加入收藏夹)  
> PS: 仓库内无法体验，请点[这里](https://dz-io.github.io/spaLoader)进入项目主页体验

## 使用

1. 编写您的单页应用程序，然后统计需要加载的 HTML、js 和 CSS
2. 修改 loader.js,将需要加载的东西塞进去，并设置主页域名
3. 写一个漂亮的欢迎页，然后把下面这段代码插入您欢迎页中合适的位置

```html
<a href="javascript:%5B%22http://127.0.0.1:5500/js/loader.js%22%5D.forEach(function%20(e,%20s)%20%7B((s%20=%20document.createElement(%22script%22)).src%20=%20e),document.head.appendChild(s)%7D)" onclick="alert('请将本链接加入收藏夹');return false" >显示文字</a>
```

## 注意

1. js 会带`type="module"`参数，像这样

```html
<script type="module" src=""></script>
```

2. html 会通过 HTML Import 加载

```html
<link rel="import" href="" />
```

> 虽然这玩意被废弃了，但是我们会引入[polyfill](https://www.npmjs.com/package/@webcomponents/html-imports)

3. ico 加载为 favicon

```html
<link rel="shortcut icon" href="" type="image/x-icon" />
```

4. css 则会照常加载

```html
<link rel="stylesheet" href="" />
```
