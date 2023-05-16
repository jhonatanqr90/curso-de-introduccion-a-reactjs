import { useContext } from 'react'
import classes from  '@/styles/classes.module.css'
import styles from  './List.module.css'
import { TodoContext } from '@/context/TodoContext'
import { Item, Messages } from '@/components'

const List = () => {

  const { 
    search, 
    searchedTodos, 
    loading, 
    error, 
    onComplete, 
    onDelete
  } = useContext(TodoContext)

  const appFunctions = { onComplete, onDelete }
  
  return (
    <div className={styles.wrapper}>
      <strong className={classes.microTitle}>Encuentra tu tarea</strong>
      { loading && <Messages type='loading' /> }
      { error && <Messages type='error' /> }
      { ( !loading && search=='' && searchedTodos.length === 0 ) && <Messages type='empty' /> }
      { (!loading && search!='' && searchedTodos.length===0) && <Messages type='no_results' /> }
      { 
        ( !loading && (search!='' || search=='') && searchedTodos.length>0 ) 
          && <ul className={styles.list}> { searchedTodos.map( todo => <Item key={todo.id} todo={todo} {...appFunctions} /> ) }</ul> 
      }
    </div>
  )
}

export default List