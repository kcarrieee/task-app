import React, { useState } from 'react'
import { Todo } from '../../../types/types'
import styles from './EditPanel.module.scss'

//Interface for props
interface EditPanelProps{
    id: number
    name: string
    status: string
    delTodo:(id: number) => void
    updateTodo: (editElement: number, newItem: Todo) => void
}

const EditPanel:React.FC<EditPanelProps> = ({id, name, status, delTodo, updateTodo}) => {
  const [ isEdit, setIsEdit]= useState(false) // State for edit mode ( boolean )
  const [input, SetInput] = useState(name) // State for new input text
  const [newStatus, SetNewStatus] = useState('new') // State for select input to update status
  
  // Prevent default form behaviour
  const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  // on button click construct a new task
  const onClick = () => {
        updateTodo(
          id,
          {
          id: id,
          name: input,
          status: newStatus,
         })
        setIsEdit(false) // set edit mode to false
    }
  // JSX for edit mode
  if(isEdit){
    return (
       <form onSubmit={onSend}  className={styles.main}>
        <input className={styles.input__update} type="text" value={input} onChange={(e)=> SetInput(e.target.value)}/>
        <select className={styles.select} value={newStatus} onChange={(e)=> SetNewStatus(e.target.value)}>
          <option value='new' >new</option>
          <option value='in progress' >in progress</option>
          <option value='done' >done</option>
        </select>
        <button type='submit'  onClick={onClick} className={styles.add_btn}>Update Task</button>
    </form>
    )
  }
  // JSX for readonly mode
  return (
         <div>
            <div className={styles.main}>
              <h3 className={styles.name}>Task: <span>{name}</span></h3>
              <p className={`${styles.status} ${status === 'new' ? null : styles.status__progress } ${status === 'done' ? styles.status__done : null} `}>{status}</p>
            </div>
            <button onClick={() => delTodo(id)} className={styles.del_btn}>delete</button>
            <button onClick={() => setIsEdit(true)} className={styles.update_btn}>update</button>
        </div>
  )
}

export default EditPanel