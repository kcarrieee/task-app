import { useState } from "react";
import AddForm from "./components/AddForm/AddForm";
import Container from "./components/Container/Container";
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
   
  }
]

function App() {
  const [todos, setTodos] = useState(Todo_list)

  const addTodo = ({ name }: Omit<Todo, 'status' | 'id' >) => {
      setTodos([ { id: todos[todos.length -1].id + 1, name, status: 'new'}, ...todos])
  }
  return (
    <div className="App">
     <Header todoNum={todos.length}/>
     <AddForm addTodo={addTodo}/>
     <Container> 
        <List todos={todos}/>
      </Container>
    </div>
  );
}

export default App;
