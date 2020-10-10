import React, { Component, RefObject } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './index.less';
import UEditor from '@/component/ueditor/UEditor';
import MyQuill from '@/component/quill';
import TinymceEditor from '@/component/tinymce';
import TbusEditor from '@/component/tbusEditor';
import Life1 from './life cycle/1';
const UE = window;
console.log(UE);

class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    count: 0,
  };
  TinymceEditor: RefObject<TinymceEditor> = React.createRef();
  TinymceEditor1: RefObject<TinymceEditor> = React.createRef();
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  componentDidMount() {
    // const pl =
    //   'advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime legacyoutput link lists media nonbreaking noneditable pagebreak powerpaste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount';
    // tinymce.init({
    //   selector: '#mytextarea',
    //   language: 'zh_CN', //注意大小写
    //   plugins: 'code' + pl,
    //   toolbar:
    //     'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat emoticons',
    //   image_advtab: true,
    // });
    // tinymce.init({
    //   selector: '#mytextarea1',
    //   language: 'zh_CN', //注意大小写
    // });
    // tinymce.init({
    //   selector: '#mytextarea2',
    //   language: 'zh_CN', //注意大小写
    // });
  }
  render() {
    const { editorState, count } = this.state;
    return (
      <div>
        {/* <textarea id="mytextarea">Hello, World!</textarea> */}
        {/* <textarea id="mytextarea1">Hello, World!</textarea>
        <textarea id="mytextarea2">Hello, World!</textarea> */}
        {/* <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        /> */}
        {/* <textarea
          disabled
           style={{width:500}} 
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
        {/* <button></button> */}
        <button
          onClick={() => {
            // this.TinymceEditor.current.handleEditorGetData();
            this.setState({ count: this.state.count + 1 });
          }}
        >
          点击取值1
        </button>
        <button
          onClick={() => {
            // this.TinymceEditor1.current.handleEditorGetData();
            this.setState({ count: this.state.count - 1 });
          }}
        >
          点击取值2
        </button>
        <Life1 count={count} render={(a) => <span>{a}</span>}>
          <div>hahahah</div>
          <div>xixixixi</div>
        </Life1>
        {/* {count == 0 && (
          <div>
            <TbusEditor />
          </div>
        )}
        {count == 1 && (
          <div>
            <TbusEditor />
          </div>
        )} */}

        {/* <TbusEditor />
        <TbusEditor /> */}
        {/* <UEditor /> */}
        {/* <MyQuill /> */}
        <TinymceEditor ref={this.TinymceEditor} />
        <TinymceEditor ref={this.TinymceEditor1} />
      </div>
    );
  }
}
export default EditorConvertToHTML;
