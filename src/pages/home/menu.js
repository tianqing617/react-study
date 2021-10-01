import Hello from '../demo/helloWorld'
import Weather from '../demo/weather'
import TodoList from '../demo/todoList'
import Person from '../demo/person'

const menu = [
  {
    name: "Hello",
    path: "/demo/hello",
    component: Hello,
  },
  {
    name: "Weather",
    path: "/demo/weather",
    component: Weather,
  },
  {
    name: "Person",
    path: "/demo/person",
    component: Person,
  },
  {
    name: "TodoList",
    path: "/demo/todolist",
    component: TodoList,
  }
]

export default menu;