let timer
const debouncer = (fn, delay) => {
    if( timer ) clearTimeout(timer)
    timer = setTimeout(() => { fn() }, delay);
}

export default debouncer