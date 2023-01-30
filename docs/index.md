---
hero:
  title: dark-ui
  desc: react-ui组件包
  actions:
    - text: popup
      link: /popup/基础使用
    - text: transition
      link: /transition/api
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: popup
    desc: 高度可定制化，动画/关闭/多弹窗/背景
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png
    title: react-transition
    desc: react版本动画过渡组件
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 高度兼容性
    desc: 通过简单配置,核心功能轻松迁移至任何ui/框架中
footer: Open-source MIT Licensed | Copyright © 2023<br />Powered by [dumi](https://d.umijs.org)
---

## 安装弹窗组件

```shell
npm i @darkui/popup --save
```

## 安装动画组件

```shell
npm i @darkui/react-transition --save
```

## 组件形式调用

```tsx
import React, { useState } from 'react';
// 引入样式文件
import '@darkui/popup/es/style.css';
import './global.less';
import './animate.min.css';
// 加载组件
import { Popup } from '@darkui/popup';

export default () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      <button onClick={() => setVisibility(true)}>打开弹窗</button>
      <Popup
        visibility={visibility}
        onCancel={() => setVisibility(false)}
        borderRadius={10}
      >
        <div style={{ padding: '20px 30px' }}>Hello,world</div>
      </Popup>
    </div>
  );
};
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
      content: () => <h1 style={{ color: '#666' }}>测试1-content</h1>,
      onCancel(ss) {
        instance.close();
      },
    });
  };

  return (
    <div>
      <button onClick={() => popup1()}>打开弹窗</button>
    </div>
  );
};
```

## 队列调用

```tsx
import React from 'react';
import { getQueueInfo, Queue } from '@darkui/popup';

export default () => {
  const popup1 = async (direction?: any) => {
    await Queue([
      () => <div style={{ padding: '20px 30px' }}>第一个弹窗</div>,
      () => <div style={{ padding: '20px 30px' }}>第二个弹窗</div>,
      () => <div style={{ padding: '20px 30px' }}>第三个弹窗</div>,
    ]);
    alert('全部加载完成了');
  };

  return (
    <div>
      <button onClick={() => popup1()}>打开弹窗</button>
    </div>
  );
};
```
