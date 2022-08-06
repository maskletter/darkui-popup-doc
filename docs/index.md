<<<<<<< HEAD
---
hero:
  title: darkui-popup
  desc: 专注于react弹窗组件功能 
  actions:
    - text: 快速上手
      link: /usage/basic
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 自由行
    desc: 高度可定制化，动画/关闭/多弹窗/背景
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: 队列功能
    desc: 适用于复杂队列弹窗
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 高度兼容性
    desc: 通过简单配置,核心功能轻松迁移至任何ui/框架中
footer: Open-source MIT Licensed | Copyright © 2020<br />Powered by [dumi](https://d.umijs.org)
---

## 快速安装
```shell
npm i @darkui/popup --save
```
## 组件形式调用
```tsx
import React, { useState } from 'react';
// 引入样式文件
import "@darkui/popup/es/style.css";
// 加载组件
import { Popup } from '@darkui/popup';

export default () => {

  const [visibility, setVisibility] = useState(false)

  return <div>

    <button onClick={() => setVisibility(true)}>打开弹窗</button>
    <Popup
      visibility={visibility}
      onCancel={() => setVisibility(false)}
      borderRadius={10}
    >
      <div style={{padding:'20px 30px'}}>
        Hello,world
      </div>
    </Popup>
  </div>

}
```
## 命令式调用

```tsx
/* eslint-disable */
import React from 'react';
import { Show } from '@darkui/popup';

export default () => {

  const popup1 = async (direction?: any) => {
    const instance = await Show({
      direction,
      content: () => <h1 style={{color:'#666'}}>测试1-content</h1>,
      onCancel(ss) {
        instance.close();
      },
    });
  };

  return <div>

    <button onClick={() => popup1()}>打开弹窗</button>
  </div>

}
```

## 队列调用
```tsx
import React from 'react';
import { getQueueInfo, Queue } from '@darkui/popup';

export default () => {

  const popup1 = async (direction?: any) => {
    await Queue([
      () => <div style={{padding:'20px 30px'}}>
        第一个弹窗
      </div>,
      () => <div style={{padding:'20px 30px'}}>
        第二个弹窗
      </div>,
      () => <div style={{padding:'20px 30px'}}>
        第三个弹窗
      </div>
    ]);
    alert('全部加载完成了')
  };

  return <div>

    <button onClick={() => popup1()}>打开弹窗</button>
  </div>

}
```
=======
## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/maskletter/darkui-popup-doc/edit/main/docs/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/maskletter/darkui-popup-doc/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
>>>>>>> ba6bed2652e5d6556ecc6a322df87c9063a39bc8
