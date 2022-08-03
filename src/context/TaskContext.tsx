import React, { createContext, useState } from 'react'
import { Todo } from '../types/types'

// Types for global state. Context is used to avoid prop drilling in react components. 
interface AppContextInterface {
    todos: Todo[]
    editElement: number | null
    addTodo: ({ name }: Omit<Todo, 'id' | 'status'>) => void
    delTodo: (id: number) => void
    selectTodoById: (id: number) => void
    updateTodo: (editElement: number, newItem: Todo) => void
    setSearchText: (val : string) => void
    searchText: string
}

// Interface for children prop, in order to render reusable components 
interface IProvider{
   children: React.ReactNode
}

// Create task context with createContext hook and assign AppContextInterface to it
const TaskContext = createContext({} as AppContextInterface)

// Mock DataBase
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

export const TaskProvider = ({children}:IProvider) => {
    const [todos, setTodos] = useState(Todo_list)     // State for storing and updating tasks
    const [editElement, setEditElement] = useState<Todo['id'] | null>(null) // State for defining the id of an element
    const [searchText, setSearchText] = useState('') // State to store search text value

    // Function to add new task. User input is only name of the task, 
    // by the default status is set to 'new' and id is computed based on last item in the array + 1
    
    const addTodo = ({ name }: Omit<Todo, 'status' | 'id' >) => {
        setTodos([ { id: todos[todos.length -1].id + 1, name, status: 'new'}, ...todos])
    }

    // Function to delete a task. In order to delete a task, a function requres an id of the todo item
    // State in react is immutable, so we need to use setter function to update the state - setTodos()
    // Filter array method is being used to filter out array of todos, for which a callback function returned True

    const delTodo = (id: number) =>{
      setTodos(todos.filter(todo => todo.id !== id))
    }
      
    // Function to define an id of selected todo.
    const selectTodoById = (id: number) => {
      setEditElement(id)
    }

    // Function to update a task. In order to update a task, a function requres an id(selected todo) and new updated item( object )
    // Setter function to update the state - setTodos()
    // Map array method is being used to map through items in array and compare current todo it to id(selected todo),
    // if this equation returns true - iten spread out prev item and new item, otherwise return item.
    const updateTodo = (editElement: number, newItem: Todo) => {
        setTodos(todos.map(item => item.id === editElement ? {...item, ...newItem } : item ))
    }
    // Creating provider and passing values in value={{}} prop
    return (
        <TaskContext.Provider value={{ 
          todos,
          editElement, 
          setSearchText,
          addTodo,
          delTodo,
          selectTodoById,
          updateTodo,
          searchText
         }}> {children} </TaskContext.Provider>
    )

}

export default TaskContext 