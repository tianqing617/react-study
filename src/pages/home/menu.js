import Hello from '../demo/helloWorld'
import Weather from '../demo/weather'
import TodoList from '../demo/todoList'
import Person from '../demo/person'
import AlertNum from '../demo/alertNum'
import ChangeCar from '../demo/changeCar'

const menu = [
  {
    id: 1,
    name: "Hello",
    path: "/demo/hello",
    component: Hello,
  },
  {
    id: 2,
    name: "Weather(state)",
    path: "/demo/weather",
    component: Weather,
  },
  {
    id: 3,
    name: "Person(props)",
    path: "/demo/person",
    component: Person,
  },
  {
    id: 4,
    name: "AlertNum(refs)",
    path: "/demo/alert-num",
    component: AlertNum,
  },
  {
    id: 5,
    name: "ChangeCar(lifecycle)",
    path: "/demo/change-car",
    component: ChangeCar,
  },
  {
    id: 6,
    name: "TodoList",
    path: "/demo/todolist",
    component: TodoList,
  }
]

export default menu;