# 演示`react-composer`的使用


## 运行

```sh
npm install
meteor
```


## 说明


在Meteor里面使用React时，将Component分为UIComponent(Dumb Component)和Container Component(Smart Component)有助于提高代码可重用性。由Container Component来做数据的获取工作，而由UI Component来做具体的渲染工作。

`react-composer`则将这个工作简单化，我们仅需要提供UI Component来确定最终的显示形式，再通过一个函数说明数据获取和资源清理的方法。而composer则自动帮我们拼装出最终的Container Component。

同时，`react-composer`也帮我们完成了如下几项工作:

* 获取数据
* 获取数据中显示Loading信息
* 获取数据完传递给UI Component
* 如果有错误则显示
* 当props变化时重新获取数据
* 数据清理

举例如下

### 创建UI Component
我们首先创建一个最终用于显示的UI Component (实际上是Stateless Functional Component)来显示时间。
```js
const Time = ({time}) => (<div>Time is: {time}</div>);
```

### 然后我们需要定义如何获取数据和清理数据

```js
const onPropsChange = (props, onData) => {
  const handle = setInterval(() => {
    const time = (new Date()).toString();
    onData(null, {time});
  }, 1000);

  const cleanup = () => clearInterval(handle);
  return cleanup;
};
```

在这里`onData`对应着composer函数里面的

```js
(error, payload) => {
  if (error) {
    invariant(
      error.message && error.stack,
      'Passed error should be an instance of an Error.'
    );
  }

  const state = {
    _fnData: {error, payload}
  };

  if (this._mounted) {
    this.setState(state);
  } else {
    this.state = state;
  }
}
```

### 组合Container

最后通过compose来组建container

```js
Clock = compose(onPropsChange)(Time);
```
