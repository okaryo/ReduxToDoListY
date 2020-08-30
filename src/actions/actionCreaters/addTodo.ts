import { ADD_TODO } from '../actionTypes'

export default function addTodo(todo: {id: string, name: string, completed: boolean}) {
  return {
    type: ADD_TODO,
    payload: todo
  }
}