### 一. FormData

> 利用FormData对象,我们可以通过JavaScript用一些键值对来模拟一系列表单控件,我们还可以使用XMLHttpRequest的send()方法来异步的提交这个"表单".比起普通的ajax,使用FormData的最大优点就是我们可以异步上传一个二进制文件.

方法：

```
var formData = new FormData();
formData.append("k1", "v1"); //append()方法的第二个参数可以是File,Blob对象
formData.append("k1", "v2");
formData.get("k1"); // // "v1" 获取key为name的第一个值
formData.getAll("k1"); // ["v1","v2"] 返回一个数组，获取key为name的所有值
formData.set("k1", "1"); //设置修改数据
formData.has("k1"); // true 来判断是否有对应的key值
formData.has("k2"); // false
formData.delete("k1"); //删除数据

```
根据已有form表单初始化一个formData对象：

```
// 获取页面已有的一个form表单
var form = document.getElementById("myForm");
// 用表单来初始化
var formData = new FormData(form);
// 我们可以根据name来访问表单中的字段
var name = formData.get("name"); // 获取名字
var psw = formData.get("pw"); // 获取密码
// 当然也可以在此基础上，添加其他数据
formData.append("token","kshdfiwi3rh");

```
发送一个二进制数据流：

```
var content = '<a id="a"><b id="b">hey!</b></a>'; 
var blob = new Blob([content], { type: "text/xml"});
formData.append("file", blob);
axios.post('http://demo.api.com/doSomething', formData,
    {
        headers: {
            'Content-Type': 'multipart/form-data'
       }
   }
)

```

### 二. Blob

> 一个Blob对象就是一个包含有只读原始数据的类文件对象。Blob对象中的数据并不一定得是JavaScript中的原生形式。File接口基于Blob，继承了Blob的功能,并且扩展支持了用户计算机上的本地文件。

Blob对象可以看做是存放二进制数据的容器，但要读取里面的二进制数据，需要用FileReader；此外还可以通过Blob设置二进制数据的MIME类型。

```
/**
* Blob构造函数：
* dataArray：数组，包含了要添加到Blob对象中的数据，数据可以是Int32Array、Uint8Array、Float32Array等，或者连续内存缓冲区ArrayBuffer，ArrayBufferView， Blob，或者 DOMString对象。
* opt：对象，用于设置Blob对象的属性（如：MIME类型）
**/
var blob = new Blob(dataArr:Array<any>, opt:{type:string});

```
1. 创建一个装填DOMString对象的Blob对象
```
var s = '<div>hello</div>'
var blobObj = new Blob([s], {type: 'text/xml'})

```
2. 创建一个装填ArrayBuffer对象的Blob对象

```
var abf = new ArrayBuffer(8)
var blobOjb = new Blob([abf], {type: 'text/plain'})

```
3. Blob.slice()

此方法返回一个新的Blob对象，包含了原Blob对象中指定范围内的数据，利用此发放可以实现大文件的分片上传

```
/**
* start：开始索引，默认为0
* end：截取结束索引（不包括end）
* contentType：新Blob的MIME类型，默认为空字符串
**/
Blob.slice(start:number, end:number, contentType:string)

```
4. Canvas.toBlob()
canvas转为blob对象

5. 实现url下载文件
window.URL对象可以为Blob对象生成一个网络地址，结合a标签的download属性，可以实现点击url下载文件

```
function createDownload(fileName, content){
    var blob = new Blob([content]);
    var link = document.createElement("a");
    link.download = fileName;
    link.href = URL.createObjectURL(blob); //可以直接当作image的src属性来显示图片
    link.click()
}

```

```
<input type="file" id="fileElem" multiple accept="image/*" style="display:none" onchange="handleFiles(this.files)">
<a href="#" id="fileSelect">Select some files</a> 
<div id="fileList">
  <p>No files selected!</p>
</div>



window.URL = window.URL || window.webkitURL;

var fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

function handleFiles(files) {
  if (!files.length) {
    fileList.innerHTML = "<p>No files selected!</p>";
  } else {
    fileList.innerHTML = "";
    var list = document.createElement("ul");
    fileList.appendChild(list);
    for (var i = 0; i < files.length; i++) {
      var li = document.createElement("li");
      list.appendChild(li);

      var img = document.createElement("img");
      var reader = new FileReader();
      reader.readAsText(files[i]);
      reader.onload = function(){
        //读取完毕后输出结果
        console.log(reader.result);
      }
      img.src = window.URL.createObjectURL(files[i]);
      img.height = 60;
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
      li.appendChild(img);
      var info = document.createElement("span");
      info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}

```

### 三. File

> File是Blob的子类，比blob主要多出一个name的属性。

我们常用的文件选择标签<inout type="file" />元素就拥有一个files属性，这个files就是File类型

```
var input = document.querySelector('input[type=file]');
console.log(input.files) // FileList {0: File(3044232), length: 1}

```
### 四. URL

> 除了可以使用base64字符串作为内容的DataURI将一个文件嵌入到另外一个文档里，还可以使用URL对象。URL对象用于生成指向File对象或Blob对象的URL

实例属性：

```
var url = new URL(location.href)
url.href //包含完整 URL 的DOMString
url.protocol //包含 URL 协议名的DOMString,末尾带 ':'。
url.host //包含 URL 域名，':'，和端口号的DOMString
url.hostname //包含 URL 域名的DOMString
url.port //包含 URL 端口号的DOMString
url.pathname //以 '/' 起头紧跟着 URL 文件路径的DOMString
url.search //以 '?' 起头紧跟着 URL 请求参数的DOMString
url.hash //以 '#' 起头紧跟着 URL 锚点标记的DOMString
url.username //包含在域名前面指定的用户名的DOMString
url.password //包含在域名前面指定的密码的DOMString
url.origin //返回一个包含协议名、域名和端口号的DOMString
url.searchParams //返回一个用来访问当前 URL GET 请求参数的URLSearchParams对象

```

静态方法：

- URL.createObjectURL()

>该方法会创建一个 DOMString，其中包含一个表示参数中给出的对象的URL。这个 URL 的生命周期和创建它的窗口中的 document 绑定。这个新的URL 对象表示指定的 File 对象或 Blob 对象。

```
var objectURL = URL.createObjectURL(blob);

```

- URL.revokeObjectURL()

> 该方法用来释放一个之前通过调用 URL.createObjectURL() 创建的已经存在的 URL 对象。当你结束使用某个 URL 对象时，应该通过调用这个方法来让浏览器知道不再需要保持这个文件的引用了。 


```
window.URL.revokeObjectURL(objectURL);


```

### 五. URLSearchParams

> URLSearchParams 接口定义了一些实用的方法来处理 URL 的查询字符串。

- URLSearchParams.append() 插入一个指定的键/值对作为新的搜索参数。
- URLSearchParams.delete() 从搜索参数列表里删除指定的搜索参数及其对应的值。
- URLSearchParams.entries() 返回一个iterator可以遍历所有键/值对的对象。
- URLSearchParams.get() 获取指定搜索参数的第一个值。
- URLSearchParams.getAll() 获取指定搜索参数的所有值，返回是一个数组。
- URLSearchParams.has() 返回Boolean判断是否存在此搜索参数。
- URLSearchParams.keys() 返回iterator此对象包含了键/值对的所有键名。
- URLSearchParams.set() 设置一个搜索参数的新值，假如原来有多个值将删除其他所有的值。
- URLSearchParams.sort() 按键名排序。
- URLSearchParams.toString() 返回搜索参数组成的字符串，可直接使用在URL上。
- URLSearchParams.values() 返回iterator此对象包含了键/值对的所有值。


```
var paramsString = "https://www.baidu.com?topic=api&target=bank"
var searchParams = new URLSearchParams(paramsString);

searchParams.has('topic') // true
searchParams.get('topic') // "api"
searchParams.get('target') // "bank"
searchParams.getAll('topic') // ["api"]

searchParams.get('foo') // null，注意Firefox返回空字符串
searchParams.set('foo', 2);
searchParams.get('foo') // 2

searchParams.append('topic', 'webdev');
searchParams.toString() // "q=URLUtils.searchParams&topic=api&foo=2&topic=webdev"

searchParams.append('foo', 3);
searchParams.getAll('foo') // [2, 3]

searchParams.delete('topic');
searchParams.toString() 

```

在一些场景里使用axios发送数据时若需要以application/x-www-form-urlencoded格式发送数据，在浏览器端可以用URLSearchParams的实例当作POST数据发送，所有数据都会URL编码。（请注意，由于URLSearchParams支持性不好，可以使用polyfill来转换，可以在入口文件引入）
```
import 'url-search-params-polyfill';
在node环境里可以使用querystring模块进行编码

var querystring = require('querystring');
axios.post('http://something.com/', querystring.stringify({ foo: 'bar' });
DOM 的 a 元素节点的 searchParams 属性，就是一个 URLSearchParams 实例。

var a = document.createElement('a');
a.href = 'https://example.com?filter=api';
a.searchParams.get('filter') // "api"
URLSearchParams 还可以与 URL 接口结合使用:

var url = new URL(location);
var foo = url.searchParams.get('foo') || 'somedefault';
```













['阅读'](https://www.jianshu.com/p/67702e025ede)

['阅读'](https://www.jianshu.com/p/525001212ec5)




