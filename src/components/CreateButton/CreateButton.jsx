import { useContext } from 'react'
import styles from './CreateButton.module.css'
import { TodoContext } from "@/context/TodoContext"


const CreateButton = () => {

  const { openModal, setOpenModal } = useContext(TodoContext)
  const active = openModal ? styles.active : ''

  return (
    <>
      { !openModal && <div className={styles.wrapper}></div> }
      <div 
        className={`${styles.button} ${active}`}
        onClick={ () => setOpenModal(!openModal) }
      ></div>
    </>
  )
}

export default CreateButton