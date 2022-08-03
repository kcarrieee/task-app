import React, { useState, useContext } from 'react'
import TaskContext from '../../context/TaskContext'
import styles from './AddForm.module.scss'


const AddForm = () => {
    const [name, SetName] = useState('') // State for getting input value 
    const { addTodo } = useContext(TaskContext) //Getting fucntion from context using distructuring
    
    // Function runs on form submit to prevent default behaviour of form
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    // Function runs on form submit to add a new task with input value and lear form with SetName('')
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