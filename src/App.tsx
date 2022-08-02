import { useState } from "react";
import AddForm from "./components/AddForm/AddForm";
import Container from "./components/Container/Container";
import EditTodo from "./components/EditTodo/EditTodo";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import { Todo } from './types/types'


const Todo_list =[
  {
    id: 1,
    name: 'Add tasks like “Read work emails every day at 10am” to fill your to-do list in seconds using powerful natural language recognition and recurring dates.',
    status: 'new'
  },
  {
    id: 2,
    name: 'Remind you about self-imposed deadlines. Notifications, widgets, emails—the best applications make it obvious when something needs to be completed.',
    status: 'in progress'
   
  },
  {
    id: 3,
    name: 'Balancing power and simplicity',
    status: 'done'
   
  }
]

function App() {
  const [todos, setTodos] = useState(Todo_list)
  const [editElement, setEditElement] = useState<Todo['id'] | null>(null)
  const [searchText, setSearchText] = useState('');


  const addTodo = ({ name }: Omit<Todo, 'status' | 'id' >) => {
      setTodos([ { id: todos[todos.length -1].id + 1, name, status: 'new'}, ...todos])
  }
  const delTodo = (id: number) =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const selectTodoById = (id: number) => {
    setEditElement(id)
  }
  const updateTodo = (editElement: number, newItem: Todo) => {
      setTodos(todos.map(item => item.id === editElement ? {...item, ...newItem } : item ))
  }
 

  return (
    <div className="App">
     <Header todoNum={todos.length} handleSearch={setSearchText}/>
     <main className="main">
     <div className="main__div">
     <AddForm addTodo={addTodo}/>
     <Container> 
        <List todos={todos.filter((todo)=>todo.name.toLowerCase().includes(searchText))} selectTodoById={selectTodoById}/>
      </Container>
      </div>
      <div className="main__div" >
        <EditTodo todos={todos} editElement={editElement} delTodo={delTodo} updateTodo={updateTodo}/>
      </div>
      </main>
    </div>
  );
}

export default App;
