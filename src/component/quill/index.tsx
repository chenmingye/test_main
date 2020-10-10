import React, { PureComponent, RefObject } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import { ImageDrop } from 'quill-image-drop-module';
import 'react-quill/dist/quill.snow.css';
import quillEmoji from 'quill-emoji';
import 'quill-emoji/dist/quill-emoji.css';
import './assets/index.less';
const { ToolbarEmoji } = quillEmoji;
Quill.register('modules/imageDrop', ImageDrop);
Quill.register('modules/emoji-toolbar', ToolbarEmoji);
export default class MyQuill extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
      options: {
        toolbar: {
          container: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ color: [] }, { background: [] }],
            [
              { list: 'ordered' },
              { list: 'bullet' },
              { indent: '-1' },
              { indent: '+1' },
              { align: [] },
            ],
            ['image', 'emoji', 'video', 'link'],
            ['clean'],
          ],
          handlers: {
            image: this.showUploadBox.bind(this),
            //   'video':this.showUploadBox.bind(this)
          },
        },
        imageDrop: true,
        'emoji-toolbar': true,
      },
    };
  }
  InputFile: RefObject<HTMLInputElement> = React.createRef();
  quillEditor: RefObject<ReactQuill> = React.createRef();
  // 当修改文本框的内容时，会自动调用onQuillChange函数
  onQuillChange = (content: any, delta: any, source: any, editor: any) => {
    // content 是真实的DOM节点
    // delta 记录了修改的对象，下篇文章详述
    // source 值为user或api
    // editor 文本框对象，可以调用函数获取content, delta值
    console.log('a', content, 'b', delta, 'c', source, 'd', editor);

    this.setState({ value: content });
  };
  showUploadBox() {
    const quill = this.quillEditor.current.getEditor();
    // quill.insertEmbed
    this.InputFile.current.click();
  }
  imageHandelr = () => {
    this.quillEditor.current;
  };
  render() {
    const { value, options, formats } = this.state;
    return (
      <>
        <div className="quill-wrap">
          <ReactQuill
            ref={this.quillEditor}
            className="quill-content"
            theme="snow"
            modules={options}
            value={value}
            onChange={this.onQuillChange}
          />
        </div>
        <input
          style={{ display: 'none' }}
          type="file"
          ref={this.InputFile}
          name=""
          id=""
        />
        <div dangerouslySetInnerHTML={{ __html: value }}></div>
      </>
    );
  }
}
