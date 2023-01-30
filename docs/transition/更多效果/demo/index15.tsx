import React, { useState } from 'react';
import { Transition, TransitionGroup } from '@darkui/react-transition';

const getRandom = () => parseInt((Math.random() * 100000) as any);

export default () => {
  const [list, setList] = useState([1, 2, 3]);
  return (
    <div>
      <button
        onClick={() => {
          const _newList = [...list];
          _newList.splice(1, 0, getRandom() + getRandom());
          _newList.splice(4, 0, getRandom() + getRandom());
          console.log('addd', _newList);
          setList(_newList);
        }}
      >
        追加
      </button>
      <button
        onClick={() => {
          const _newList = [...list];
          _newList.splice(1, 1);
          _newList.splice(4, 1);
          console.log('remove', _newList);
          setList(_newList);
        }}
      >
        删减
      </button>
      <br />
      <br />
      <blockquote>可控的Css进场离场动画</blockquote>
      <TransitionGroup name="demo2">
        {list.map((item) => (
          <Transition.Children key={item}>
            {(status, active) => (
              <TransitionGroup.Css
                status={status}
                active={active}
                activeStyle={{ height: 70 }}
                initStyle={{ height: 0 }}
                transition={() =>
                  status === 'leave' ? '400ms all .3s' : '400ms'
                }
              >
                <div className="block-list">
                  <img src="https://img2.baidu.com/it/u=2789496661,310235298&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1675011600&t=0df2d65ba27572cdb3716541145a6c4e" />
                  {item}
                </div>
              </TransitionGroup.Css>
            )}
          </Transition.Children>
        ))}
      </TransitionGroup>
    </div>
  );
};
