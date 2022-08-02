import React, { useState } from 'react'
import { Todo } from '../../types/types'
import styles from './AddForm.module.scss'

interface IAddForm {
    addTodo: ({ name }: Omit<Todo, 'id' | 'status'>) => void
}
const AddForm: React.FC<IAddForm> = ({addTodo}) => {
    const [name, SetName] = useState('')
    
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const onClick = () => {
        addTodo({name: name})
        SetName('')
    }

  return (
    <form onSubmit={onSend} className={styles.form}>
        <input type="text" placeholder='Task' className={styles.add_input} value={name} onChange={(e)=> SetName(e.target.value)}/>
        <button type='submit' className={styles.add_btn} onClick={onClick}>Add Task</button>
    </form>
  )
}

export default AddForm