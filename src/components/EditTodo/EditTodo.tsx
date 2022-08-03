import EditPanel from './EditPanel/EditPanel'
import styles from './EditTodo.module.scss'
import { useContext } from 'react'
import TaskContext from '../../context/TaskContext'


const EditTodo = () => {
  const { todos, editElement, delTodo, updateTodo } = useContext(TaskContext)

  return (
     <div className={styles.block}>
        {todos.map(todo => {
            if (todo.id === editElement ){
                return (
                    <EditPanel {...todo} key={todo.id}  delTodo={delTodo} updateTodo={updateTodo}/>
                ) 
            } 
            return null
        }
      )}
    </div>
  )
}

export default EditTodo