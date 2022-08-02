import React, { useState } from 'react'
import { Todo } from '../../../types/types'

interface EditPanelProps{
    id: number
    name: string
    status: string
    delTodo:(id: number) => void
    updateTodo: (editElement: number, newItem: Todo) => void
}

const EditPanel:React.FC<EditPanelProps> = ({id, name, status, delTodo, updateTodo}) => {
  const [ isEdit, setIsEdit]= useState(false)
  const [input, SetInput] = useState('')
  const [newStatus, SetNewStatus] = useState('new')
    
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const onClick = () => {
        updateTodo(
          id,
          {
          id: id,
          name: input,
          status: newStatus,
         })
        SetInput('')
        setIsEdit(false)
    }
  
  if(isEdit){
    return (
       <form onSubmit={onSend} >
        <input type="text" placeholder='Task'  value={input} onChange={(e)=> SetInput(e.target.value)}/>
        <input type="text" value={newStatus} onChange={(e)=> SetNewStatus(e.target.value)}/>
        <button type='submit'  onClick={onClick}>Update Task</button>
    </form>
    )
  }
  return (
         <div>
            <h3>{name}</h3>
            <p>{status}</p>
            <button onClick={() => delTodo(id)}>delete</button>
            <button onClick={() => setIsEdit(true)}>update</button>
        </div>
  )
}

export default EditPanel