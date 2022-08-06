---
title: 高级用法
nav:
  path: /usage
  title: 快速上手
  order: 1
group: 
    title: 使用方式 
---


## ShowController 控制器

`ShowController`是Show方法中最核心的逻辑，继承自`ShowControllerCore`，拓展`ShowControllerCore`实现了`react`框架下的`Popup`组件的命令式调用<br />
`Show`方法的本质是，通过创建一个`ShowController`对象，调用`ShowController`内的append/replace方法，向控制器追加弹窗内容，以此形式来实现弹窗控制。<br />


### 基础调用
```typescript | pure
import { ShowController, CreateRoot  } from "@darkui/popup"
const controller = new ShowController(
  CreateRoot(), 
  { destory: false }
);
controller.append({
  content: <div>Hello,world</div>
});
```
```tsx
import React, { useState } from 'react';
import { ShowController, CreateRoot  } from "@darkui/popup"

export default () => {
  const popup = () => {
    const controller = new ShowController();
    controller.append({
      zIndex: 9999,
      content: <div>Hello,world</div>
    });
  }
  return <div>
    <button onClick={() => popup()}>打开弹窗</button>
  </div>
}
```
`ShowController`共接收两个参数，皆为可选参数，第一个参数为基础弹窗组件，第二个为控制器配置<br />
`CreateRoot`是组件内置react版本的弹窗底层组件，可以通过`CreateRoot`来兼容市面上其他的react 弹窗ui库
第二个参数暂时只有`destory`字段，用于设置控制器是否自动销毁

### CreateRoot
`CreateRoot`作为一个中转站，处理了不同ui 之前变量以及事件名各不相同的弊端，通过传入当前ui的变量名称，内部会进行重新调整，以保证符合`Popup`的运行
以下为`CreateRoot`所接受的参数
```ts | pure
export interface ShowPopupProps {
  format?: (props: any) => any;
  controller?: ShowController;
  onDestory?: () => void;
  component?: ReactElement<any, any>;
  cancelEventName?: string;
  destoryEventName?: string;
  visibilityName?: string;
  other?: any;
}
const Root = CreateRoot(props: ShowPopupProps);
const controller = new ShowController(Root);
```

### 适配vue3版本vant
```ts | pure
import { CreateRoot } from '@maui/popup/es/show/vue';
import { ShowControllerCore } from '@maui/popup/es/show';
// 继承核心控制器,写入vue3框架核心创建于销毁方法
class VueShowController extends ShowControllerCore {
  unmount() {
    this.$other.$app.unmount();
  }
  createRoot() {
    const { createApp, h } = Vue;
    this.$other.$app = createApp(
      h(this.Root, {
        controller: this,
        onDestory: () => {
          if (this.options.destory !== false) {
            this.destory();
          }
        },
      }),
    );
    this.$other.$app.mount(this.$el);
    return this;
  }
}
// 通过CreateRoot以及createShow创建vue3+vant modal的命令方法
function createVueShow() {
  // 需要注意vue3版本与react版本使用不同的CreateRoot
  const Root = CreateRoot({
    visibilityName: 'show',
    cancelEventName: 'onClickOverlay',
    destoryEventName: 'onClosed',
    component: vant.Popup as any,
  });
  return createShow<{
    round?: boolean;
    transition?: string;
    style?: any;
    content: any;
  }>(Root, VueShowController);
}
const Show = createVueShow();
```
当前项目中暂时只有react以及vue3版本，其他版本会在后续中补充
###### 具体实现
<code src="./vue3.tsx" />