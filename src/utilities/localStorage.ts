const KEY_USER = 'to-do-wise-task-list'

// TASK LIST
export const setTaskListToLocalStorage = (userObject: object) => {
  localStorage.setItem(KEY_USER, JSON.stringify(userObject))
}

export const readTaskListFromLocalStorage = () => {
  const storedData = localStorage.getItem(KEY_USER)
  if (storedData) return JSON.parse(storedData)
  else return []
}