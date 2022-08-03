import { FaSearch } from 'react-icons/fa'
import styles from './Header.module.scss'
import { useContext } from 'react'
import TaskContext from '../../context/TaskContext'


const Header = ()  => {
  const { todos, setSearchText } = useContext(TaskContext)

  return (
    <header className={styles.header}>
        <div className={styles.logo}>TodoIst</div>
        <div className={styles.search}>
          <div className={styles.icon}>
          <FaSearch/>
          </div>
            <input type="text" placeholder="Search" onChange={(event)=> setSearchText(event.target.value)}/>
        </div>
        <div className='summary'>
         All tasks: {todos.length}
        </div>
      </header>
  )
}

export default Header