import styles from  './AppUI.module.css'
import {
  Counter,
  CreateButton,
  CreateForm,
  List,
  Modal,
  Search
} from '@/components'

function AppUI() {

  return (
    <main className={styles.app}>
      <header>
        <strong className={styles.title}>Que onda, Jhon!</strong>
        <Counter />
      </header>
      <Search />
      <List />
      <CreateButton />
      <Modal>
        <CreateForm />
      </Modal>
      <p className={styles.byMe}>By <a href="https://jhonatanquispe.com" target="_blank" rel="author">Jhonatan Quispe</a></p>
    </main>
  )
}

export default AppUI