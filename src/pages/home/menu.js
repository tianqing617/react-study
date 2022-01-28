import { lazy } from 'react'

const menu = [
  {
    id: 1,
    name: "Hello",
    path: "/demo/hello",
    component: lazy(() => import('../demo/helloWorld')),
  },
  {
    id: 2,
    name: "Weather(state)",
    path: "/demo/weather",
    component: lazy(() => import('../demo/weather')),
  },
  {
    id: 3,
    name: "Person(props)",
    path: "/demo/person",
    component: lazy(() => import('../demo/person')),
  },
  {
    id: 4,
    name: "AlertNum(refs)",
    path: "/demo/alert-num",
    component: lazy(() => import('../demo/alertNum')),
  },
  {
    id: 5,
    name: "ChangeCar(lifecycle)",
    path: "/demo/change-car",
    component: lazy(() => import('../demo/changeCar')),
  },
  {
    id: 6,
    name: "Form",
    path: "/demo/form",
    component: lazy(() => import('../demo/form')),
  },
  {
    id: 7,
    name: "News(getSnapshotBeforeUpdate)",
    path: "/demo/news",
    component: lazy(() => import('../demo/news')),
  },
  {
    id: 8,
    name: "TodoList",
    path: "/demo/todolist",
    component: lazy(() => import('../demo/todoList')),
  },
  {
    id: 9,
    name: "Counter(redux)",
    path: "/demo/counter/redux",
    component: lazy(() => import('../demo/counter')),
  },
  {
    id: 10,
    name: "Counter2(react-redux basic)",
    path: "/demo/counter2/react-redux/basic",
    component: lazy(() => import('../demo/counter2')),
  },
  {
    id: 11,
    name: "CounterPerson(react-redux profession)",
    path: "/demo/counter/person/react-redux/",
    component: lazy(() => import('../demo/counterPerson')),
  },
  {
    id: 12,
    name: "Loading",
    path: "/demo/loading",
    component: lazy(() => import('../demo/loadingShow')),
  },
  {
    id: 13,
    name: "Function",
    path: "/demo/function",
    component: lazy(() => import('../demo/func')),
  },
  {
    id: 14,
    name: "RenderProps(slots)",
    path: "/demo/renderProps",
    component: lazy(() => import('../demo/renderProps')),
  },
  {
    id: 15,
    name: "Chat",
    path: "/demo/chat",
    component: lazy(() => import('../demo/chat')),
  },
]

export default menu;