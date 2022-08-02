import React from 'react'
import { Todo } from '../../../types/types'
import styles from './TodoItem.module.scss'
interface TodoItem{
    todo: Todo
    selectTodoById: (id: number) => void
}
const TodoItem: React.FC<TodoItem> = ({todo, selectTodoById}) => {
  return (
    <div className={styles.todo} onClick={() => selectTodoById(todo.id)}>
      <p className={styles.name}>{todo.name}</p>
      <p className={`${styles.status} ${todo.status === 'new' ? null : styles.status__progress } ${todo.status === 'done' ? styles.status__done : null} `} >{todo.status}</p>
    </div>
  )
}

export default TodoItem