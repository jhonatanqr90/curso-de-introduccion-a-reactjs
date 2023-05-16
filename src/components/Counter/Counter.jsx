import { useContext } from 'react'
import { TodoContext } from '@/context/TodoContext'
import { Messages } from '@/components'

const Counter = () => {
  const {
    loading, 
    total_todos
  } = useContext(TodoContext)

  return (
    <>
      { loading && <Messages type='counting' /> }
      { !loading && total_todos > 0 && <Messages type='calculated' /> } 
      { !loading && total_todos === 0 && <Messages type='no_yet' /> }
    </>
  )
}

export default Counter