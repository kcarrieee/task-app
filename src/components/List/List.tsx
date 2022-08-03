import styles from './List.module.scss'
import TodoItem from './TodoItem/TodoItem'
import { useContext } from 'react'
import TaskContext from '../../context/TaskContext'



const List= () => {

  const { todos, selectTodoById, searchText} = useContext(TaskContext)  //Getting state from context
  
  // filter list of todos with Filter array method
  // if todo text contains search text, then put this element to array (return true)
  // Mapping over array and displaying items, if search text if empty, display all.
  return (
    <div className={ styles.list }>
      {todos
        .filter((todo)=>todo.name.toLowerCase().includes(searchText))
        .map(el => {
            return <TodoItem 
                        todo={el} 
                        key={el.id} 
                        selectTodoById={selectTodoById}/>
         })}
    </div>
  )
}

export default List