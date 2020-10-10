### **Tinymce v4 富文本插件使用方法**

本插件基于Tinymce 做了一些自定义修改 包括 删除官网logo、 引入付费包、所以 不建议再次修改这个包

#### 先来一张大图镇楼。。。

![效果图](https://www.tiny.cloud/blog/static/rounded-d2c00c41f87035fd260df747afa2db31.svg)

#### 使用方法

与[官网](https://www.tiny.cloud/docs-4x/)v4版本一致

首先在html里面引入文件让插件注册到window

```html
<script src="/tinymce/js/tinymce/tinymce.min.js"></script>
```

###### 常用配置


```tsx
const init = {
  //设置绑定元素
  selector: 'textarea#editor’,
  //设置语言中文
  language: 'zh_CN’,
  //设置不将图片转换为base64格式
  images_dataimg_filter: function(img) {
     return img.hasAttribute('internal-blob');
  },
  //图片上传事件 完成后需调用success设置富文本图片地址 success(url)
  images_upload_handler: function(blobInfo, success, failure) {
     success('');
  },
  //设置高度
  height: 500,
  //设置主题
  //theme: 'modern’,
  //可用插件 其中 powerpaste 为付费插件 为了找到开源的版本 花了我不少功夫 所以不建议修改插件
  plugins: 'advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime legacyoutput link lists media nonbreaking noneditable pagebreak powerpaste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount',
 // 工具栏配置
  toolbar:'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
  image_advtab: true,
  templates: [
     { title: 'Test template 1', content: 'Test 1' },
		 { title: 'Test template 2', content: 'Test 2' },
  ],
  content_css: [
		'//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
		'//www.tinymce.com/css/codepen.min.css',
  ],
  //富文本事件栏 包含常用事件 官网地址:https://www.tiny.cloud/docs-4x/advanced/events/#editorevents 
  init_instance_callback: function (editor) {
	editor.on('KeyDown', function (e) {
	console.log('Editor contents was changed.',e,editor.getContent());
	});
  }
};

class TinymceEditor extends React.Component {
  componentDidMount() {
    const win: any = window;
    win.tinymce.init(init);
  }
  render() {
    return (
      <textarea id="editor"></textarea>
    );
  }
}

export default TinymceEditor;

```

###### 调用

```tsx
<TinymceEditor />
```

