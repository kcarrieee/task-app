import EditPanel from './EditPanel/EditPanel'
import styles from './EditTodo.module.scss'
import { useContext } from 'react'
import TaskContext from '../../context/TaskContext'


const EditTodo = () => {
  const { todos, editElement, delTodo, updateTodo } = useContext(TaskContext)
  //Getting state from context


  // if no task is selected, display text
  if(!editElement){
    return (
        <div className={styles.block}>
          <h3>Click on task from the List to update Status or Text! Or create your own!</h3>
        </div>
    )
  }

  // Maping over todos array
  // if current todo id is equal to selected id( editElement ), then this Task is displayed.
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