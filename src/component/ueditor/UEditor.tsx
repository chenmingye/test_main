/**
 * 封装UEditor
 */
import React from 'react';
import './assets/index.less';
const windows: any = window;
class UEditor extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      editor: {},
      id: 'UEditor',
    };
  }
  componentDidMount() {
    const UE = windows.UE;
    const id = this.state.id;
    if (id) {
      try {
        /* 加载之前先执行删除操作，否则如果存在页面切换，
            再切回带编辑器页面重新加载时不刷新无法渲染出编辑器 */
        UE.delEditor(id);
      } catch (e) {}
      const ueditor = UE.getEditor(id, {
        // toolbars: [['bold', 'italic', 'underline', 'kityformula', 'diyimg']],
        initialContent: '',
        autoHeightEnabled: false,
        autoFloatEnabled: false,
        elementPathEnabled: false,
        wordCount: false,
        enableAutoSave: false,
        initialFrameWidth: this.props.width,
        initialFrameHeight: this.props.height,
      });
    }
  }
  render() {
    return <div className="ueditor-wrap" id={this.state.id} />;
  }
}

export default UEditor;
