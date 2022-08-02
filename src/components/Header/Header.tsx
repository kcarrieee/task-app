import { FaSearch } from 'react-icons/fa'
import styles from './Header.module.scss'
import { Iheader } from '../../types/types'


const Header = ({todoNum, handleSearch }: Iheader)  => {

  return (
    <header className={styles.header}>
        <div className={styles.logo}>TodoIst</div>
        <div className={styles.search}>
          <div className={styles.icon}>
          <FaSearch/>
          </div>
            <input type="text" placeholder="Search" onChange={(event)=> handleSearch(event.target.value)}/>
        </div>
        <div className='summary'>
         All tasks: {todoNum}
        </div>
      </header>
  )
}

export default Header