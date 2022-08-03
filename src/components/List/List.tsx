import styles from './List.module.scss'
import TodoItem from './TodoItem/TodoItem'
import { useContext } from 'react'
import TaskContext from '../../context/TaskContext'



const List= () => {

  const { todos, selectTodoById, searchText} = useContext(TaskContext)

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