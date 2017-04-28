
export const addTodo = (list, item) => {
  // return list.concat(item)
  return [...list, item]
}


export const generateId = () => Math.floor(Math.random()*10000) 
