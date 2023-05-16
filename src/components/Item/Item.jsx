/* eslint-disable react/prop-types */
import styles from './Item.module.css'

const Item = ( { todo : { id, title, completed }, onComplete, onDelete } ) => {

  const isCompleted = completed ? styles.completed : ''
  
  return (
    <li className={styles.item}>
        <div className={`${styles.itemCheck} ${isCompleted}`} onClick={ () => onComplete(id) }></div>
        <p className={styles.itemText} onClick={ () => onComplete(id) }>{title}</p>
        <div className={`${styles.itemDelete} material-symbols-outlined`} onClick={ () => onDelete(id) }>delete</div>
    </li>
  )

}

export default Item