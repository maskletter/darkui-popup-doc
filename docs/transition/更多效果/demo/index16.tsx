import React, { useState, useRef, useEffect } from 'react';
import { Transition, TransitionGroup } from '@darkui/react-transition';

const getRandom = () => parseInt((Math.random() * 100000) as any);

export default () => {
  const [list, setList] = useState([1]);
  const currentListLength = useRef(list.length);

  const getTime = (idx) => {
    if (idx > currentListLength.current) {
      return 140 * (idx - currentListLength.current);
    } else {
      return 0;
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          const _newList = [...list];
          currentListLength.current = list.length;
          _newList.push(getRandom() + getRandom());
          setList(_newList);
        }}
      >
        追加
      </button>
      <button
        onClick={() => {
          const _newList = [...list];
          currentListLength.current = list.length;
          _newList.push(getRandom() + getRandom());
          _newList.push(getRandom() + getRandom());
          _newList.push(getRandom() + getRandom());
          setList(_newList);
        }}
      >
        追加多个
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
      <TransitionGroup name="demo3">
        {list.map((item, idx) => (
          <Transition.Children
            key={item}
            activeStyle={(status) => {
              return status === 'enter'
                ? { transitionDelay: `${getTime(idx)}ms` }
                : {};
            }}
          >
            {(status, active) => (
              <TransitionGroup.Css
                status={status}
                active={active}
                activeStyle={{ height: 70 }}
                initStyle={{ height: status === 'leave' ? 0 : 70 }}
                transition={() => (status === 'leave' ? '400ms all .3s' : '0s')}
              >
                <div className="block-list">
                  <img src="https://img2.baidu.com/it/u=2789496661,310235298&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1675011600&t=0df2d65ba27572cdb3716541145a6c4e" />
                  {getTime(idx)}
                </div>
              </TransitionGroup.Css>
            )}
          </Transition.Children>
        ))}
      </TransitionGroup>
    </div>
  );
};
