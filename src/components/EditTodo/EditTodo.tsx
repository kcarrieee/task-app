
import { Todo } from '../../types/types'
import EditPanel from './EditPanel/EditPanel'


interface EditTodo {
    todos: Todo[]
    editElement: number | null
    delTodo:(id: number) => void
    updateTodo: (editElement: number, newItem: Todo) => void
}

const EditTodo: React.FC<EditTodo> = ({todos, editElement, delTodo, updateTodo }) => {

  return (
     <div>
        {todos.map(todo => {
            if (todo.id === editElement ){
                return (
                    <EditPanel {...todo}  delTodo={delTodo} updateTodo={updateTodo}/>
                ) 
            } 
            return null
        }
      
      )}
    </div>
  )
}

export default EditTodo