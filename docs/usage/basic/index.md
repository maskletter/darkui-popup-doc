---
title: 快速上手
nav:
  path: /usage
  title: 快速上手
  order: 1
group: 
    title: 使用方式 

---


# 快速上手
### 组件形式调用
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
      zIndex={9999}
    >
      <div style={{padding:'20px 30px'}}>
        Hello,world
      </div>
    </Popup>
  </div>

}
```
### 自定义背景元素
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
      zIndex={9999}
      bg={() => <div style={{
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(10px)'
      }}>

      </div>}
    >
      <div style={{padding:'20px 30px'}}>
        Hello,world
      </div>
    </Popup>
  </div>

}
```
当bg为函数时，会接受一个status('enter'|'leave')参数，status为进场或者立场状态
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
      zIndex={9999}
      bg={(status) => <div style={{
        width: '100%',
        height: '100%',
        background: status === 'enter' ? 'rgba(32,64,27,.6)' : 'rgba(23,45,67,.6)',
        opacity: status === 'enter' ? 1 : 0,
        transition: '.4s ease'
      }}>

      </div>}
    >
      <div style={{padding:'20px 30px'}}>
        Hello,world
      </div>
    </Popup>
  </div>

}
```
### 自定义进场离场动画
`Popup`接收一个animation字段用于自定义进场离场动画功能<br />
需注意:如果是队列`queue`模式下，只有最后一个会触发离场动画<br />
`bgDuration`为背景的过滤时间，如果自定义了背景元素，此属性不在生效
```tsx
import React, { useState } from 'react';
// 引入样式文件
import "@darkui/popup/es/style.css";
// 加载组件
import { Popup } from '@darkui/popup';
import '../../index.less';

export default () => {

  const [visibility, setVisibility] = useState(false)

  return <div>

    <button onClick={() => setVisibility(true)}>打开弹窗</button>
    <Popup
      visibility={visibility}
      onCancel={() => setVisibility(false)}
      borderRadius={10}
      zIndex={9999}
      animate={{
        enter: {
          animation: 'test-enter-animation .3s forwards',
          bgDuration: 300,
        },
        leave: {
          animation: 'test-leave-animation .3s forwards',
          bgDuration: 300,
        }
      }}
    >
      <div style={{padding:'20px 30px'}}>
        Hello,world
      </div>
    </Popup>
  </div>

}
```
### 接入animate.css
animate.css地址<a href="https://animate.style/" target="_blank">https://animate.style/</a><br />
`Popup`默认采用的是animation形式动画，animate.css默认是class绑定动画，如果要在`Popup`中使用animate动画，需要传入css库中的动画name
```tsx
import React, { useState } from 'react';
// 引入样式文件
import "@darkui/popup/es/style.css";
// 加载组件
import { Popup } from '@darkui/popup';
import '../../animate.min.css';

export default () => {

  const [visibility, setVisibility] = useState(false)

  return <div>

    <button onClick={() => setVisibility(true)}>打开弹窗</button>
    <Popup
      visibility={visibility}
      onCancel={() => setVisibility(false)}
      borderRadius={10}
      zIndex={9999}
      animate={{
        enter: {
          animation: 'flipInX .6s',
          bgDuration: 600,
        },
        leave: {
          animation: 'flipOutX .6s',
          bgDuration: 600,
        }
      }}
    >
      <div style={{padding:'20px 30px'}}>
        Hello,world
      </div>
    </Popup>
  </div>

}
```

### 接收参数

<table style='width:100%'>
  <tr>
    <td>属性名</td>
    <td>描述</td>
    <td>类型</td>
    <td>是否必须</td>
    <td>默认值</td>
  </tr>
  <tr>
    <td>direction</td>
    <td>弹窗方向</td>
    <td>'center' | 'left' | 'right' | 'top' | 'bottom'</td>
    <td>N</td>
    <td>center</td>
  </tr>
  <tr>
    <td>bg</td>
    <td>弹窗背景</td>
    <td>string | (status:'leave'|'enter') => JSX.Element</td>
    <td>N</td>
    <td>rgba(0,0,0,0.6)</td>
  </tr>
  <tr>
    <td>wrapperBg</td>
    <td>内容块背景色</td>
    <td>string</td>
    <td>N</td>
    <td>white</td>
  </tr>
  <tr>
    <td>borderRadius</td>
    <td>内容块圆角</td>
    <td>string | number</td>
    <td>N</td>
    <td>0</td>
  </tr>
  <tr>
    <td>pointerEvents</td>
    <td>是否点击穿透背景</td>
    <td>boolean</td>
    <td>N</td>
    <td>false</td>
  </tr>
  <tr>
    <td>animate</td>
    <td>内容块进场/离场动画</td>
    <td>animate?: { enter?: Animate; leave?: Animate; }</td>
    <td>N</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>duration</td>
    <td>默认背景过渡动画时间</td>
    <td>number</td>
    <td>N</td>
    <td>300</td>
  </tr>
  <tr>
    <td>zIndex</td>
    <td>弹窗的层级</td>
    <td>number</td>
    <td>N</td>
    <td>99</td>
  </tr>
  <tr>
    <td>visibility</td>
    <td>是否展示弹窗</td>
    <td>boolean</td>
    <td>false</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>disabledBodyScroll</td>
    <td>是否禁止body滚动</td>
    <td>boolean</td>
    <td>false</td>
    <td>Y</td>
  </tr>
  <tr>
    <td>onDestory</td>
    <td>弹窗关闭动画结束事件</td>
    <td>Function</td>
    <td>--</td>
    <td>N</td>
  </tr>
  <tr>
    <td>onCancel</td>
    <td>点击黑色遮罩部分事件</td>
    <td>Function</td>
    <td>--</td>
    <td>N</td>
  </tr>
</table>

# 命令式调用

`Show`方法返回一个promise对象，promise的值为instance

`Show`与常规弹窗不同，当通过此方法打开一个弹窗之后，如果再次调用`Show`方法，默认情况下第一个弹窗会缓存下来<br />当关闭第二个弹窗时候，会从新打开第一个弹窗，这不是一个`Bug`，可以通过传递`replace`为`true`来阻止此特征，或者第二个弹窗关闭时候调用`interface.closeAll()`


### 基础使用
```tsx
/* eslint-disable */
import React from 'react';
import '@darkui/popup/es/style.css';
import { Show } from '@darkui/popup';

export default () => {

  const popup1 = async () => {
    const instance = await Show({
      zIndex: 9999,
      content: () => <h1 style={{color:'#666'}}>测试1-content</h1>,
      onCancel() {
        instance.close();
      },
    });
  };

  return <div>

    <button onClick={() => popup1()}>打开弹窗</button>
  </div>

}
```

### 不同方向打开弹窗
```tsx
/* eslint-disable */
import React from 'react';
import '@darkui/popup/es/style.css';
import { Show } from '@darkui/popup';

export default () => {

  const popup1 = async (direction?: any) => {
    const instance = await Show({
      direction,
      zIndex: 9999,
      content: () => <h1 style={{color:'#666'}}>测试1-content</h1>,
      onCancel() {
        instance.close();
      },
    });
  };

  return <div>
    <button onClick={() => popup1()}>中心位置打开弹窗</button>
    <button onClick={() => popup1('top')}>顶部位置打开弹窗</button>
    <button onClick={() => popup1('bottom')}>底部位置打开弹窗</button>
    <button onClick={() => popup1('left')}>左边位置打开弹窗</button>
    <button onClick={() => popup1('right')}>右边位置打开弹窗</button>
  </div>

}
```

### 自定义关闭弹窗行为
`Show`方式如果需要自定义关闭弹窗行为，可通过onCancel事件<br />
onCancel接收instance参数，与Show返回的instance一致
```tsx
import React from 'react';
import '@darkui/popup/es/style.css';
import { Show } from '@darkui/popup';

export default () => {

  const popup1 = async () => {
    Show({
      zIndex: 9999,
      content: () => <h1 style={{color:'#666'}}>测试1-content</h1>,
      onCancel(instance) {
        alert('自定义弹窗,1秒后关闭');
        setTimeout(() => {
          instance.close();
        }, 1000)
      },
    });
  };

  return <div>
    <button onClick={() => popup1()}>打开弹窗</button>
  </div>

}
```
### instance
通过Show会返回一个instance对象，此对象为当前弹窗内容的实例，可以用来控制关闭当前弹窗
`Show`方式如果需要自定义关闭弹窗行为，可通过onCancel事件<br />
onCancel接收instance参数，与Show返回的instance一致
```tsx
import React from 'react';
import '@darkui/popup/es/style.css';
import { Show } from '@darkui/popup';
let finish = false;
function createPopup(text: string, idx: number) {
  return Show({
    zIndex: 9999,
    content: <h1>{text}</h1>,
    onCancel(instance) {
      if (finish && idx === 0 || idx === 2) {
        instance.close();
      }
    }
  });
}
const instanceList = [];
export default () => {

  const popup1 = async () => {
    instanceList.push(await createPopup('第一个弹窗', 0));
    setTimeout(async () => {
      instanceList.push(await createPopup('第二个弹窗', 1));
    }, 1000)
    setTimeout(async () => {
      instanceList[1].close();
      // 此时弹窗3关闭时候，会返回到第一个弹窗
      instanceList.push(await createPopup('第三个弹窗,通过命令关闭了第二个弹窗', 2));
      finish = true;
    }, 2000)
  };

  return <div>
    <button onClick={() => popup1()}>打开弹窗</button>
  </div>

}
```
关于instance的属性如下
```ts
export interface AlterInstance {
  /** 当前弹窗的key */
  key: string;
  /** 关闭当前弹窗 */
  close: () => void;
  /** 关闭某一个弹窗 */
  closeTo: (instance: AlterInstance) => void;
  /** 关闭所有弹窗 */
  closeAll: () => void;
  /** 当前弹窗的属性 */
  props: any;
  /**
   * 当前弹窗控制器
   */
  controller: ShowController;
}
```
### 多弹窗形式调用
`Show`接收第二个参数为当前弹窗的队列控制器
```ts
interface Options {
  controller?: ShowController;
  keep?: boolean;
}
```
默认情况下，所有的Show都还在同一个controller中运行，当已经打开一个弹窗，需要在从新打开一个新弹窗，但是又不关闭当前弹窗时候，可以通过传入一个新的controller形式调用
```tsx
import React from 'react';
import '@darkui/popup/es/style.css';
import { Show, ShowController } from '@darkui/popup';

export default () => {

  const popup1 = async () => {
    Show({
      zIndex: 9999,
      content: () => <div>
        <h1 style={{color:'#666'}}>测试1-content</h1>
        <button onClick={() => {
          const controller = new ShowController();
          Show({
            zIndex: 9999 + 1,
            content: () => <div>内容内容内容内容内容</div>
          }, { controller } )
        }}>创建一个新的弹窗</button>
      </div>,
    });
  };

  return <div>
    <button onClick={() => popup1()}>打开弹窗</button>
  </div>

}

```

`Options.keep`表示是否后续的弹窗都运行在传日的控制器当中

##### 接收参数

Show基本参数与Popup保持一致,但是不包含onConfirm/visibility，以下为`Show`形式下新增字段
<table style='width:100%'>
  <tr>
    <td>属性名</td>
    <td>描述</td>
    <td>类型</td>
    <td>是否必须</td>
    <td>默认值</td>
  </tr>
  <tr>
    <td>replace</td>
    <td>替换当前弹窗</td>
    <td>boolean</td>
    <td>N</td>
    <td>false</td>
  </tr>
  <tr>
    <td>multiMode</td>
    <td>创建新的弹窗遮罩覆盖当前弹窗</td>
    <td>boolean</td>
    <td>N</td>
    <td>false</td>
  </tr>
  <tr>
    <td>content</td>
    <td>需要显示的内容</td>
    <td>JSX.Element</td>
    <td>Y</td>
    <td>--</td>
  </tr>
</table>

# Queue 队列 
队列形式，是基于`Show`的二次封装，通过传入多个参数形式，管理展示弹窗<br /><br />
适用于复杂弹窗队列显示，每个弹窗都可以获取到前面所有抛出的内容信息
### 队列基础使用
```tsx
import React from 'react';
import { getQueueInfo, Queue } from '@darkui/popup';

export default () => {
  const popup1 = () => {
    Queue([
      {
        options: {
          zIndex: 9999,
          onCancel() {
            const instance = getQueueInfo();
            instance.$close('第一个弹窗发出的参数');
          },
        },
        render: () => {
          const instance = getQueueInfo();
          return (
            <div>
              <h1>aaaa</h1>
              <button
                onClick={() => {
                  instance.$jump(2, 222);
                }}
              >
                跳到ccc
              </button>
              <button
                onClick={() => {
                  alert('已添加，点击空白处，跳到下一个弹窗');
                  instance.$replace(() => <div>替换的弹窗</div>, 1);
                }}
              >
                替换二为新的弹窗
              </button>
              <button
                onClick={() => {
                  alert('已添加，点击空白处，跳到下一个弹窗');
                  instance.$append(() => <div>新的弹窗</div>, 1);
                }}
              >
                插入一个新的弹窗
              </button>
            </div>
          );
        },
      },
      () => {
        const instance = getQueueInfo();
        return (
          <div>
            <h1>bbbb</h1>
            <button
              onClick={() => {
                instance.$close();
              }}
            >
              手动调到下一个
            </button>
            <br />
            <button
              onClick={() => {
                instance.$closeAll();
              }}
            >
              关闭全部
            </button>
          </div>
        );
      },
      () => {
        const instance = getQueueInfo();
        console.log(instance);
        return <h1>cccc</h1>;
      },
      () => <h1>dddd</h1>,
    ]).then((result) => {
      console.log(result);
      setTimeout(() => {
        alert('关闭了所有');
      }, 500)
    });
  }
  return <div>
    <button onClick={() => popup1()}>打开弹窗</button>
  </div>
}
```

`Queue`接收一个队列,并返回一个promise对象
接收一个`options`参数，该参数与`Show`当中保持一致,同时新增了`render`和`props`参数,`props`为传递`render`的内容
```ts
type RenderFn = (props: any) => JSX.Element;
interface QueueItem {
  /** Popup.show的所选参数 */
  options?: Omit<PopupAlterInterface, 'content'>;
  props?: Record<string, any>;
  /**
   * 渲染函数
   */
  render: RenderFn;
}
```
### useQueueInfo

在使用`Queue`时候，`Queue`对外抛出了一个`useQueueInfo`的钩子，通过`useQueueInfo`可以获取到当前弹窗的实例，以及上一个弹窗所返回的内容，同时可以指定传给下一个弹窗的内容<br /><br />
`useQueueInfo`并非完全意义上的react hook，它也可以被用在options的onCancel中<br>
考虑到eslint问题，会导致`useQueueInfo`在普通fun报错，因此拓展了`getQueueInfo`函数以便使用

钩子所返回的内容如下
```ts
const useQueueInfo: () => {
  /** 当前弹窗的实例对象 */
  // instance: AlterInstance;
  /** key */
  $key: string;
  /** 上一个弹窗发出的信息 */
  message?: any[];
  /** 上一个弹窗的实例 */
  // prevInstance: AlterInstance;
  /** 向下一个弹窗传递参数 */
  $close: (data?: any) => void;
  $controller: ShowController;

  $append: (data, index) => void;
  /** 关闭当前弹窗 */
  $close: () => void;
  /** 关闭所有的弹窗 */
  $closeAll: () => void;
  $getCurrentQueue: () => any;
  /** 跳转到指定弹窗，message为下一个弹窗接收的消息 */
  $jump: (index, message) => void;
  /** 删除指定弹窗 */
  $remove: (index) => void;
  /** 替换指定弹窗，data为弹窗信息 */
  $replace: (index, data) => void;
  /** 停止弹窗队列，result为.catch接收的异常消息 */
  $stop: (result) => void;
  /** 虽有队列弹窗所抛出的信息 */
  message: any[];
  props: {options: any, render: () => JSX.Element}
}
```

### 自定义关闭处理
在队列中想要控制用户点击黑色背景部分逻辑时候可以通过添加`options.onCancel`方法来实现
```tsx | pure
import { getQueueInfo, useQueueInfo, Queue } from '@darkui/popup';
const testDemo = Queue([
  {
    options: {
      onCancel() {
        const result = getQueueInfo();
        result.$close({
          // 传参数
          type: 'cancel',
          other: { xxx: 'xxx' }
        })
      }
    },
    render: () => <div></div>
  },
  () => {
    const info = useQueueInfo();
    return <div>{JSON.stringify(info.message)}</div>
  }
])
```
