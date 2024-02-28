// loader.js - 在当前页面加载SPA(Single-page application)
// javascript:["https://dz-io.github.io/spaLoader/js/loader.js"].forEach(function (e, s) {((s = document.createElement("script")).src = e),document.head.appendChild(s)})
// 配置文件列表
const files = [
  "html/comp1.html",
  "js/app.js",
  "img/favicon.ico",
  "css/app.css",
];
// 配置域名
const origin = "https://dz-io.github.io/spaLoader/";
// 清空head
document.head.innerHTML = "";
// 清空body
document.body.innerHTML = "正在加载...";
let supportImport = "import" in document.createElement("link");
// 插入文件
files.forEach((f) => {
  // 定义tag
  let tag;
  // 判断类型
  switch (f.split(".").reverse()[0]) {
    // js - <script type="module" src=""></script>
    case "js":
      tag = document.createElement("script");
      tag.type = "module";
      tag.src = `${origin}${f}`;
      break;
    // html - <link rel="import" href="" />
    case "html":
      tag = document.createElement("link");
      tag.rel = "import";
      tag.href = `${origin}${f}`;
      // 检查polyfill
      if (!supportImport) {
        const importHTML = document.createElement("script");
        importHTML.src =
          "https://cdn.jsdelivr.net/npm/@webcomponents/html-imports@1.3.1/html-imports.min.js";
        document.head.appendChild(importHTML);
        supportImport = true;
      }
      break;
    // ico - <link rel="shortcut icon" href="" type="image/x-icon" />
    case "ico":
      tag = document.createElement("link");
      tag.rel = "shortcut icon";
      tag.type = "image/x-icon";
      tag.href = `${origin}${f}`;
      break;
    // css - <link rel="stylesheet" href="" />
    case "css":
      tag = document.createElement("link");
      tag.rel = "stylesheet";
      tag.href = `${origin}${f}`;
      break;

    default:
      break;
  }
  document.head.appendChild(tag);
});
