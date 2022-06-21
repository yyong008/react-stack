# 在 Redux Toolkit 中使用 thunk

## 什么是 Thunk ?

- 一个函数
- 能够使用 dispatch 作为 action 方法的函数

## 方法一：在 Toolkit 中的使用

- thunk 不需要手动加载中间件，内置制动加载
- thunk 一般用于获取异步数据

示例:

```js
// 定义处
export const fetchAgeThunk = () => async (dispatch) => {
  const res: any = await getAge();
  dispatch(setAge(res.data.age));
}

dispatch(fetchAgeThunk())
```

## 方法二： 使用 createAsyncThunk

也即是说，提供了一个封装的制作 Thunk 的工具函数。

特点：

- thunk 函数中不在使用 dispatch, 仅仅返回数据
- 数据整合放在了 slice extraReducers 注意能够

```js

```
