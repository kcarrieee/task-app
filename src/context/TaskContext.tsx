import React, { createContext, useState } from 'react'
import { Todo } from '../types/types'


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

interface IProvider{
   children: React.ReactNode
}

const TaskContext = createContext({} as AppContextInterface)


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