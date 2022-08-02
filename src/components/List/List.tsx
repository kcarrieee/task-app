import styles from './List.module.scss'
import { Todo } from '../../types/types'
import TodoItem from './TodoItem/TodoItem'

interface TodoList {
    todos: Todo[]
    selectTodoById: (id: number) => void
}

const List: React.FC<TodoList> = ({ todos,selectTodoById }) => {
  return (
    <div className={ styles.list }>
      {todos.map(el => {
        return <TodoItem todo={el} key={el.id} selectTodoById={selectTodoById}/>
      })}
    </div>
  )
}

export default List