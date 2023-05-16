import { TodoProvider } from '@/context/TodoContext'
import AppUI from './AppUI'

function App() {
  return (
    <TodoProvider><AppUI /></TodoProvider>
  )
}

export default App