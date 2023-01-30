import React, { useState } from 'react';
import { Transition } from '@darkui/react-transition';
import './index.less';

export default () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>切换头像显示</button>
      <br />
      <br />
      <blockquote>transition动画</blockquote>
      <Transition name="demo2">
        {show ? (
          <img
            className="block-head"
            src="https://img0.baidu.com/it/u=1217304799,3113310756&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1675011600&t=93784ef83bb42cdc74d81ea3ffe4eb5d"
          />
        ) : (
          false
        )}
      </Transition>
    </div>
  );
};
