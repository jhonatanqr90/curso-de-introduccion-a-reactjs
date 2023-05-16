import { useEffect, useState } from "react"

function useLocalStorage(storage_item=false, default_value=[]) {

    const [item, setItem] = useState(default_value)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(storage_item)
    
          !localStorage && localStorage.setItem(storage_item, JSON.stringify(default_value))
          const parsedItem = !localStorageItem ? default_value : JSON.parse(localStorageItem)
          setLoading(false)
          setItem(parsedItem)
        } catch (error) {
          setLoading(false)
          setError(true)
        }
      }, 1000)

    }, [])

    const saveItem = newItem => {
      const stringifyItem = JSON.stringify(newItem)
      localStorage.setItem(storage_item, stringifyItem)
      setItem(newItem)
    }
  
    return  { 
      item, 
      saveItem,
      loading, 
      error
    }
  
}

export { useLocalStorage }