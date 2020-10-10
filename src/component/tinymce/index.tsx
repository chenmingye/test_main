/*
 * @Author: Jason.chen
 * @Date: 2020-05-31 18:11:07
 * @LastEditors: Jason.chen
 * @LastEditTime: 2020-08-29 13:51:15
 * @FilePath: /umitest/src/component/tinymce/index.tsx
 * @Description: 富文本组件
 */
import React from 'react';
interface Iprops {
  onChange?: (...arg: any[]) => any;
  height?: number;
  value?: any;
  defaultValue?: any;
  placeholder?: string;
}
interface Istate {
  key: number;
  UE: any;
}
/**
 * @author: Jason.chen
 * @description: 富文本组件
 * @function:
 * @param {Function} onChange Function
 * @param {number} height number
 * @param {html} value html
 * @param {html} defaultValue html
 * @param {string} placeholder string
 * @return: Editor
 */
class TinymceEditor extends React.PureComponent<Iprops, Istate> {
  constructor(props: Readonly<Iprops>) {
    super(props);
    this.state = {
      UE: null,
      key: Math.floor(Math.random() * 100000),
    };
  }
  static defaultProps = {
    height: 300,
    placeholder: '请输入',
    defaultValue: '',
    value: '',
  };
  componentDidMount() {
    this.initEditor();
  }
  /**
   * @author: Jason.chen
   * @description: 初始化editor
   * @function:
   * @param {type}
   * @return:
   */
  initEditor() {
    const { placeholder, defaultValue, value } = this.props;
    const win: any = window;
    win.tinymce.init(this.getInitOptions());
    // .then((e) => {
    //   this.setState({ UE: e }, () => {
    //     console.log(this.state);
    //     const html = (val) => `<div>${val}</div>`;
    //     if (value) {
    //       this.state.UE[0].setContent(html(value));
    //     } else if (defaultValue) {
    //       this.state.UE[0].setContent(html(defaultValue));
    //     } else {
    //       this.state.UE[0].setContent(html(placeholder));
    //     }
    //   });
    // });
  }
  /**
   * @author: Jason.chen
   * @description: 获取配置项
   * @function:
   * @param {type}
   * @return:
   */
  getInitOptions() {
    const { key } = this.state;
    const { height, onChange } = this.props;
    return {
      selector: '.mytextarea',
      // readonly: false,
      language: 'zh_CN',
      images_dataimg_filter: function (img) {
        return img.hasAttribute('internal-blob');
      },
      images_upload_handler: function (blobInfo, success, failure) {
        console.log(blobInfo);
        this.upLoadImage(blobInfo).then((res) => {
          console.log(res);
          success('');
        });
      },
      height: height,
      plugins:
        'advlist anchor autolink autosave code codesample directionality emoticons fullscreen hr image imagetools importcss insertdatetime legacyoutput link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textpattern visualblocks visualchars wordcount',
      toolbar:
        'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat emoticons',
      image_advtab: true,
      templates: [
        { title: 'Test template 1', content: 'Test 1' },
        { title: 'Test template 2', content: 'Test 2' },
      ],
      content_css: [
        '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
        '//www.tinymce.com/css/codepen.min.css',
      ],
      init_instance_callback: function (editor) {
        editor.on('onChange', function (e) {
          console.log('Editor contents was changed.', e, editor.getContent());
          onChange(editor.getContent());
        });
      },
    };
  }
  /**
   * @author: Jason.chen
   * @description: 获取值
   * @function:
   * @param {type}
   * @return:
   */
  handleEditorGetData = () => {
    const { UE } = this.state;
    console.log(UE[0].getContent());
  };
  /**
   * @author: Jason.chen
   * @description: 图片上传
   * @function:
   * @param {type}
   * @return:
   */
  upLoadImage: () => Promise<any>;
  render() {
    const { key } = this.state;
    return <textarea className={`mytextarea`}></textarea>;
  }
}

export default TinymceEditor;
