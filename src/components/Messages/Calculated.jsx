import { useContext } from "react"
import styles from './Messages.module.css'
import { TodoContext } from "@/context/TodoContext"

const Calculated = () => {
    const { completed_todos, total_todos } = useContext(TodoContext)
    return (
      <p className={styles.subTitle}>
        Has completado <strong>{ completed_todos }</strong> de <strong>{ total_todos }</strong> { total_todos>1 ? 'tareas' : 'tarea' }
      </p>
    )
}

export default Calculated
  