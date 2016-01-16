import React from 'react';
import {compose} from 'react-komposer';
import ReactDOM from 'react-dom';

const Time = ({time}) => (<div>Time is: {time}</div>);

const onPropsChange = (props, onData) => {
  const handle = setInterval(() => {
    const time = (new Date()).toString();
    onData(null, {time});
  }, 1000);

  const cleanup = () => clearInterval(handle);
  return cleanup;
};

export const Clock = compose(onPropsChange)(Time);
