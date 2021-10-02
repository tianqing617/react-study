import Hello from '../demo/helloWorld'
import Weather from '../demo/weather'
import TodoList from '../demo/todoList'
import Person from '../demo/person'
import AlertNum from '../demo/alertNum'
import ChangeCar from '../demo/changeCar'

const menu = [
  {
    name: "Hello",
    path: "/demo/hello",
    component: Hello,
  },
  {
    name: "Weather(state)",
    path: "/demo/weather",
    component: Weather,
  },
  {
    name: "Person(props)",
    path: "/demo/person",
    component: Person,
  },
  {
    name: "AlertNum(refs)",
    path: "/demo/alert-num",
    component: AlertNum,
  },
  {
    name: "ChangeCar(lifecycle)",
    path: "/demo/change-car",
    component: ChangeCar,
  },
  {
    name: "TodoList",
    path: "/demo/todolist",
    component: TodoList,
  }
]

export default menu;