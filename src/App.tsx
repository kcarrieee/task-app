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
    name: 'Test task',
    status: 'new'
  },
  {
    id: 2,
    name: 'Make bed before you go to school hi whats going on',
    status: 'new'
   
  },
  {
    id: 3,
    name: 'Make dinner before you go to school hi whats going on',
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
     <div>
     <AddForm addTodo={addTodo}/>
     <Container> 
        <List todos={todos.filter((todo)=>todo.name.toLowerCase().includes(searchText))} selectTodoById={selectTodoById}/>
      </Container>
      </div>
      <div>
        <EditTodo todos={todos} editElement={editElement} delTodo={delTodo} updateTodo={updateTodo}/></div>
      </main>
    </div>
  );
}

export default App;
