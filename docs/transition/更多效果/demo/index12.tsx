import React, { useState } from 'react';
import { TransitionGroup } from '@darkui/react-transition';

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
      <blockquote>基础transition-group动画</blockquote>
      <TransitionGroup name="demo2">
        {list.map((item) => (
          <div key={item} className="block-list">
            <img src="https://img2.baidu.com/it/u=2789496661,310235298&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1675011600&t=0df2d65ba27572cdb3716541145a6c4e" />
            {item}
          </div>
        ))}
      </TransitionGroup>
    </div>
  );
};
