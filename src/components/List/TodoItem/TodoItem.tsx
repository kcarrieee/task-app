import React from 'react'
import { Todo } from '../../../types/types'
import styles from './TodoItem.module.scss'
interface TodoItem{
    todo: Todo;
}
const TodoItem: React.FC<TodoItem> = ({todo}) => {
  return (
    <div className={styles.todo}>
      <p className={styles.name}>{todo.name}</p>
      <p className={styles.status}>{todo.status}</p>
    </div>
  )
}

export default TodoItem