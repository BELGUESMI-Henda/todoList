import { ADD_TODO, REMOVE_TODO,EDIT_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actionsTypes'

let TodoId = 2

export const addTodo = text => ({
    type: ADD_TODO,
    id: TodoId++,
    text
})

export const deleteTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})
export const editTodo = (id) => ({
    type: EDIT_TODO,
    id: id
})
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})