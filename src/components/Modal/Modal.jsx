import { createPortal } from "react-dom"
import { useContext } from "react"
import styles from './Modal.module.css'
import { TodoContext } from "@/context/TodoContext"

const Modal = ({children}) => {

  const { openModal } = useContext(TodoContext)
  const modalRoot = document.getElementById('modal')

  if ( !openModal) {
    modalRoot.classList.remove(styles.modal)
    return
  }

  modalRoot.classList.add(styles.modal)

  return (
    createPortal(
      children,
      modalRoot
    )
  )
}

export default Modal