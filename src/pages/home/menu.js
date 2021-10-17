import Hello from '../demo/helloWorld'
import Weather from '../demo/weather'
import TodoList from '../demo/todoList'
import Person from '../demo/person'
import AlertNum from '../demo/alertNum'
import ChangeCar from '../demo/changeCar'
import Form from '../demo/form'
import News from '../demo/news'
import Counter from '../demo/counter'
import Counter2 from '../demo/counter2'
import CounterPerson from '../demo/counterPerson'

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
    name: "Form",
    path: "/demo/form",
    component: Form,
  },
  {
    id: 7,
    name: "News(getSnapshotBeforeUpdate)",
    path: "/demo/news",
    component: News,
  },
  {
    id: 8,
    name: "TodoList",
    path: "/demo/todolist",
    component: TodoList,
  },
  {
    id: 9,
    name: "Counter(redux)",
    path: "/demo/counter/redux",
    component: Counter,
  },
  {
    id: 10,
    name: "Counter2(react-redux basic)",
    path: "/demo/counter2/react-redux/basic",
    component: Counter2,
  },
  {
    id: 11,
    name: "CounterPerson(react-redux profession)",
    path: "/demo/counter/person/react-redux/",
    component: CounterPerson,
  },
]

export default menu;