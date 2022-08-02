import styles from './List.module.scss'
import { Todo } from '../../types/types'
import TodoItem from './TodoItem/TodoItem'

interface TodoList {
    todos: Todo[]
}

const List: React.FC<TodoList> = ({ todos }) => {
  return (
    <div className={ styles.list }>
      {todos.map(el => {
        return <TodoItem todo={el} key={el.id}/>
      })}
    </div>
  )
}

export default List