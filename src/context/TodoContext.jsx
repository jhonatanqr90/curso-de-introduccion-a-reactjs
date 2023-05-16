import { useState, createContext } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import filterByValue from "@/utilities/filterByValue";
import { LOCAL_STORAGE_VERSION, EMPTY_SEARCH } from "@/constants";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {

    const {
        item: todos, 
        saveItem: saveTodos,
        error,
        loading
      } = useLocalStorage(LOCAL_STORAGE_VERSION, [])
      const [search, setSearch] = useState('')
      const [openModal, setOpenModal] = useState(false)
    
      const total_todos = todos.length
      const completed_todos = todos.filter( todo => todo.completed ).length
      const searchedTodos = search ? search == EMPTY_SEARCH ? [] : filterByValue(todos, 'title', search) : todos
    
      const onComplete = ID => {
        const temporalTodos = [...todos]
        const item = temporalTodos.find( todo => todo.id === ID )
        Object.assign( item, { completed : !item.completed } )
        saveTodos(temporalTodos)
      }
    
      const onDelete = ID => {
        const temporalTodos = [...todos]
        const filteredTodos = temporalTodos.filter( todo => todo.id !== ID )
        saveTodos(filteredTodos)
      }

      const onCreateNew = value => {
        const temporalTodos = todos
        const newItem = { id: Date.now(), title: value, completed:false }
        temporalTodos.unshift(newItem)
        saveTodos(temporalTodos)
      }
      
    const contextProps = { 
        total_todos, 
        completed_todos,
        todos, 
        searchedTodos, 
        onComplete, 
        onDelete, 
        onCreateNew,
        loading, 
        error, 
        setSearch,
        search,
        openModal,
        setOpenModal
    }

    return (
        <TodoContext.Provider value={contextProps}>
            { children }
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }