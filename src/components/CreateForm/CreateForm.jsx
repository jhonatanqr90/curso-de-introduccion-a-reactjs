import { useContext, useEffect, useRef, useState } from 'react'
import classes from '@/styles/classes.module.css'
import styles from './CreateForm.module.css'
import { TodoContext } from '@/context/TodoContext'

const CreateForm = () => { 

  const { onCreateNew, setOpenModal } = useContext(TodoContext)
  const [ isActive, setIsActive ] = useState(true)
  const input = useRef()

  const setNewTodo = event => {
    event.preventDefault()
    const value = input.current.value
    if ( value === '' ) return
    onCreateNew(value)
    setOpenModal(false)
  }

  useEffect(() => {
    setIsActive(styles.active)
    let load = setTimeout(() => { input.current.focus() }, 500)
    return function() { clearTimeout(load) }
  }, [])

  return (
    <div className={`${styles.wrapper} ${isActive}`}>
      <div className={styles.back} onClick={()=>setOpenModal(false)}></div>
      <div className={styles.content}>
          <strong className={classes.microTitle}>Nombre de tarea</strong>
          <form
            onSubmit={setNewTodo} 
            className={styles.form}>
              <input 
                ref={input}
                className={styles.input} 
                type="text"
              />
              <button 
                type="submit"
                className={styles.button}
              >Hecho!</button>
          </form>
      </div>
    </div>
  )
}

export default CreateForm