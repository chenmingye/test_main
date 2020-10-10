/*
 * @Author: Jason.chen
 * @Date: 2020-07-20 16:28:49
 * @LastEditors: Jason.chen
 * @LastEditTime: 2020-07-20 16:45:25
 * @FilePath: /umitest/src/component/tbusEditor/index.tsx
 * @Description: Tbus 富文本 试用
 */

import React, { FC, useEffect } from 'react';
import './assets/index.less';
import { createEditor } from '@tanbo/tbus';
import '@tanbo/tbus/bundles/editor.min.css';

const TbusEditor: FC = () => {
  useEffect(() => {
    const editor = createEditor('#editor', {
      // theme: // 可选 'dark' | 'mac-os' | 'mac-os-dark'，不传即为默认样式
      uploader(type: string): string | Promise<string> {
        switch (type) {
          case 'video':
            console.log('上传视频');
            break;
          case 'image':
            console.log('上传视频');
            break;
          case 'audio':
            console.log('上传音频');
            break;
        }
        return Promise.resolve().then(() => {
          return '/test';
        });
      },
      contents: `<p>欢迎你使用&nbsp;<strong>TBus</strong> 富文本编辑器...<br></p>`,
    });
    editor.onChange.subscribe(() => {
      console.log(editor.getContents());
    });
  }, []);
  return (
    <>
      <div id="editor"></div>
    </>
  );
};

export default TbusEditor;
