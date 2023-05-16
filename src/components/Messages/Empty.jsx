import styles from './Messages.module.css'

const Empty = () => {
    return (
      <p className={styles.empty}>
        <span className={`material-symbols-outlined ${styles.icon}`}>hourglass_disabled</span>
        <strong>SIN TAREAS</strong>
        Crea tu primera tarea
      </p>
    )
}

export default Empty