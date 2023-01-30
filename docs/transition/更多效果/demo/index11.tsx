import React, { useState } from 'react';
import { Transition } from '@darkui/react-transition';
import './index.less';

export default () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>切换头像显示</button>
      <br />
      <br />
      <blockquote>appear+absolute</blockquote>
      <Transition
        appear
        absolute
        absoluteStyle={{
          height: 100,
        }}
        name="demo2"
      >
        {show ? (
          <img
            key={'i1'}
            className="block-head animate__animated"
            src="https://img0.baidu.com/it/u=1217304799,3113310756&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1675011600&t=93784ef83bb42cdc74d81ea3ffe4eb5d"
          />
        ) : (
          <img
            key="i2"
            className="block-head animate__animated"
            src="https://img2.baidu.com/it/u=2789496661,310235298&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1675011600&t=0df2d65ba27572cdb3716541145a6c4e"
          />
        )}
      </Transition>
    </div>
  );
};
