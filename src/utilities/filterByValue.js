const filterByValue = (array, key, value) => {
    const data = array.filter(
        item => {
            const todoTitle = item[key].toLowerCase()
            const searchText = value.toLowerCase()
            return todoTitle.includes(searchText)
        }
    )
    return data
}

export default filterByValue