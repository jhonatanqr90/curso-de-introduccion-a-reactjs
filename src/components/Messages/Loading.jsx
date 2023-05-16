import styles from './Messages.module.css'

const Loading = () => {
  return (
    <p className={styles.empty}>
      <span className={`material-symbols-outlined ${styles.icon} ${styles.loading}`}>refresh</span>
      <strong>UN MOMENTO</strong>
      Estamos cargando tus tareas ...
    </p>
  )
}

export default Loading