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
      <blockquote>获取进场离场状态</blockquote>
      <TransitionGroup name="demo2">
        {list.map((item) => (
          <Transition.Children key={item}>
            {(status, active) => (
              <div className="block-list">
                {item},_____{status},_____{String(active)}
              </div>
            )}
          </Transition.Children>
        ))}
      </TransitionGroup>
    </div>
  );
};
