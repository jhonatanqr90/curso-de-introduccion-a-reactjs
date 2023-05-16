import { useContext, useState } from 'react'
import styles from  './Search.module.css'
import { TodoContext } from '@/context/TodoContext'
import filterByValue from '@/utilities/filterByValue'
import debouncer from '@/utilities/debouncer'
import { EMPTY_SEARCH } from "@/constants";

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const { setSearch, todos } = useContext(TodoContext)
  let block = false

  const handleChange = event => {
    const value = event.target.value
    setSearchValue(value)
    if ( todos.length === 0 ) return

    debouncer( () => {
      const data = filterByValue(todos, 'title', value)
      block = data.length === 0 && !block

      if ( data.length === 0 && block ) {
        setSearch(EMPTY_SEARCH)
        return
      }

      setSearch(value)
    }, 250)

  }

  return (
    <div className={styles.wrapper}>
      <input 
        className={styles.input} 
        type="text" 
        value={searchValue}
        onChange={handleChange} 
        placeholder='Busca tu tarea' />
      <div className={`material-symbols-outlined ${styles.iconSearch}`}>search</div>
    </div>
  )
}

export default Search