---
title: 更多效果
nav:
  path: /usage
  title: 更多效果
  order: 1
group:
  title: 使用方式
---

## 动画 demo

```tsx
import React from 'react';
import { ShowController } from '@darkui/popup';
import Img1 from './img.png';
import Img2 from './img2.png';
import Img3 from './img3.png';
import './demo.less';
let controller = null;
let clearToastTimeout = null;
function toast(msg) {
  if (!controller) {
    controller = new ShowController(undefined, { destory: false });
  }
  controller.append({
    bg: (status) => {
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            animation: `${
              status === 'enter' ? 'showBg' : 'hideBg'
            } .5s forwards`,
            transform: 'translate3d(0px, 0px, 0px)',
          }}
        >
          {renderImg(status)}
          <div
            style={{
              width: 500,
              height: 400,
              position: 'absolute',
              left: 'calc(50% - 250px)',
              top: 'calc(50% - 200px)',
            }}
          >
            <img
              style={{
                animation: `${
                  status === 'enter' ? 'jackInTheBox' : 'hide'
                } .8s forwards`,
                position: 'absolute',
                width: 200,
              }}
              src={Img1}
            />
            <img
              style={{
                animation: `${
                  status === 'enter' ? 'jackInTheBox' : 'hide'
                } .8s forwards`,
                position: 'absolute',
                width: 200,
                right: 0,
              }}
              src={Img1}
            />
            <img
              style={{
                animation: `${
                  status === 'enter' ? 'jackInTheBox' : 'hide'
                } .8s forwards`,
                position: 'absolute',
                width: 200,
                top: 160,
              }}
              src={Img1}
            />
            <img
              style={{
                animation: `${
                  status === 'enter' ? 'jackInTheBox' : 'hide'
                } .8s forwards`,
                position: 'absolute',
                width: 200,
                top: 170,
                right: 50,
              }}
              src={Img1}
            />
          </div>
        </div>
      );
    },
    disabledBodyScroll: true,
    wrapperBg: 'transparent',
    borderRadius: '10px',
    replace: true,
    zIndex: 999,
    animate: {
      enter: {
        animation: 'jackInTheBox 1.7s',
        bgDuration: 700,
      },
      leave: {
        animation: 'flipOutY .7s',
        bgDuration: 700,
      },
    },
    content: () => <img width={300} src={Img3} />,
  });
}
let randomValue = {};
function renderImg(status) {
  const width = window.outerWidth;
  const hegiht = window.outerHeight;
  const centerX = width / 2;
  const size = (parseInt(width / 200) + 1) * (parseInt(hegiht / 200) + 1);
  let x = -40;
  let y = 0;
  let offetX = 0;
  let index = 0;
  const elements = [];
  const r = Math.floor(Math.random() * 48);
  for (let i = 0; i < size; i++) {
    const key = i;
    if (!randomValue[key]) {
      randomValue[key] = {
        x: Math.floor(Math.random() * 48) - Math.floor(Math.random() * 48),
        y: Math.floor(Math.random() * 48) - Math.floor(Math.random() * 48),
        rotate: Math.floor(Math.random() * 48) - Math.floor(Math.random() * 48),
      };
    }
    elements.push(
      <div
        key={key}
        style={{
          position: 'absolute',
          width: 200,
          transform: `rotate(${randomValue[key].rotate}deg)`,
          left: x + randomValue[key].x,
          top: y + randomValue[key].y,
        }}
      >
        <img
          style={{
            width: '100%',
            animation: `${status === 'enter' ? 'show' : 'hide'} ${
              Math.floor(Math.random() * 42) / 10
            }s forwards`,
          }}
          src={Img2}
        />
      </div>,
    );
    index++;
    if (index * 200 > width) {
      y += 180;
      index = 0;
      x = -40;
    } else {
      x += 200;
    }
  }
  return elements;
}

export default () => {
  const popup = () => {
    toast(new Date().toString());
  };
  return (
    <div>
      <button onClick={() => popup(true)}>打开弹窗</button>
    </div>
  );
};
```

## toast(内置)

```tsx
import React from 'react';
import { toast } from '@darkui/popup';

export default () => {
  const popup = () => {
    toast(new Date().toString());
  };
  return (
    <div>
      <button onClick={() => popup(true)}>打开弹窗</button>
    </div>
  );
};
```

接收参数

```ts
const toast: (
  msg: string,
  options?: {
    duration?: number;
    className?: string;
  },
) => Promise;
```

## loading

```tsx
import React from 'react';
import { ShowController } from '@darkui/popup';

let controller = null;
let clearToastTimeout = null;
function loading(msg) {
  if (!controller) {
    controller = new ShowController(undefined, { destory: false });
  }
  controller.append({
    borderRadius: '10px',
    replace: true,
    zIndex: 9999,
    onCancel: () => {},
    content: () => (
      <div
        style={{
          width: 70,
          lineHeight: '70px',
          padding: '10px 20px',
          textAlign: 'center',
        }}
      >
        加载中...
      </div>
    ),
  });
  return function hideLoading() {
    controller.closeAll();
  };
}

export default () => {
  const popup = () => {
    const hideLoading = loading(new Date().toString());
    setTimeout(() => {
      hideLoading();
    }, 2000);
  };
  return (
    <div>
      <button onClick={() => popup(true)}>打开loading</button>
    </div>
  );
};
```

## Dialog(内置)

```tsx
import React from 'react';
import { dialog } from '@darkui/popup';

export default () => {
  const popup = () => {
    dialog({
      content: '确定要关闭弹窗吗',
    })
      .then(() => {
        alert('点击了确定');
      })
      .catch(() => {
        alert('点击了取消');
      });
  };
  return (
    <div>
      <button onClick={() => popup(true)}>打开确认弹窗</button>
    </div>
  );
};
```

接收参数

```ts
interface DialogProps {
  title?: string;
  content: string;
  cancelText?: string | ((loading: boolean) => JSX.Element | string);
  confirmText?: string | ((loading: boolean) => JSX.Element | string);
  showCancel?: boolean;
  className?: string;
  /**元素点击事件，可以设置async/callback来进入loading状态 */
  onConfirm?: (callback: Function) => void;
  /**元素点击事件，可以设置async/callback来进入loading状态 */
  onCancel?: (callback: Function) => void;
  /**获取当前控制器，用于关闭 */
  getController?: (callback: () => ShowController) => void;
  /**是否允许loading过程中关闭 */
  allowLoadingCancel?: boolean;
}
```

## actionsheet(内置)

```tsx
import React from 'react';
import { actionSheet, toast } from '@darkui/popup';

const popup = () => {
  actionSheet({
    list: [
      { text: 'aaaaa' },
      {
        text: (ld) => (!ld ? 'bbbbb(带loading)' : 'bbbbb-加载中'),
        onClick(c) {
          setTimeout(() => c(), 2000);
        },
      },
      { text: 'ccccc' },
      { text: 'ddddd' },
    ],
  })
    .then((data) => {
      toast(JSON.stringify(data));
    })
    .catch(() => {});
};

export default () => {
  return (
    <div>
      <button onClick={() => popup()}>打开确认弹窗</button>
    </div>
  );
};
```

结束参数

```ts
interface ActionSheetProps {
  list: Array<{
    text: string | ((loading: boolean) => JSX.Element | string);
    /**元素点击事件，可以设置async/callback来进入loading状态 */
    onClick?: (callback: Function) => void;
  }>;
  title?: string;
  /**获取当前控制器，用于关闭 */
  getController?: (callback: () => ShowController) => void;
  /**是否允许loading过程中关闭 */
  allowLoadingCancel?: boolean;
}
```
