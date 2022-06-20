# React 技术栈

## 技术栈

- React/ReactDOM (v18)
- react-router-dom (v6)
- `redux`/`react-redux`/`@reduxj/toollit`
- express
- vite/vitest
- typescript


## 工作空间

## packages: express-server

- express-server 提供 express 接口服务

## packages: router-v6

- 使用 react-router-dom 管理 react-router
- 一个简单的 暗黑模式

### packages: toolkit-simple

- 从 redux 迁移到 toolkit, 这是一个简单版本
- 基于 hooks，没有 connect
- 以 slice 为核心创建 reducer/action，默认使用 immer 来修改数据
- 完整的 TS 类型，方便使用
