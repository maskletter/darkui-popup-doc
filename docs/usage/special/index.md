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

## toast

```tsx
import React from 'react';
import { ShowController } from '@darkui/popup';

let controller = null;
let clearToastTimeout = null;
function toast(msg) {
  if (!controller) {
    controller = new ShowController(undefined, { destory: false });
  }
  controller.append({
    bg: 'transparent',
    wrapperBg: 'rgba(0,0,0,0.8)',
    pointerEvents: true,
    borderRadius: '10px',
    replace: true,
    zIndex: 9999,
    content: () => (
      <div style={{ color: 'white', padding: '10px 20px' }}>{msg}</div>
    ),
  });
  clearTimeout(clearToastTimeout);
  clearToastTimeout = setTimeout(() => {
    controller.closeAll();
  }, 3000);
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

## Dialog

```tsx
import React from 'react';
import { ShowController } from '@darkui/popup';

let controller = null;
function Dialog() {
  if (!controller) {
    controller = new ShowController(undefined, { destory: false });
  }
  let resolve = null;
  let reject = null;
  controller.append({
    borderRadius: '10px',
    replace: true,
    zIndex: 9999,
    onCancel: close,
    content: () => (
      <div style={{ width: 300, padding: '10px 20px' }}>
        <div style={{ textAlign: 'center', lineHeight: '60px' }}>
          确认要关闭弹窗吗
        </div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={close}>取消</button>
          <button onClick={confirm}>确定</button>
        </div>
      </div>
    ),
  });
  return new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  function close() {
    reject();
    controller.closeAll();
  }
  function confirm() {
    resolve();
    controller.closeAll();
  }
}

export default () => {
  const popup = () => {
    Dialog()
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

## actionsheet

```tsx
import React from 'react';
import { ShowController } from '@darkui/popup';

let controller = null;
function Actionsheet() {
  if (!controller) {
    controller = new ShowController(undefined, { destory: false });
  }
  let resolve = null;
  let reject = null;
  controller.append({
    borderRadius: '10px 10px 0px 0px',
    replace: true,
    zIndex: 9999,
    direction: 'bottom',
    onCancel: close,
    content: () => (
      <div style={{ padding: '10px 20px' }}>
        <div
          style={{
            textAlign: 'center',
            lineHeight: '60px',
            fontWeight: 'bold',
          }}
        >
          确认要关闭弹窗吗
        </div>
        <div style={{ textAlign: 'center' }}>
          <div onClick={() => confirm('内容1')} style={{ lineHeight: '36px' }}>
            内容1
          </div>
          <div onClick={() => confirm('内容2')} style={{ lineHeight: '36px' }}>
            内容2
          </div>
          <div onClick={() => confirm('内容3')} style={{ lineHeight: '36px' }}>
            内容3
          </div>
          <div onClick={() => confirm('内容4')} style={{ lineHeight: '36px' }}>
            内容4
          </div>
          <div
            onClick={close}
            style={{ lineHeight: '36px', borderTop: '5px solid #f5f5f5' }}
          >
            取消
          </div>
        </div>
      </div>
    ),
  });
  return new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  function close() {
    reject();
    controller.closeAll();
  }
  function confirm(data) {
    resolve(data);
    controller.closeAll();
  }
}

const popup = () => {
  Actionsheet()
    .then((data) => {
      alert('点击了' + data);
    })
    .catch(() => {
      alert('点击了取消');
    });
};

export default () => {
  return (
    <div>
      <button onClick={() => popup()}>打开确认弹窗</button>
    </div>
  );
};
```
